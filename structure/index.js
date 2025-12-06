import {CalendarIcon, PinIcon} from '@sanity/icons'

export const structure = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem().title('Navigation').child(S.document().schemaType('navigation')),
      S.divider(),
      S.listItem().title('Start page').child(S.document().schemaType('startPage')),
      S.listItem().title('Trek page').child(S.document().schemaType('treksPage')),
      S.listItem().title('Tours page').child(S.document().schemaType('toursPage')),
      S.listItem().title('Destinations page').child(S.document().schemaType('destinationsPage')),
      S.listItem().title('Contact page').child(S.document().schemaType('contactPage')),
      S.divider(),
      S.documentTypeListItem('trek').title('Treks').icon(CalendarIcon),
      S.documentTypeListItem('region').title('Regions').icon(PinIcon),
      S.documentTypeListItem('tour').title('Tours').icon(CalendarIcon),
      S.documentTypeListItem('category').title('Categories').icon(CalendarIcon),
    ])
