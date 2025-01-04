import {defineField, defineType} from 'sanity'

export const tour = defineType({
  name: 'tour',
  title: 'Tour',
  type: 'document',
  fields: [
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
      name: 'details',
      title: 'Details',
      type: 'object',
      fields: [
        defineField({
          name: 'duration',
          title: 'Duration',
          type: 'string',
        }),
        defineField({
          name: 'price',
          title: 'Price',
          type: 'number',
        }),
        defineField({
          name: 'region',
          title: 'Region',
          type: 'string',
          options: {
            list: [
              {title: 'Everest', value: 'everest'},
              {title: 'Annapurna', value: 'annapurna'},
              {title: 'Langtang', value: 'langtang'},
              {title: 'Manaslu', value: 'manaslu'},
              {title: 'Kanchenjunga', value: 'kanchenjunga'},
              {title: 'Chitwan', value: 'chitwan'},
            ],
          },
        }),
      ],
      options: {collapsible: true, collapsed: true},
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
