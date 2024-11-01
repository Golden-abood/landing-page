<template>
  <div id="features" class="container overflow-hidden">
    <h3 class="title-section mb-12 text-center">{{ $t('FeaturesTitle') }}</h3>

    <FeaturesItem
      v-for="(item, index) in features"
      :key="index"
      :item="item"
      :reversed="index == 1"
      class="text-center md:text-start"
    ></FeaturesItem>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const dir = inject<any>('dir')
const features = computed(() => {
  return [
    {
      dir: dir.value,
      title: t('Features.one.title'),
      text: t('Features.one.text'),
      src: `/images/articles-${dir.value}.jpg`
    },
    {
      dir: `${dir.value === 'rtl' ? 'ltr' : 'rtl'}`,
      title: t('Features.two.title'),
      text: t('Features.two.text'),
      src: `/images/Pinpoint-${dir.value}.jpg`
    },
    {
      dir: dir.value,
      title: t('Features.three.title'),
      text: t('Features.three.text'),
      src: `/images/sms-${dir.value}.jpg`
    }
  ]
})
</script>

<style scoped></style>
