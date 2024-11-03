import {defineField, defineType} from 'sanity'

export const imageAlt = defineType({
  title: 'Image',
  name: 'imageAlt',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
    }),
  ],
})
