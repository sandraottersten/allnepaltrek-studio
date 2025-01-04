import {defineField, defineType} from 'sanity'

export const general = defineType({
  name: 'general',
  title: 'General',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'imageAlt',
    }),
    defineField({
      name: 'cardImage',
      type: 'imageAlt',
    }),
  ],
  options: {collapsible: true, collapsed: true},
})
