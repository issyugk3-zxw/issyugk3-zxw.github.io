import {  defineNotesConfig } from 'vuepress-theme-plume'
import {enPRMLNote} from './PRML'


export const enNotes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [enPRMLNote],
  })

