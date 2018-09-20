import { cloneDeep } from 'lodash';

import { SEARCH_NOTES, ADD_NOTE, REMOVE_NOTE } from 'src/store/actions'
import { setToState } from 'src/utils'
import data from 'src/store/api.json'

const initialState = {
  data,
  search: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_NOTES: {
      const nextState = cloneDeep(state)
      return nextState
    }
    case ADD_NOTE: {
      return setToState(state, {
        'data.data': [
          ...state.data.data,
          action.payload.newNote
        ]
      })
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
