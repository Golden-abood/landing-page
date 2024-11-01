<template>
  <div
    class="grid items-center grid-cols-12 py-10 mx-6 gap-y-8 md:mx-8 lg:mx-16"
  >
    <div class="col-span-12 lg:col-span-7">
      <div class="flex flex-col items-center">
        <div class="my-6 lg:my-12">
          <img class="w-[150px] lg:w-[300px]" src="/images/delete-2.svg" />
        </div>
      </div>
    </div>
    <div class="flex items-center col-span-12 lg:col-span-5">
      <div class="px-10 text-primary bg-[#fff] rounded-xl w-full">
        <div>
          <nuxt-img
            class="my-8 mx-auto h-[60px]"
            src="/images/logo-blue.svg"
            alt="logo"
          />
        </div>
        <form class="pb-8" @click.prevent>
          <div class="grid rounded-xl justify-items-center">
            <h3 class="mb-1 font-semibold text-dark text-g3xl">
              {{ $t('delete.btn-delete') }}
            </h3>

            <div class="my-6 xl:mb-10">
              <label class="text-xl">{{ $t('delete.phone') }} :</label>
              <input
                type="text"
                class="block mt-4 px-4 w-[300px] xl:w-[400px] py-2 border-solid border-[1px] outline-none rounded-lg"
              />
            </div>
            <div class="mt-6 xl:mt-0">
              <label class="text-xl">{{ $t('delete.message') }} :</label>
              <textarea
                rows="6"
                type="text"
                class="block mt-4 px-4 w-[300px] xl:w-[400px] py-2 border-solid border-[1px] outline-none rounded-lg"
              ></textarea>
            </div>
          </div>
          <div class="text-center">
            <button
              data-modal-target="popup-modal"
              data-modal-show="popup-modal"
              id="button"
              class="mt-10 bg-[#eb2d42] py-2 px-10 text-lg rounded-lg text-[#fff]"
            >
              {{ $t('delete.btn-delete') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!--Modal-->
  <div
    id="popup-modal"
    tabindex="-1"
    class="absolute top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0"
  >
    <div class="relative w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
          data-modal-hide="popup-modal"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only closeButton">Close modal</span>
        </button>
        <div class="p-6 text-center">
          <svg
            class="w-12 h-12 mx-auto mb-4 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <div class="text-start mt-9">
            <label for="password" class="text-base font-medium text-gray-500"
              >{{ $t('modal.text') }}
            </label>
            <input
              v-model="code"
              type="password"
              name="password"
              id="password"
              placeholder="••••••"
              class="bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
            <div class="flex justify-center mt-4 text-center">
              <button
                data-modal-hide="popup-modal"
                type="button"
                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
              >
                {{ $t('modal.delete') }}
              </button>
              <button
                data-modal-hide="popup-modal"
                id="closeButton"
                type="button"
                class="text-gray-500 bg-[#fff] hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:!text-gray-900 focus:z-10"
              >
                {{ $t('modal.cancel') }}
              </button>
            </div>
          </div>
          <!--
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {{ $t('modal.text') }}
          </h3>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initModals } from 'flowbite'

// initialize components based on data attribute selectors

onMounted(() => {
  initModals()
})

const options = {
  backdrop: 'static',
  backdropClasses: 'bg-opacity-10 dark:bg-opacity-20 fixed inset-0 z-20'
}

definePageMeta({
  layout: 'delete'
})
const code = ref('123456')
const tokenId = ref(1)

const confirm = async () => {
  try {
    const res = await fetch(
      'https://salem.ejad.net/api/v1/my/devices/confirm-delete',
      {
        method: 'post',
        headers: {
          Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibGFzdE5hbWUiOiLYp9mE2YXYsdmK2LYiLCJmaXJzdE5hbWUiOiLYudmE2YrZhCIsInJvbGUiOiJQQVRJRU5UIiwiand0SWQiOiIwMTcxZTU5NC02NTI3LTQ1MzktOTE1OS0zNzNmN2RmNmQ1OGMiLCJpYXQiOjE2OTMyMTg4MDcsImV4cCI6MTY5NTgxMDgwNywiaXNzIjoiZGV2ZWxvcG1lbnQuc2FsZW0uY29tIn0.NHWUNSwKNTlocpGHtpySkAcSsZYAe-hT07D7sdnSmNJpuh_238nzmD3IerC7wz_s4EwfTgQUrzjTNyW8l9DPk_ovCADl1GC_r_jz3r0sS7w_-9tei8dRohLaQYagh1s2PUhmjJWRfaX_kIycdXAAl94k4ZrBzEjGeHF7pfYQWsViLzSwPdEYSLfhf2MTQG1ssOH_WzUj8mrg9dRmw3iv1lPgkcY-ayVeQW-HWZBPWhux3uzHCEIb_ynUK_7ZNWsW65fz5HbvLPJ9cUJfJ3nXAULkboyV40t-QDCVeKz32Td22O5GwlEFmSBuNGoljZNVcjQzpzCdB335uWe-2iOu5g`
        },
        body: { tokenId: tokenId.value, code: code.value }
      }
    )
    const data = await res.json()
  } catch (err) {}
}
confirm()
</script>

<style lang="scss" scoped></style>
