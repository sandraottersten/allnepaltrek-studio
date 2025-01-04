import {defineField, defineType} from 'sanity'

export const region = defineType({
  name: 'region',
  title: 'Region',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'general',
      type: 'general',
    }),
    defineField({
      name: 'description',
      title: 'Description',
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
      ],
      options: {collapsible: true, collapsed: true},
    }),
    defineField({
      name: 'gallery',
      type: 'gallery',
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
