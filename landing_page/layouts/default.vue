<template>
  <div>
    <slot />
  </div>
  <TheFooter />
</template>
<script setup lang="ts">
// @ts-ignore
import AOS from 'aos'

onMounted(() => {
  AOS.init({
    once: true,
    offset: 50,
    duration: 700
  })
})
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>
