<template>
  <NuxtLink :to="generatedLinkPath" class="block"> 
    <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      <div v-if="article.img" class="w-full h-48 overflow-hidden">
        <img :src="article.img" :alt="article.title || 'Image de l\'article'" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
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
  };
}>();

// Propriété calculée pour générer le chemin du lien correctement
const generatedLinkPath = computed(() => {
  if (!props.article._path) {
    return '/'; // Chemin de repli si _path n'existe pas
  }
  
  // Exemple de _path: /articles/mon-super-article
  // On veut: /blog/mon-super-article

  // Extraire le slug de la fin du _path
  const parts = props.article._path.split('/');
  const slug = parts[parts.length - 1]; // Récupère le dernier élément (le slug)

  // Construire le chemin de la route Nuxt
  return `/blog/${slug}`;
});


const formatDate = (dateString: string) => {
  if (!dateString) return '';
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};

// Très important : Utilisez ces console.log pour déboguer !
console.log('ArticleCard - Article prop:', props.article);
console.log('ArticleCard - Original _path:', props.article._path);
console.log('ArticleCard - Generated Link Path:', generatedLinkPath.value);
</script>

<style scoped>
/* Vos styles */
</style>