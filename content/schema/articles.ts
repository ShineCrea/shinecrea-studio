export default defineContentSchema({
  title: { type: 'string', required: true },
  description: { type: 'string' },
  img: { type: 'string' },
  alt: { type: 'string' },
  author: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      bio: { type: 'string' },
      img: { type: 'string' }
    }
  },
  tags: { type: 'array', items: { type: 'string' } },
  seo: {
    type: 'object',
    properties: {
      title: { type: 'string' }
    }
  }
})
