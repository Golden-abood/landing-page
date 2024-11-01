<template>
  <div class="bg-primary py-16">
    <div
      id="services"
      class="container text-[#fff]  relative overflow-hidden"
    >
      
      <div class="text-center relative">
        <h3 class="title-section mb-12">{{ $t('servicesSection.title') }}</h3>
        <p class="text-base">{{ $t('servicesSection.text') }}</p>
      </div>
  
      <img
        class="hidden lg:block absolute top-[-8%] right-[-2%]"
        src="/images/path-267.svg"
      />
      <img
        class="hidden lg:block absolute bottom-[-15%] left-[-2%]"
        src="/images/path-268.svg"
      />
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-16 gap-[50px] justify-items-center"
      >
        <div
          v-for="(item, index) in services"
          :key="index"
          class="flex-col relative lg:text-start items-start max-w-[80%] border-b-solid border-b-[4px] pb-5 border-b-[#243461] lg:border-b-0"
          :class="{
            'lg:before:absolute before:top-[-30px] before:start-[-50px] before:w-[4px] before:h-[200px] before:bg-[#243461]':
              index !== 0
          }"
          data-aos="zoom-in"
          data-aos-duration="500"
          :data-aos-delay="(index + 1) * 200"
        >
          <h4
            class="text-xl font-bold relative before:bg-secondary before:absolute before:top-[50%] before:translate-y-[-50%] before:start-[-25px] before:w-[15px] before:h-[15px] before:rounded-full"
          >
            {{ item.title }}
          </h4>
          <p class="text-base mt-3">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const services = computed(() => {
  return [
    {
      title: t('servicesSection.services.one.title'),
      text: t('servicesSection.services.one.text')
    },
    {
      title: t('servicesSection.services.two.title'),
      text: t('servicesSection.services.two.text')
    },
    {
      title: t('servicesSection.services.three.title'),
      text: t('servicesSection.services.three.text')
    },
    {
      title: t('servicesSection.services.four.title'),
      text: t('servicesSection.services.four.text')
    }
  ]
})
</script>

<style scoped></style>
