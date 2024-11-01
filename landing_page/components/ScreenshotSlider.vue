<template>
  <div class="">
    <h3 class="title-section text-center mb-12 -mt-20 md:-mt-44">
      {{ $t('screenshotsTitle') }}
    </h3>

    <swiper
      :modules="modules"
      :loop="true"
      :autoplay="false"
      :slides-per-view="1"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true,
        bulletElement: 'button'
      }"
    >
      <swiper-slide>
        <img
          class="w-[70%] md:w-[50%] mx-auto"
          src="/images/screen-1.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-[70%] md:w-[50%] mx-auto"
          src="/images/screen-2.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-[70%] md:w-[50%] mx-auto"
          src="/images/screen-3.png"
          alt=""
        />
      </swiper-slide>

      <div class="swiper-pagination mb-1"></div>

      <div class="swiper-button-prev mx-3 md:mx-16 text-primary"></div>

      <div class="swiper-button-next mx-3 md:mx-16 text-primary"></div>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Navigation, Pagination } from 'swiper/modules'
const modules = [Navigation, Pagination]
</script>

<style scoped></style>
