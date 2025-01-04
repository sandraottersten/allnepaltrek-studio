import {defineField, defineType} from 'sanity'

export const destinationsPage = defineType({
  name: 'destinationsPage',
  title: 'Destinations',
  type: 'document',
  fields: [
    defineField({
      name: 'General',
      type: 'general',
    }),
  ],
})
