<template>
  <div>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
      class="block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white"
    />
    <ul
      v-if="articles.length"
      class="z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"
    >
      <li v-for="article in articles" :key="article._path">
        <NuxtLink
          :to="article._path"
          class="flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black"
        >
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup>


const searchQuery = ref('')
const articles = ref([])

watch(searchQuery, async (query) => {
  if (!query) {
    articles.value = []
    return
  }

  const results = await useContent('articles')
    .limit(6)
    .where({ title: { $contains: query } })
    .find()

  articles.value = results
})
</script>
