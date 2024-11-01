<template>
  <div>
    <button class="p-2 text-[#fff]" @click="toggleLocale">
      {{ currentLocale }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { locales, locale, setLocale, defaultLocale } = useI18n()
const language = computed({
  get: () => locale.value,
  set: value => {
    setLocale(value)
  }
})
let lan: any = useCookie('i18n_redirected')
const currentLocale = ref(lan.value === 'ar' ? 'en' : 'ar')
const toggleLocale = () => {
  lan.value = lan.value === 'ar' ? 'en' : 'ar'
  currentLocale.value === lan.value
  location.reload()
  setLocale(lan.value)
}
</script>

<style scoped></style>
