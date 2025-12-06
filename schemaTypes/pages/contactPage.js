import {defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'general',
      title: 'General',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
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
      ],
    }),
    defineField({
      name: 'formSection',
      title: 'Form section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
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
        defineField({
          name: 'email',
          type: 'string',
        }),
        defineField({
          name: 'phone',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'form',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'general.title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
      }
    },
  },
})
