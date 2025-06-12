<template>
  <NuxtLink :to="generatedLinkPath" class="block p-4 hover:no-underline">
    <div class="flex items-stretch justify-between gap-4 rounded-xl">
      <!-- Texte à gauche -->
      <div class="flex flex-[2_2_0px] flex-col gap-4">
        <div class="flex flex-col gap-1">
          <p class="text-[#1d190c] text-base font-bold leading-tight">
            {{ article.title || "Titre de l'article" }}
          </p>
          <p class="text-[#a18d45] text-sm font-normal leading-normal line-clamp-3">
            {{ article.description || "Pas de description disponible pour cet article." }}
          </p>
        </div>
        <button
          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#f4f1e6] text-[#1d190c] text-sm font-medium leading-normal w-fit"
        >
          <span class="truncate">Lire l'article</span>
        </button>
        <p v-if="article.date" class="text-sm text-gray-500">
          Publié le {{ formatDate(article.date) }}
        </p>
      </div>

      <!-- Image à droite -->
      <div
        class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
        :style="backgroundImageStyle"
      ></div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  article: {
    _path: string;
    title?: string;
    description?: string;
    img?: string;
    date?: string;
    alt?: string;
    author?: { name: string; bio: string; img: string; };
    tags?: string[];
    meta?: { img?: string };
  };
}>();

// Slugify le titre pour créer une URL propre
const slugify = (text: string) => {
  return text
    .toString()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// Lien dynamique vers l'article
const generatedLinkPath = computed(() => {
  const slug = props.article.title ? slugify(props.article.title) : 'article';
  return `/blog/${slug}`;
});

// Image de fond en inline style
const backgroundImageStyle = computed(() => {
  const imageUrl = props.article.meta?.img || props.article.img || '';
  return imageUrl ? `background-image: url('${imageUrl}');` : '';
});

// Formatage de la date
const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};
</script>

<style scoped>
/* Pour couper la description à 3 lignes max */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
