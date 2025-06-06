import defineStudioSchema from '@nuxthq/studio'
import defineField from '@nuxthq/studio/defineField'
import defineGroup from '@nuxthq/studio/defineGroup'

export default defineStudioSchema({}, {
  article: defineGroup({
    title: 'Articles',
    fields: {
      title: defineField({ type: 'string' }),
      content: defineField({ type: 'textarea' }),
      coverImage: defineField({ type: 'media' }),
    }
  })
})
