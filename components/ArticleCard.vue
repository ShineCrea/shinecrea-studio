<template>
  <NuxtLink :to="generatedLinkPath" class="block"> 
    <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      <div v-if="article.meta?.img" class="w-full h-48 overflow-hidden">
      <img :src="article.meta.img" :alt="article.title || 'Image de l\'article'" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
    </div>

      
      <div class="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-2 leading-tight">
            {{ article.title || 'Titre de l\'article' }}
          </h2>
          <p class="text-gray-600 text-base line-clamp-3 mb-4">
            {{ article.description || 'Pas de description disponible pour cet article.' }}
          </p>
        </div>
        <p v-if="article.date" class="text-sm text-gray-500 mt-2">
          Publié le {{ formatDate(article.date) }}
        </p>
      </div>
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

const slugify = (text: string) => {
  return text
    .toString()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-') // tout sauf lettres et chiffres => "-"
    .replace(/^-+|-+$/g, ''); // supprime les tirets au début/fin
};

const generatedLinkPath = computed(() => {
  const slug = props.article.title ? slugify(props.article.title) : 'article';
  return `/blog/${slug}`;
});

const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};

console.log('ArticleCard - Article prop:', props.article);
console.log('ArticleCard - Generated Link Path:', generatedLinkPath.value);
</script>
