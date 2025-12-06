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
          name: 'region',
          title: 'Region',
          type: 'reference',
          to: [{type: 'region'}],
        }),
        defineField({
          name: 'category',
          title: 'Category',
          type: 'string',
          options: {
            list: [
              {title: 'City sightseeing', value: 'city'},
              {title: 'Adventure', value: 'adventure'},
              {title: 'Day hike', value: 'hike'},
              {title: 'Safari', value: 'safari'},
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
          title: 'Description',
          of: [
            {
              type: 'block',
            },
          ],
        }),
        defineField({
          name: 'program',
          type: 'array',
          title: 'Program',
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
      name: 'pricing',
      title: 'Pricing',
      type: 'object',
      fields: [
        defineField({
          name: 'cat1',
          title: '1 pax',
          type: 'number',
        }),
        defineField({
          name: 'cat2',
          title: '2-5 pax',
          type: 'number',
        }),
        defineField({
          name: 'cat3',
          title: '6-10 pax',
          type: 'number',
        }),
        defineField({
          name: 'cat4',
          title: '11-15 pax',
          type: 'number',
        }),
      ],
      options: {collapsible: true, collapsed: true},
    }),

    defineField({
      name: 'gallery',
      type: 'gallery',
    }),
    defineField({
      name: 'packageContent',
      title: 'Included/excluded',
      type: 'object',
      fields: [
        defineField({
          name: 'included',
          title: 'Included',
          type: 'array',
          of: [
            {
              name: 'item',
              type: 'string',
            },
          ],
        }),
        defineField({
          name: 'excluded',
          title: 'Excluded',
          type: 'array',
          of: [
            {
              name: 'item',
              type: 'string',
            },
          ],
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
