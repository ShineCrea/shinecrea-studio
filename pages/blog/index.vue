// pages/index.vue
<template>
  <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4"><p class="text-[#1d190c] tracking-light text-[32px] font-bold leading-tight min-w-72">Insights</p></div>

    <div v-if="articles && articles.length">
      <ArticleCard v-for="article in articles" :key="article._path" :article="article" />
    </div>

    <p v-else>Aucun article trouvé.</p>
  </div>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData, queryCollection } from '#imports' // Assure-toi d'avoir ceci

const { data: articles } = await useAsyncData('all-articles', () =>
  queryCollection('articles').all() // <<< Utilise .all() ici
)

console.log('Articles récupérés avec .all() :', articles.value)
</script>