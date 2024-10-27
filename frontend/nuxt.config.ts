// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss' ],
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3'}
      ],
      link: [
        { rel: 'stylsheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' },
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiEndPoint: process.env.NUXT_PUBLIC_API_ENDPOINT || 'tsetset',
    }
  }
})