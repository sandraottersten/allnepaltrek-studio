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
      name: 'hero',
      type: 'hero',
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'text',
          type: 'array',
          title: 'Text',
          of: [
            {
              type: 'block',
            },
          ],
        }),
        defineField({
          name: 'image',
          type: 'imageAlt',
        }),
      ],
      options: {collapsible: true, collapsed: true},
    }),
    defineField({
      name: 'usp',
      title: 'Usp',
      type: 'object',
      fields: [
        defineField({
          name: 'usp1',
          type: 'usp',
        }),
        defineField({
          name: 'usp2',
          type: 'usp',
        }),
        defineField({
          name: 'usp3',
          type: 'usp',
        }),
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
