import { createAction } from 'src/utils'

export const SEARCH_NOTES = 'SEARCH_NOTES'
export const ADD_NOTE = 'ADD_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'

const searchActions = createAction(SEARCH_NOTES)
const addNoteActions = createAction(ADD_NOTE)
const removeNoteActions = createAction(REMOVE_NOTE)

export const search = query => searchActions({ query })
export const addNote = newNote => addNoteActions({ newNote })
export const removeNote = id => removeNoteActions({ id })
