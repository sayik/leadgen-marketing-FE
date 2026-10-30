export default defineNuxtConfig({
  compatibilityDate: '2025-02-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Leadgen — Turn every enquiry into an opportunity',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#f5f2eb' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      contactEmail: 'hello@yourdomain.com',
      contactPhone: '+91 00000 00000'
    }
  }
})
