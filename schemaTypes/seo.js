import {defineField, defineType} from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Between 15-70 characters',
      validation: (rule) => rule.required().min(15).max(70),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Between 70-160 characters',
      validation: (rule) => rule.required().min(70).max(160),
      rows: 4,
    }),
  ],
  options: {collapsible: true, collapsed: true},
})
