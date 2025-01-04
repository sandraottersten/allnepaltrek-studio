import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Id',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      type: 'imageAlt',
    }),
  ],
  preview: {
    select: {
      title: 'name',
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
})
