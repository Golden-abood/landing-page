<template>
  <div>
    <nav
      class="hidden z-10 absolute top-0 w-full lg:flex justify-around items-center h-[80px] font-normal text-base pt-[34px]"
    >
      <div class="flex gap-x-[90px]">
        <nuxt-link
          to="#services"
          :class="{ active: isHovered || isActive }"
          @mouseover="isHovered = true"
          @mouseout="isHovered = false"
          >{{ $t('navLinks.linkOne') }}
        </nuxt-link>
        <nuxt-link
          to="#features"
          :class="{ active: isHoveredTwo }"
          @mouseover="
            () => {
              isHoveredTwo = true
              isActive = false
              isHoveredThree = false
            }
          "
          @mouseout="isHoveredTwo = false"
        >
          {{ $t('navLinks.linkTwo') }}</nuxt-link
        >

        <nuxt-link
          to="#contactUs"
          :class="{ active: isHoveredThree }"
          @mouseover="
            () => {
              isHoveredThree = true
              isActive = false
            }
          "
          @mouseout="isHoveredThree = false"
          >{{ $t('navLinks.linkThree') }}</nuxt-link
        >
      </div>
      <div class="logo">
        <nuxt-link to="/">
          <img src="/images/logo.svg" />
        </nuxt-link>
      </div>
      <div class="flex gap-x-5 items-center">
        <nuxt-link
          to="https://play.google.com/store/apps/details?id=com.wareed.app"
          target="blanc"
          class="px-6 py-2 border-[1px] border-white bored-solid text-white rounded-[30px]"
        >
          {{ $t('navLinks.linkFour') }}
        </nuxt-link>
        <LangSwitch />

        <div class="flex gap-x-5">
          <nuxt-link
            to="https://play.google.com/store/apps/details?id=com.wareed.app"
            target="blanc"
            ><Icon
              name="material-symbols:android"
              color="white"
              class="text-[25px] font-bold"
          /></nuxt-link>
          <span :class="dir === 'rtl' ? 'w-12' : 'w-[90px]'"></span>
        </div>
      </div>
    </nav>

    <!-- Mobile -->
    <nav class="lg:hidden flex items-center justify-between z-40">
      <div>
        <Icon
          :name="
            showMenu ? 'line-md:close' : 'line-md:close-to-menu-alt-transition'
          "
          size="30"
          color="white"
          class="relative z-50 cursor-pointer"
          @click="showMenu = !showMenu"
        />
        <transition name="fade">
          <mobile-menu v-if="showMenu" @close="showMenu = false"></mobile-menu>
        </transition>
      </div>
      <LangSwitch class="ms-auto z-10" />
    </nav>
  </div>
</template>

<script setup lang="ts">
const isHovered = ref(false)
const isHoveredTwo = ref(false)
const isHoveredThree = ref(false)
const isActive = ref(true)

const showMenu = ref(false)
const dir = inject('dir')
</script>

<style>
.router-link-active {
  position: relative;
  transition: all 5s ease;
}
.active {
  transition: all 5s ease;
}
.active::after {
  transition: all 3s ease;
}
.active::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ab0d4d;
  height: 8px;
  width: 30px;
  border-radius: 20px;
}
.active:hove::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ab0d4d;
  height: 8px;
  width: 30px;
  border-radius: 20px;
}
.router-link-exact-active {
  color: white;
}
.router-link-exact-active {
  color: white;
}
</style>
