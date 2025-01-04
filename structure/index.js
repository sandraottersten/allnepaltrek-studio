import {CalendarIcon, UsersIcon, PinIcon} from '@sanity/icons'

export const structure = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem().title('Start page').child(S.document().schemaType('startPage')),
      S.listItem().title('Trek page').child(S.document().schemaType('treksPage')),
      S.listItem().title('Destinations page').child(S.document().schemaType('destinationsPage')),
      S.divider(),
      S.documentTypeListItem('trek').title('Treks').icon(CalendarIcon),
      S.documentTypeListItem('region').title('Regions').icon(CalendarIcon),
      S.documentTypeListItem('tour').title('Tours').icon(CalendarIcon),
      S.documentTypeListItem('category').title('Categories').icon(CalendarIcon),
    ])
