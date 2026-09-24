<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
});

const title = 'GitGrasp';
const description = 'A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.';
const image = 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png';

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image,
  twitterCard: 'summary_large_image'
});
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>