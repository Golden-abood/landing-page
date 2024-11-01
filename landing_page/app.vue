<template>
  <Nuxt-Layout :dir="head.htmlAttrs.dir">
    <Nuxt-Page :dir="head.htmlAttrs.dir" />
  </Nuxt-Layout>
</template>
<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

const dir = ref(head.value.htmlAttrs.dir)

provide('dir', dir)
</script>
