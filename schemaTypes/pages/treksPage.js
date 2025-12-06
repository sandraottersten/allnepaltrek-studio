import {defineField, defineType} from 'sanity'

export const treksPage = defineType({
  name: 'treksPage',
  title: 'Treks',
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
      ],
      options: {collapsible: true, collapsed: true},
    }),
    defineField({
      name: 'introCard',
      title: 'Intro card',
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
      options: {collapsible: true, collapsed: true},
    }),
    defineField({
      name: 'infoCard',
      title: 'Info card',
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
          name: 'link',
          type: 'link',
        }),
        defineField({
          name: 'image',
          type: 'imageAlt',
        }),
      ],
      options: {collapsible: true, collapsed: true},
    }),
  ],
  preview: {
    select: {
      title: 'general.title',
      subtitle: 'general.subtitle',
      image: 'general.image',
    },
    prepare(selection) {
      const {title, subtitle, image} = selection
      return {
        title: title,
        subtitle: subtitle,
        media: image,
      }
    },
  },
})
