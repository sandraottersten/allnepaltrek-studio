import {defineField, defineType} from 'sanity'

export const day = defineType({
  name: 'day',
  title: 'Day',
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
      name: 'details',
      title: 'Details',
      type: 'object',
      options: {columns: 2},
      fields: [
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
          options: {collapsible: false},
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
          options: {collapsible: false},
        }),
        defineField({
          name: 'trekTime',
          title: 'Trek time',
          type: 'string',
        }),
        defineField({
          name: 'transportTime',
          title: 'Transport time',
          type: 'string',
          readOnly: ({parent}) => !parent?.bus && !parent?.flight && !parent?.car,
        }),
        defineField({
          name: 'bus',
          title: 'Bus',
          type: 'boolean',
          readOnly: ({parent}) => parent?.arrival || parent?.departure,
        }),
        defineField({
          name: 'car',
          title: 'Car',
          type: 'boolean',
          readOnly: ({parent}) => parent?.arrival || parent?.departure,
        }),
        defineField({
          name: 'flight',
          title: 'Flight',
          type: 'boolean',
          readOnly: ({parent}) => parent?.arrival || parent?.departure,
        }),
        defineField({
          name: 'arrival',
          title: 'Arrival',
          type: 'boolean',
          readOnly: ({parent}) => parent?.bus || parent?.flight || parent?.car || parent?.departure,
        }),
        defineField({
          name: 'departure',
          title: 'Departure',
          type: 'boolean',
          readOnly: ({parent}) => parent?.bus || parent?.flight || parent?.car || parent?.arrival,
        }),
      ],
    }),
  ],
})
