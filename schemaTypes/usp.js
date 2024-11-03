import {defineField, defineType} from 'sanity'

export const usp = defineType({
  name: 'usp',
  title: 'Usp',
  type: 'object',
  fields: [
    defineField({
      name: 'title1',
      title: 'Title 1',
      type: 'string',
    }),
    defineField({
      name: 'title2',
      title: 'Title 2',
      type: 'string',
    }),
    defineField({
      name: 'text',
      type: 'text',
      title: 'Text',
      rows: 4,
    }),
  ],
  options: {collapsible: true, collapsed: true},
})
