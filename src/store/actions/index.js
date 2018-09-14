import { createAction } from 'src/utils'

export const SEARCH_NOTES = 'SEARCH_NOTES'
export const ADD_NOTE = 'ADD_NOTE'

const searchActions = createAction(SEARCH_NOTES)
const addNoteActions = createAction(ADD_NOTE)

export const addNote = newNote => addNoteActions({ newNote })
export const search = query => searchActions({ query })
