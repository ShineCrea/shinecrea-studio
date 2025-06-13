<template>
  <div class="flex items-center gap-4 my-8 p-4 border border-gray-200 rounded-xl bg-[#fcfbf8]">
    <img
      :src="photo"
      :alt="nom"
      class="w-16 h-16 rounded-full object-cover border border-gray-300"
    />
    <div class="flex flex-col">
      <p class="text-lg font-semibold text-[#1d190c]">{{ nom }}</p>
      <p class="text-sm text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  photo: string
  nom: string
  description: string
}>()
</script>
