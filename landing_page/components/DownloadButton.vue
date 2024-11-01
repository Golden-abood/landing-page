<template>
  <nuxt-link :to="link" target="blanc">
    <div dir="ltr" class="px-6 py-2 bg-black rounded-lg  flex items-center gap-x-6">
        <Icon
          :name="icon"
          size="30"
          :color="color"
        />
        <div class="hidden md:flex flex-col items-end justify-center">
          <div class="text-white text-sm whitespace-nowrap">{{ $t('download.label') }}</div>
          <div class="text-white text-lg">{{ label }}</div>
        </div>
    </div>
  </nuxt-link>
</template>

<script setup>
defineProps({
  link: {
    type: String
  },
  icon: {
    type: String
  },
  label: {
    type: String
  },
  color: {
    type: String
  }
})
</script>