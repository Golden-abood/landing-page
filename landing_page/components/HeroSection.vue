<template>
  <div
    class="bg-hero-img min-h-screen lg:h-[900px] bg-center bg-cover mb-[30%] lg:mb-[35%] px-5 lg:px-0"
  >
    <nav-bar class="py-4"></nav-bar>

    <div class="relative overflow-hidden">
      <div class="text-center pt-[200px] relative">
        <nuxt-link to="#">
          <img class="mx-auto" src="/images/logo-hero.svg" alt="" />
        </nuxt-link>

        <p class="text-[#fff] font-medium text-[24px] mt-10 mb-16 mx-auto">
          {{ $t('heroSectionTitle') }}
        </p>

        <div class="flex justify-center mb-10 gap-x-3">
          <download-button
            icon="logos:google-play-icon"
            :label="$t('download.android')"
            link="https://play.google.com/store/apps/details?id=com.wareed.app"
          ></download-button>
          <download-button
            icon="gridicons:cloud-download"
            color="#fff"
            :label="$t('download.direct')"
            link="https://wareed.sy/download/android.apk"
          ></download-button>
        </div>

        <div class="overflow-hidden">
          <img
            class="hidden lg:block absolute top-[32%] right-[-2%]"
            src="/images/path-267.svg"
          />
          <img
            class="hidden lg:block absolute top-[50%] left-[-5%]"
            src="/images/path-268.svg"
          />
        </div>
        <div
          class="container hidden lg:grid grid-cols-3 justify-items-center mt-[90px] gap-y-10 relative z-10"
        >
          <img class="w-[70%] lg:mt-20" src="/images/screen-1.png" />
          <div class="relative w-[70%]">
            <div
              class="hidden md:block before:content-['0'] font-thin before:pt-[1px] md:before:pt-[0px] xl:before:pt-[0px] before:text-[50px] !before:font-thien lg:before:text-[60px] xl:before:text-[70px] before:bg-[#b40043] before:w-[60%] before:h-[15%] before:absolute before:top-[-12%] before:left-[50%] before:rounded-lg xl:before:rounded-[20px] before:translate-x-[-50%] text-[#fff] after:bg-[#fff] after:absolute after:top-[-7%] after:left-[50%] after:translate-x-[-50%] after:w-[1%] after:h-[0.5%] md:after:w-1 md:after:h-1 after:rounded-full hero"
            ></div>
            <img class="relative z-20" src="/images/screen-2.png" />
          </div>

          <img class="w-[70%] lg:mt-20" src="/images/screen-3.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero::after {
  animation: hero-animate 2.5s infinite 2s ease-in-out backwards;
}
@keyframes hero-animate {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 100%;
  }
  45% {
    top: -8%;
    opacity: 100%;
  }
  65% {
    top: -4%;
    opacity: 100%;
  }
  75% {
    top: -5%;
    opacity: 60%;
  }
  95% {
    top: -4%;
    opacity: 20%;
  }
  100% {
    opacity: 0%;
  }
}
/*
  @media (min-width: 768px) {
    @keyframes hero-animate {
      0% {
        opacity: 0;
      }
      30% {
        opacity: 100%;
      }
      45% {
        top: -9%;
        opacity: 100%;
      }
      65% {
        top: 0%;
        opacity: 100%;
      }
      75% {
        top: -4%;
        opacity: 60%;
      }
      95% {
        top: -4%;
        opacity: 20%;
      }
      100% {
        opacity: 0%;
      }
    
    }
  }
  */
</style>
