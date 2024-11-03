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
          name: 'distance',
          title: 'Distance',
          type: 'number',
        }),
        defineField({
          name: 'altitude',
          title: 'Altitude',
          type: 'number',
        }),
        defineField({
          name: 'trekTime',
          title: 'Trek time',
          type: 'number',
        }),
        defineField({
          name: 'transportTime',
          title: 'Transport time',
          type: 'number',
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
