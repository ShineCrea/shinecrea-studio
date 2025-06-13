import { defineNuxtSchema, group, field } from '@nuxt/schema'

export default defineNuxtSchema({
  ui: group({
    title: 'UI',
    description: 'UI Customization.',
    icon: 'i-mdi-palette-outline',
    fields: {
      primary: field({
        type: 'string',
        title: 'Primary',
        description: 'Primary color of your UI.',
        icon: 'i-mdi-palette-outline',
        required: true,
        // Pour proposer un enum de choix, mieux vaut utiliser "options"
        options: ['sky', 'mint', 'rose', 'amber', 'violet', 'emerald', 'fuchsia']
      }),
      gray: field({
        type: 'string',
        title: 'Gray',
        description: 'Gray color of your UI.',
        icon: 'i-mdi-shape-outline',
        default: 'coolGray'
      }),
      icons: group({
        title: 'Icons',
        description: 'Manage icons used in UI Pro.',
        icon: 'i-mdi-application-settings-outline',
        fields: {
          search: field({
            type: 'string',
            title: 'Search Icon',
            description: 'Icon for search action',
            default: 'i-mdi-magnify'
          }),
          dark: field({
            type: 'string',
            title: 'Dark Mode Icon',
            description: 'Icon for dark mode toggle',
            default: 'i-mdi-weather-night'
          }),
          light: field({
            type: 'string',
            title: 'Light Mode Icon',
            description: 'Icon for light mode toggle',
            default: 'i-mdi-white-balance-sunny'
          }),
          external: field({
            type: 'string',
            title: 'External Link Icon',
            description: 'Icon for external links',
            default: 'i-mdi-open-in-new'
          }),
          chevron: field({
            type: 'string',
            title: 'Chevron Icon',
            description: 'Icon for chevron arrows',
            default: 'i-mdi-chevron-down'
          }),
          hash: field({
            type: 'string',
            title: 'Hash Icon',
            description: 'Icon for hash symbol',
            default: 'i-mdi-pound'
          })
        }
      })
    }
  })
})
