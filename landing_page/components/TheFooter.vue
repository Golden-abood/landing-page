<template>
  <footer dir="ltr" class="bg-primary py-8">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div div class="flex flex-col max-w-[20%] mx-auto md:mx-0">
          <img src="/images/logo-6.svg" class="" />
          <img src="/images/logo.svg" class="mt-2 md:mt-4" />
        </div>

        <div class="flex justify-center md:justify-end mt-8 md:mt-0 gap-x-4">
          <download-button
            icon="gridicons:cloud-download"
            color="#fff"
            :label="$t('download.direct')"
            link="https://wareed.sy/download/android.apk"
          ></download-button>
          <download-button
            icon="logos:google-play-icon"
            :label="$t('download.android')"
            link="https://play.google.com/store/apps/details?id=com.wareed.app"
          ></download-button>
          <!-- <img src="/images/google-play.svg" class="max-w-[25%] md:max-w-[14%]" /> -->
          <!-- <img src="/images/app-store.svg" class="max-w-[25%] md:max-w-[14%]" /> -->
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 mt-8">
        <p class="font-normal text-white text-center md:text-left order-2">
          All Rights Reserved for Wareed || 2023
        </p>
  
        <div
          class="flex justify-center md:justify-auto gap-x-4 mb-4 md:mb-0 order-1 md:order-2 md:ml-auto"
        >
          <nuxt-link to="https://wa.me/963958800114" target="blanc">
            <Icon
              name="bi:whatsapp"
              size="40"
              color="white"
              class="p-2 border-[1px] border-solid border-white rounded-[10px]"
            />
          </nuxt-link>
          <nuxt-link
            to="https://www.instagram.com/wareedmed/?igshid=NzZlODBkYWE4Ng%3D%3D"
            target="blanc"
          >
            <Icon
              name="ion:logo-instagram"
              size="40"
              color="white"
              class="p-2 border-[1px] border-solid border-white rounded-[10px]"
            />
          </nuxt-link>
          <nuxt-link
            to="https://www.facebook.com/people/Wareed/100095107548856/?mibextid=ZbWKwL"
            target="blanc"
          >
            <Icon
              name="ic:outline-facebook"
              size="40"
              color="white"
              class="p-2 border-[1px] border-solid border-white rounded-[10px]"
            />
          </nuxt-link>
        </div>
      </div>

    </div>

  </footer>
</template>

<script setup lang="ts"></script>
