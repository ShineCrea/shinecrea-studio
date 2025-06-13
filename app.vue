<template>
    <header class="flex items-center justify-between whitespace-nowrap bg-[#fcfbf8] border-b border-solid border-b-[#f5f4f0] px-10 py-3">
          <div class="flex items-center gap-4 text-[#181610]">
            <div class="size-10">
              <img src="/assets/img/shinecrea-logo.png" alt="logo shinecrea">
            </div>
            <!-- <h2 class="text-[#181610] text-lg font-bold leading-tight tracking-[-0.015em]">ShineCréa</h2> -->
          </div>
          <div class="flex flex-1 justify-end gap-8">
            <div class="flex items-center gap-9">
              <a class="text-[#181610] text-sm font-medium leading-normal" href="/blog">Blog</a>
              <a class="text-[#181610] text-sm font-medium leading-normal" href="#">Tarifs</a>
              <a class="text-[#181610] text-sm font-medium leading-normal" href="#">Portfolio</a>
            </div>
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#ffc800] text-[#181610] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Contact Moi</span>
            </button>
          </div>
        </header>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>

body, #__nuxt, #app {
  font-family: 'pt-sans', sans-serif;
  font-weight: 400;
  background-color: #fcfbf8;
}

h1{
  font-family: "fields";
  font-weight: 800;
  font-size: 48px;
  color: #3D3B32;
}


</style>