import {defineField, defineType} from 'sanity'

export const startPage = defineType({
  name: 'startPage',
  title: 'Start',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'general',
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
          name: 'image',
          type: 'imageAlt',
        }),
      ],
      options: {collapsible: true, collapsed: true},
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'usp1',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'usp2',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'usp3',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'image',
          type: 'imageAlt',
        }),
      ],
      options: {collapsible: true, collapsed: true},
    }),
    defineField({
      name: 'treks',
      title: 'Treks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'trek'}],
        },
      ],
      options: {collapsible: true, collapsed: true},
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Start page',
      }
    },
  },
})
