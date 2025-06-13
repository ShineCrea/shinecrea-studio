// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
  // components: [
  //   {
  //     path: '~/components/content/',
  //     global: false, // on peut garder à false, car Nuxt Content gère l'import dans mdx
  //   },
  // ],
   tailwindcss: {
    cssPath: [`/assets/css/tailwind.css`, { injectPosition: "first" }],
    config: {},
    viewer: true,
    exposeConfig: false,
  }
  
})