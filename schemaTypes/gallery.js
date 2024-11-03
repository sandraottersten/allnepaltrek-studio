import {defineField, defineType} from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'imageAlt',
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
  ],
  options: {collapsible: true, collapsed: true},
  preview: {
    select: {
      images: 'images',
      image: 'images.0',
    },
    prepare(selection) {
      const {images, image} = selection

      return {
        title: `Gallery of ${Object.keys(images).length} images`,
        subtitle: `Alt text: ${image.alt}`,
        media: image,
      }
    },
  },
})
