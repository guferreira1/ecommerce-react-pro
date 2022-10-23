import Category from '../../../types/categoryTypes'
import { CategoryActionsType } from './category.action-types'

interface InitialState {
  categories: Category[]
  isLoading: boolean
}

const initialState: InitialState = {
  categories: [],
  isLoading: false
}

export const categoryReducer = (
  state = initialState,
  action: any
): InitialState => {
  switch (action.type) {
    case CategoryActionsType.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true }

    case CategoryActionsType.FETCH_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, categories: action.payload }

    case CategoryActionsType.FETCH_CATEGORIES_FAILURE:
      return { ...state, isLoading: false }

    default:
      return state
  }
}
