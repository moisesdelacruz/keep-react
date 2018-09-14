import { createAction } from 'src/utils'

export const TOGGLE_LOADING = '@app/TOGGLE_LOADING'

const toggleLoadingAction = createAction(TOGGLE_LOADING)

export const toggleLoading = isLoading => toggleLoadingAction({ isLoading })
