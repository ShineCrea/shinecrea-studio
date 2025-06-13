<template>
  

      <!-- Corps de l'article -->
      <div class="px-40 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
          <!-- Fil d’ariane -->
          <div class="flex flex-wrap gap-2 p-4">
            <NuxtLink to="/blog" class="text-[#a18d45] text-base font-medium leading-normal">Blog</NuxtLink>
            <span class="text-[#a18d45] text-base font-medium leading-normal">/</span>
            <span class="text-[#1d190c] text-base font-medium leading-normal">{{ article?.title }}</span>
          </div>

          <!-- Titre -->
          <h2 class="text-[#1d190c] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
            {{ article?.title }}
          </h2>

          <!-- Auteur et date -->
          <p class="text-[#a18d45] text-sm font-normal leading-normal pb-3 pt-1 px-4">
            Par {{ article?.author || 'Auteur inconnu' }} · Publié le {{ article?.date ? new Date(article.date).toLocaleDateString('fr-FR') : 'date inconnue' }}
          </p>

          <!-- Image de couverture -->
          <div v-if="article?.meta?.img || article?.img" class="flex w-full grow bg-[#fcfbf8] @container py-3">
            <div class="w-full gap-1 overflow-hidden bg-[#fcfbf8] @[480px]:gap-2 aspect-[3/2] flex">
              <div
                class="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                :style="{ backgroundImage: `url(${article.meta?.img || article.img})` }"
              ></div>
            </div>
          </div>

          <!-- Contenu Markdown rendu par Nuxt Content -->
          <div class="prose prose-lg text-[#1d190c] px-4 max-w-none">
            <ContentRenderer :value="article" />
          </div>
        </div>
      </div>
    

</template>

<script setup lang="ts">
import {
  useRoute,
  useAsyncData,
  queryCollection,
  useSeoMeta,
  showError
} from '#imports';

const route = useRoute();
const slug = route.params.slug as string;
const articlePath = `/articles/${slug}`;

const { data: article } = await useAsyncData(`article-${slug}`, () =>
  queryCollection('articles')
    .where('path', '=', articlePath)
    .first()
);

if (!article.value) {
  throw showError({ statusCode: 404, message: 'Article non trouvé', fatal: true });
}

useSeoMeta({
  title: article.value.title,
  description: article.value.description,
  ogImage: article.value.meta?.img || article.value.img,
});
</script>

<style scoped>

.markdown-body p > img {
  max-width: 100%;
  height: auto;
  display: inline-block;
  vertical-align: middle;
}

.markdown-body p > img + img {
  margin-left: 1rem;
}

@media (min-width: 768px) {
  .markdown-body p > img {
    width: 45%;
  }
}

</style>

