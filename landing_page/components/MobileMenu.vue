<template>
  <div class="mobile-nav fixed flex-col items-center top-0 left-0 w-screen h-screen z-30 overflow-y-auto pb-10">
    <div class="block my-24" @click="pushRouter('/')">
      <img class="mx-auto" src="/images/logo-hero.svg" alt="" />
    </div>

    <div class="flex flex-col gap-y-10 justify-center items-center">
      
      <div class="cursor-pointer text-white font-bold text-3xl opacity-0 nav-link-1" @click="pushRouter('services')"
        >{{ $t('navLinks.linkOne') }}
      </div>
      
      <div class="cursor-pointer text-white font-bold text-3xl opacity-0 nav-link-2" @click="pushRouter('features')">
        {{ $t('navLinks.linkTwo') }}</div
      >
      
      <div class=" cursor-pointer text-white font-bold text-3xl opacity-0 nav-link-3" @click="pushRouter('contactUs')">{{ 
        $t('navLinks.linkThree')
      }}</div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const emit = defineEmits(['close'])

// prevent body scrolling when mobile nav is opened
onMounted(() => {
  document.querySelector('body').classList.add('overflow-hidden')
})
onUnmounted(() => {
  document.querySelector('body').classList.remove('overflow-hidden')
})

// router push
const pushRouter = (route) => {
  // push router
  router.push(`/#${route}`)

  // close menu
  emit('close')
}

</script>

<style scoped>
.mobile-nav::after {
    /* content: ''; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(50px);
    z-index: -1;
}

.mobile-nav {
    backdrop-filter: blur(50px);
}

.nav-link-1 {
    animation: link-animate .75s forwards ease-in-out
}

.nav-link-2 {
    animation: link-animate .75s forwards .15s ease-in-out
}

.nav-link-3 {
    animation: link-animate .75s forwards .3s ease-in-out
}

@keyframes link-animate {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0)
    }
}
</style>