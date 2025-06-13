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
        options: [
          'sky',
          'mint',
          'rose',
          'amber',
          'violet',
          'emerald',
          'fuchsia'
        ]
      }),
      gray: field({
        // définis ici les propriétés nécessaires
      }),
      icons: group({
        title: 'Icons',
        description: 'Manage icons used in UI Pro.',
        icon: 'i-mdi-application-settings-outline',
        fields: {
          search: field({ /* ... */ }),
          dark: field({ /* ... */ }),
          light: field({ /* ... */ }),
          external: field({ /* ... */ }),
          chevron: field({ /* ... */ }),
          hash: field({ /* ... */ })
        }
      })
    }
  })
})
