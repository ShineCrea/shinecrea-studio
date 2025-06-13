// pages/index.vue
<template>
 <div class="relative flex size-full min-h-screen flex-col bg-background group/design-root overflow-x-hidden" >
      <div class="layout-container flex h-full grow flex-col">
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="@container">
              <div class="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
                <div
                  class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLpd8yOh6U_vkUXD5nmDU1-h0bFM6hukOuuduPn0x1YOvgZuC11wrK-oifuClR0_oXIswO7MjBZecg3i3AU_vD0oEVONpGI1E7tufzMw6rVTCbh7otekM2qgIjaJ_WTmbA3ik-lpM8QTr96EQ6sIfblOnOZ30X7gI7nCHxggNNXpk4tjCTv86EPROwwNPFU594wUCc3gTsyWX4QkZ_jPX1w77i4AD5GYaiAn7XTlc7X1OKn3fHEyqjHjP4yLKaXSz0fDn14859eA");'
                ></div>
                <div class="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center items-left">
                  <div class="flex flex-col gap-2 text-left">
                    <h1
                      class="text-[#1d190c] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Salut,  je suis Valentine, l'esprit créatif derrière ShineCréa.
                    </h1>
                    <h2 class="text-[#1d190c] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      I'm a freelance graphic designer specializing in brand identity and digital design. I help businesses like yours stand out with unique, impactful visuals.
                    </h2>
                  </div>
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#fed542] text-[#1d190c] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                  >
                    <span class="truncate">Parlons de ton projet !</span>
                  </button>
                </div>
              </div>
            </div>
            <h2 class="text-[#1d190c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">My Services</h2>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div class="flex flex-1 gap-3 rounded-lg border border-[#eae3cd] bg-[#fcfbf8] p-4 flex-col">
                <div
                  class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoGyf1jzpKxp9EEEMKgBvp5wGeb7vl88B2W3YHPniJTWuK2WvrVhy_Ru82BU4LLTrCPbBWgnUqvdb6GFFNTVTn2REP7sryz4S_UIPHk5gSo_4SyMDXj84spglvlLFmqwuv9Gv6vWSYgUEm07LeY_P8fCo73P2IJ72JiXudVx7cKlfn9lASH6pUY149TgXh325Rsd5Uq7SiHqbBEoVphDiN_nLkkr7ermAkNwm_RYJ8XmXtWkQM1ECuFMA3PYmLVh1lALRde6Zr9w");'
                ></div>
                <div class="flex flex-col gap-1">
                  <h2 class="text-[#1d190c] text-base font-bold leading-tight">Brand Identity</h2>
                  <p class="text-[#a18d45] text-sm font-normal leading-normal">Crafting unique logos and brand guidelines that resonate with your audience.</p>
                </div>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#eae3cd] bg-[#fcfbf8] p-4 flex-col">
                <div
                  class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtvrJyCOVJnAA87xtScY0wRTf6wp5lukNE6CrjlWzx8VSWAztB7RG8vEeRMqgs0IyF2nlYVJD3DkwIWYj-aOvI-UfGewJEddTu2MRrRe7kMr6GUgc-thrm3AT_RvaHJn9gD2coHUWH19CkgvjlEBzhxOobdrGTMus5Bgu4i138dp6wHBFKAgoGdtu59DC4lbGHKhY_LWMeSQ9EGxtce21vbRGce40VurAg96ECXiw_xsFpCJWgC5gMNEZZMakxj4-8zhYi-9iqBg");'
                ></div>
                <div class="flex flex-col gap-1">
                  <h2 class="text-[#1d190c] text-base font-bold leading-tight">Web Design</h2>
                  <p class="text-[#a18d45] text-sm font-normal leading-normal">Creating user-friendly websites that convert visitors into customers.</p>
                </div>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#eae3cd] bg-[#fcfbf8] p-4 flex-col">
                <div
                  class="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
                  style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvYLOXoBRKGpxLJYcC1RaeuoHgDFK0samABKcZnNYhrPq4qFngZtUr5U_OZtgUOf_k2KVBNys3ZR4DxjIpBJwetOtkjgLQ_dqY_F_qkzD-i4XxapkICgPUyrj8OL-9SxidnqTk6Qsg0yYDdr4mjU6V1Qkfw71TwANhGlW7VZOX1_aEQXBreSf1fafh2c6TGmlpsVvVtvEL6QpKulGUQFnXtsMKY00O6xK8EU7eu8z4eJM6xmQ0Gn7kpHef673yrXd_eenkPM4a9w");'
                ></div>
                <div class="flex flex-col gap-1">
                  <h2 class="text-[#1d190c] text-base font-bold leading-tight">Social Media Design</h2>
                  <p class="text-[#a18d45] text-sm font-normal leading-normal">Developing engaging social media content to boost your online presence.</p>
                </div>
              </div>
            </div>
            <div class="flex px-4 py-3 justify-center">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f4f1e6] text-[#1d190c] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">More Offers</span>
              </button>
            </div>
            <h2 class="text-[#1d190c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Portfolio</h2>
            <div class="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
              <div class="flex items-stretch p-4 gap-3">
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiKA1YHxoZKhagNfnrKGhqDFrisa2XdMwjKfH79cTxlEQZoKApS5VPztRh0bb1hCcvYk-JW5zjTl7Ce9VbHNE-DprM6teHaUuuQdTI_9mUxerZIUPU_AOh8LGjteLmVy7Yk1ueIlK7HkP2ek7TqyCXQaHqnBxMVSSpRteVg-lf7al1zFa6mZmyztjJejpKR5VQY50wrTl8uLS9ADxMvZ6whORhBY2gya-Di_q8RuAsdOvnRIVgvedqe2tYt0TyS8hq8yGiU0AJAQ");'
                  ></div>
                  <div>
                    <p class="text-[#1d190c] text-base font-medium leading-normal">Project 1</p>
                    <p class="text-[#a18d45] text-sm font-normal leading-normal">A modern logo and brand guide for a tech startup.</p>
                  </div>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBXBpDRWI36EmkRST2pFadJdxjsXoVp6VOzqnT4iyeFG9Cwwou_CiwXykblHvBCzlAdzmZQ46ZCCfqA22P4cJxKr49dmT8Z3B8rtXACPSF522RQk0oALhiBnklP9pAFCM9Q4N9_Wl71Tg3_-MkDRawVH_hPgaOBnc8zOS11WC3w2Rr3evBE5ayohRhGeD-ho2ZS1ocUXDRFZmU4gf2Kqv4ew4_1afm146Nf3mTMNKEcFRW58RX6xom7Q8wibdjVV6-TKQYVlRhUHA");'
                  ></div>
                  <div>
                    <p class="text-[#1d190c] text-base font-medium leading-normal">Project 2</p>
                    <p class="text-[#a18d45] text-sm font-normal leading-normal">A responsive website for a local bakery.</p>
                  </div>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxeU0grXoZR0AZMSqy9VoNCEGUK9u7KyUfmF20LOpZ6HhXDXz50-WLZiSxI-042M9W3v4zWq4k4q4Iu85p5wdlkJQmR3o-a3HyBUM2KvvvFHaEKQIyN-HWRn-ri8kPz007Yp806zmndhk1AHh62aD-FMDV3KtwbaPOfDyb_Zz6AJEQ7mmHjp43Y6vzkEeUg4F0mx4INUE4d8o-UkjQ7T9n899kM1-jxB9zdK3j8iNeT4fJb0Xzy4xQSxYNCu4rThklqmMufsgZYQ");'
                  ></div>
                  <div>
                    <p class="text-[#1d190c] text-base font-medium leading-normal">Project 3</p>
                    <p class="text-[#a18d45] text-sm font-normal leading-normal">Social media templates for a fashion boutique.</p>
                  </div>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnt6Gkw4rWFP7v3999IeoieubnP5WkO9Xme6SH_qyl1d4UJYAGc9TOEL3yMTHdIyaKGcMyYsN4dN0PITflisoIjn_rvtUiw9qhR8GDzMr7OEdjFtQ3_8hK3FB7s8IWiXDhxGgCay98OM8uMZimkVzHGmjU7FnwBe9fPyQO1Cl4zMr_YJEOd5AOAAkphj_JDUBbjpnc3Cg9EFjVjxCLxmbzNXcCdb-l3ccIzrhlr1WTIy2-7Ju8-7KAlUzzhVcO-ycCQguEoiO6dg");'
                  ></div>
                  <div>
                    <p class="text-[#1d190c] text-base font-medium leading-normal">Project 4</p>
                    <p class="text-[#a18d45] text-sm font-normal leading-normal">A branding refresh for a wellness center.</p>
                  </div>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8tN0hAwRWysgmhB4-kIPbdjw85rkI4DMNAfgXmLEmJfqXnvw2eft_aIzhIhTgRDtJ5VKSEQ2pX4iSND60htSNhOVZv40VwWDouIkIz5EaFOerJvGAKVK7hSeJ_9XYc3QOZiYb52lZp4PI1Ol0Ie_DGjjEdqaR6z_P25H5IC7tlbpqMXamVYZt16HURFTjC8tlHeaV52f1uoCxlRw8sWhOfiBtDXfAlCxVQcycjyizjK_L9Ojy7xurrR0kLx5J6hVhQDZS1_xgKw");'
                  ></div>
                  <div>
                    <p class="text-[#1d190c] text-base font-medium leading-normal">Project 5</p>
                    <p class="text-[#a18d45] text-sm font-normal leading-normal">An e-commerce site for a handmade crafts store.</p>
                  </div>
                </div>
                <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAmdXrYR2sHYFeUUiUh1Py43kH8l_zAGzpG3y3_8Ij95nU0gGhkAU_rzxddb3VUYQsoQHRf4F1JNc7noSaCgQTF3GlmC1UaBsUMv8IfLDpDKjkB1EceXChPFh7ZXlLcMO9Y97YuIKqtxwGz2lNeC8t2krxM_ahyPQwAjlwyjz_FdKNsX_BbNzpoawi9xCZMRGbU_F3aYcj2sD95s94LbCUkprerGChS4KEryV8GiT1yfLg4CrmViVJlZv6imFg4Uo-lzbLZNZwyw");'
                  ></div>
                  <div>
                    <p class="text-[#1d190c] text-base font-medium leading-normal">Project 6</p>
                    <p class="text-[#a18d45] text-sm font-normal leading-normal">A social media campaign for a music festival.</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 class="text-[#1d190c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Contact Me</h2>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#1d190c] text-base font-medium leading-normal pb-2">Name</p>
                <input
                  placeholder="Your Name"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1d190c] focus:outline-0 focus:ring-0 border-none bg-[#f4f1e6] focus:border-none h-14 placeholder:text-[#a18d45] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#1d190c] text-base font-medium leading-normal pb-2">Email</p>
                <input
                  placeholder="Your Email"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1d190c] focus:outline-0 focus:ring-0 border-none bg-[#f4f1e6] focus:border-none h-14 placeholder:text-[#a18d45] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#1d190c] text-base font-medium leading-normal pb-2">Message</p>
                <textarea
                  placeholder="Your Message"
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1d190c] focus:outline-0 focus:ring-0 border-none bg-[#f4f1e6] focus:border-none min-h-36 placeholder:text-[#a18d45] p-4 text-base font-normal leading-normal"
                ></textarea>
              </label>
            </div>
            <div class="flex px-4 py-3 justify-end">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#fed542] text-[#1d190c] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Send</span>
              </button>
            </div>
          </div>
        </div>
        <footer class="flex justify-center">
          <div class="flex max-w-[960px] flex-1 flex-col">
            <footer class="flex flex-col gap-6 px-5 py-10 text-center @container">
              <p class="text-[#a18d45] text-base font-normal leading-normal">© 2024 Sparkle Designs. All rights reserved.</p>
            </footer>
          </div>
        </footer>
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