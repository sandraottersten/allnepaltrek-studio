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
          type: 'reference',
          to: [{type: 'region'}],
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
          name: 'trekName',
          type: 'string',
        }),
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
          name: 'highlights',
          type: 'array',
          title: 'Highlights',
          of: [
            defineField({
              name: 'highlight',
              title: 'Highlight',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 2,
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'imageAlt',
                }),
              ],
              preview: {
                select: {
                  title: 'title',
                  image: 'image',
                },
                prepare(selection) {
                  const {title, image} = selection
                  return {
                    title: title,
                    media: image,
                  }
                },
              },
              options: {collapsible: true, collapsed: true},
            }),
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
          name: 'map',
          title: 'Map ID',
          type: 'string',
        }),
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
    defineField({
      name: 'combinedTours',
      title: 'Combined tours',
      type: 'object',
      fields: [
        defineField({
          name: 'tours',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{type: 'tour'}],
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
