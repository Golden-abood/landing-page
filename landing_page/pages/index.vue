<template>
  <div class="flex-col">
    <HeroSection />

    <ScreenshotSlider class="lg:hidden" />

    <AboutUs class="my-12" />

    <Services class="my-12" />

    <Features class="my-12" />

    <ContactUs class="mt-16" />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
useHead({
  title: `${t('head.title')}`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: `${t('head.content')}`
    }
  ]
})
</script>
