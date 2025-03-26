import {  defineNotesConfig } from 'vuepress-theme-plume'
import {enMLNote} from './ML'


export const enNotes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [enMLNote],
  })

