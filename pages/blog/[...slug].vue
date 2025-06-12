<template>
  <div class="container mx-auto p-6">
    <h1 class="text-4xl font-extrabold mb-4 text-gray-900">
      {{ article?.title || 'Titre de l\'article' }}
    </h1>

    <p v-if="article?.description" class="text-xl text-gray-600 mb-8">
      {{ article.description }}
    </p>

    <article class="prose lg:prose-xl max-w-none">
      <ContentRenderer v-if="article" :value="article" />
      <p v-else>Contenu de l'article non trouvé.</p>
    </article>

    <NuxtLink to="/" class="mt-10 inline-block text-blue-600 hover:underline">
      &larr; Retour à la liste des articles
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useAsyncData, queryCollection, useSeoMeta, showError } from '#imports'; // Assurez-vous d'importer showError

// 1. Récupérer le paramètre "slug" de l'URL
const route = useRoute();
const slug = route.params.slug as string; // Le slug peut être une string ou un tableau de strings, on le caste en string

// 2. Construire le chemin complet de l'article dans le système de fichiers virtuel de Nuxt Content
// Si vos articles sont dans content/articles/, le chemin sera /articles/mon-slug
const articlePath = `/articles/${slug}`;

// 3. Récupérer les données de l'article avec useAsyncData et queryCollection
const { data: article } = await useAsyncData(`article-${slug}`, () =>
  queryCollection('articles') // On requête la collection 'articles'
    .where('path', '=', articlePath) // On filtre par le chemin exact de l'article
    .first() // On ne veut qu'un seul article
);

// 4. Gérer le cas où l'article n'est pas trouvé (erreur 404)
if (!article.value) {
  throw showError({ statusCode: 404, message: 'Article non trouvé', fatal: true });
}

// 5. Mettre à jour les métadonnées SEO pour la page
useSeoMeta({
  title: article.value?.title,
  description: article.value?.description,
  // Vous pouvez ajouter d'autres balises meta comme og:image, twitter:card, etc.
});
</script>

<style scoped>
/* Styles spécifiques pour cette page si nécessaire. */
/*
  Si vous utilisez Tailwind CSS et la typographie, la classe 'prose' est très utile.
  Si vous n'utilisez pas Tailwind, vous devrez styliser l'élément 'article'
  et le contenu Markdown (headings, paragraphs, lists, etc.) manuellement.
*/
</style>