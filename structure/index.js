import {CalendarIcon, UsersIcon, PinIcon} from '@sanity/icons'

export const structure = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem().title('Start page').child(S.document().schemaType('startPage')),
      S.divider(),
      S.documentTypeListItem('trek').title('Treks').icon(CalendarIcon),
    ])
