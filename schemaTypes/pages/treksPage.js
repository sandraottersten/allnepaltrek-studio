import {defineField, defineType} from 'sanity'

export const treksPage = defineType({
  name: 'treksPage',
  title: 'Treks',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      type: 'hero',
    }),
  ],
})
