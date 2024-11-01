// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/styles/main.scss'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    'nuxt-icon',
    '@nuxt/image',
    'nuxt-swiper'
  ],

  devServer: {
    port: 8000
  },

  image: {
    format: ['webp']
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix',
    defaultLocale: 'ar',
    defaultDirection: 'rtl',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
        dir: 'ltr',
        name: 'English'
      },
      {
        code: 'ar',
        iso: 'ar-EG',
        file: 'ar-EG.json',
        dir: 'rtl',
        name: 'Arabic'
      }
    ]
  },
  app: {
    head: {
      title: 'Wareed',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description'
        }
      ]
    }
  }
})
