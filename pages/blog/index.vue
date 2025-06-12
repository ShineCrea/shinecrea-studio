// pages/index.vue
<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Tous les articles</h1>

    <div v-if="articles && articles.length" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ArticleCard v-for="article in articles" :key="article._path" :article="article" />
    </div>

    <p v-else>Aucun article trouvé.</p>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData, queryCollection } from '#imports' // Assure-toi d'avoir ceci

const { data: articles } = await useAsyncData('all-articles', () =>
  queryCollection('articles').all() // <<< Utilise .all() ici
)

console.log('Articles récupérés avec .all() :', articles.value)
</script>