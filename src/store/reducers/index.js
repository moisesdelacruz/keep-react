import { cloneDeep } from 'lodash';

import { SEARCH_NOTES, ADD_NOTE, REMOVE_NOTE } from 'src/store/actions'
// import { setToState } from 'src/utils'
import data from 'src/store/api.json'

const initialState = {
  data,
  search: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_NOTES: {
      return state
    }
    case ADD_NOTE: {
      const nextState = cloneDeep(state)
      const data = nextState.data.data.concat({ ...action.payload.newNote })
      return { data: { data } }
    }
    case REMOVE_NOTE: {
      const toDelete = new Set([action.payload.id])
      const data = state.data.data.filter(obj => !toDelete.has(obj.id))
      return { data: { data } }
    }
    default:
      return state
  }
}
