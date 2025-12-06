import {defineField, defineType} from 'sanity'

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'treks',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'links',
          type: 'array',
          of: [
            defineField({
              name: 'link',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  type: 'string',
                }),
                defineField({
                  name: 'region',
                  type: 'reference',
                  to: [{type: 'region'}],
                }),
              ],
            }),
          ],
        }),
      ],
      options: {collapsible: true, collapsed: true},
    }),
    defineField({
      name: 'regions',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'links',
          type: 'array',
          of: [
            defineField({
              name: 'link',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  type: 'string',
                }),
                defineField({
                  name: 'region',
                  type: 'reference',
                  to: [{type: 'region'}],
                }),
              ],
            }),
          ],
        }),
      ],
      options: {collapsible: true, collapsed: true},
    }),
    defineField({
      name: 'tours',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'links',
          type: 'array',
          of: [
            defineField({
              name: 'link',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  type: 'string',
                }),
                defineField({
                  name: 'id',
                  type: 'string',
                }),
              ],
            }),
          ],
        }),
      ],
      options: {collapsible: true, collapsed: true},
    }),
    defineField({
      name: 'contact',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          type: 'string',
        }),
        defineField({
          name: 'mobile',
          type: 'number',
        }),
      ],
      options: {collapsible: true, collapsed: true},
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Navigation',
      }
    },
  },
})
