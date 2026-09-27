import { join } from 'node:path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/supabase', '@nuxt/icon'],

  supabase: {
    redirect: false
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: join(import.meta.dirname, 'app/assets/icons')
      }
    ]
  },

  compatibilityDate: '2026-06-30',

  runtimeConfig: {
    public: {
        supabaseUrl: '',
        supabaseKey: ''
    }
  }
});