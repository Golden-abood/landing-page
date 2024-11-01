<template>
  <div class="grid md:grid-cols-2 gap-8 mb-12">
    <div
      class="lg:max-w-md flex flex-col justify-center"
      :data-aos="dataAos.text"
      :class="{ 'lg:order-2': reversed }"
    >
      <h3 class="text-2xl font-bold text-primary mb-3">
        {{ item.title }}
      </h3>
      <h3 class="text-base font-medium text-primary-light">
        {{ item.text }}
      </h3>
    </div>

    <div
      :class="{ 'lg:order-1': reversed }"
      class="rounded-[20px]"
      :data-aos="dataAos.image"
    >
      <!-- TODO: AUTO FETCH THE ITEM SRC BASED ON THE DIRECTION  -->
      <img class="rounded-[20px]" :src="item.src" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  item: { type: Object, required: true },
  reversed: { type: Boolean, default: false }
})

const axis = computed(() => ({
  main: props.item.dir == 'rtl' ? 'right' : 'left',
  second: props.item.dir == 'rtl' ? 'left' : 'right'
}))

const dataAos = computed(() => ({
  text: `fade-${axis.value.second}`,
  image: `fade-${axis.value.main}`
}))
</script>

<style scoped></style>