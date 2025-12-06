import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'linkText',
      title: 'Link text',
      type: 'string',
    }),
    defineField({
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      initialValue: 'page',
      options: {
        list: [
          {title: 'Page', value: 'page'},
          {title: 'Trek', value: 'trek'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [{type: 'treksPage'}, {type: 'toursPage'}],
      hidden: ({parent}) => parent?.linkType !== 'page',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.parent?.linkType === 'page' && !value) {
            return 'Page reference is required when Link Type is Page'
          }
          return true
        }),
    }),
    defineField({
      name: 'trek',
      title: 'Trek',
      type: 'reference',
      to: [{type: 'trek'}],
      hidden: ({parent}) => parent?.linkType !== 'trek',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.parent?.linkType === 'trek' && !value) {
            return 'Trek reference is required when Link Type is Trek'
          }
          return true
        }),
    }),
  ],
})
