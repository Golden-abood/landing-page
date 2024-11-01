<template>
  <div
    id="contactUs"
    class="bg-primary-light text-white overflow-hidden"
  >
  <div class="container py-16">
    <div class="grid grid-cols-12 justify-items-center">
      <div class="col-span-12 xl:col-span-4">
        <div class="relative xl:max-w-[80%] text-center xl:text-start">
          <h3 :class="dir === 'rtl' ? 'title-section-2' : 'title-section-2-en'">
            {{ $t('contactUs.title') }}
          </h3>
          <p class="mt-1 text-base">{{ $t('contactUs.text') }}</p>

          <span
            class="bg-[#3566b0] text-base p-3 py-5 hidden xl:block absolute left-[50%] xl:start-0 translate-x-[-50%] xl:translate-x-0 xl:w-[100%] md:bottom-[-550px] rounded-lg"
            :class="dir === 'rtl' ? 'lg:bottom-[-250px]' : 'lg:bottom-[-220px]'"
          >
            {{ $t('contactUs.text-2') }}
          </span>
        </div>
      </div>
      <div class="col-span-12 xl:col-span-8 pt-16 xl:pt-0">
        <form>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="mb-6 xl:mb-10 text-start">
              <label class="text-xl font-semibold">{{
                $t('contactUs.name')
              }}</label>
              <input
                type="text"
                class="block mt-4 px-4 w-[100%] md:w-[350px] py-2 border-solid border-[1px] border-[#fff] bg-primary-light outline-none rounded-lg"
              />
            </div>
            <div class="mb-6 xl:mb-10">
              <label class="text-xl font-semibold">{{
                $t('contactUs.email')
              }}</label>
              <input
                type="text"
                class="block mt-4 px-4 w-[100%] md:w-[350px] py-2 border-solid border-[1px] border-[#fff] bg-primary-light outline-none rounded-lg"
              />
            </div>
          </div>
          <div class="mt-6 xl:mt-0">
            <label class="text-xl font-semibold">{{
              $t('contactUs.message')
            }}</label>
            <textarea
              rows="6"
              type="text"
              class="block mt-4 px-4 w-[100%] xl:w-[730px] py-2 border-solid border-[1px] border-[#fff] bg-primary-light outline-none rounded-lg"
            ></textarea>
          </div>
          <span
            class="bg-[#3566b0] text-base p-3 py-5 block mt-6 xl:hidden relative left-[50%] xl:right-0 translate-x-[-50%] xl:translate-x-0 xl:w-[100%] rounded-[10px]"
          >
            {{ $t('contactUs.text-2') }}
          </span>
          <div class="text-center xl:text-right">
            <button
              class="mt-6 xl:mt-12 bg-[#30558e] py-2 px-16 text-lg rounded-lg text-[#84a1c9]"
            >
              {{ $t('contactUs.send') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
const dir = inject('dir')
</script>

<style scoped></style>
