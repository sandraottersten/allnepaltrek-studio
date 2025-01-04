import {defineField, defineType} from 'sanity'

export const trek = defineType({
  name: 'trek',
  title: 'Trek',
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
          name: 'trekDays',
          title: 'Trek days',
          type: 'string',
        }),
        defineField({
          name: 'season',
          title: 'Season',
          type: 'string',
        }),
        defineField({
          name: 'difficulty',
          title: 'Difficulty',
          type: 'string',
          initialValue: 'moderate',
          options: {
            list: [
              {title: 'Easy', value: 'easy'},
              {title: 'Moderate', value: 'moderate'},
              {title: 'Challenging', value: 'challenging'},
              {title: 'Strenuous', value: 'strenuous'},
            ],
          },
        }),
        defineField({
          name: 'altitude',
          title: 'Altitude',
          type: 'object',
          fields: [
            defineField({
              name: 'meters',
              title: 'Meters',
              type: 'string',
            }),
            defineField({
              name: 'feet',
              title: 'Feet',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'distance',
          title: 'Distance',
          type: 'object',
          fields: [
            defineField({
              name: 'km',
              title: 'Kilometers',
              type: 'string',
            }),
            defineField({
              name: 'miles',
              title: 'Miles',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'region',
          title: 'Region',
          type: 'string',
          options: {
            list: [
              {title: 'Everest region', value: 'everest'},
              {title: 'Annapurna region', value: 'annapurna'},
              {title: 'Langtang region', value: 'langtang'},
              {title: 'Other regions', value: 'others'},
            ],
          },
        }),
        defineField({
          name: 'tags',
          title: 'Tags',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            layout: 'tags',
          },
        }),
      ],
      options: {columns: 2, collapsible: true, collapsed: true},
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
      name: 'itinerary',
      title: 'Itinerary',
      type: 'object',
      fields: [
        defineField({
          name: 'days',
          title: 'Days',
          type: 'array',
          of: [
            {
              type: 'day',
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
