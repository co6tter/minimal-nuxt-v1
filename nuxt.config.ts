// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-04-27",
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
      },
      link: [{ rel: "icon", href: "/favicon.ico" }],
    },
  },
  css: ["~/assets/style.css"],
});
