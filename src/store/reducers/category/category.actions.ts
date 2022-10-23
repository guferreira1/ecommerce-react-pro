import { collection, getDocs } from 'firebase/firestore'
import { Dispatch } from 'redux'

// Utilities
import { db } from '../../../config/firebase.config'
import { categoryConverter } from '../../../converters/firestore.converters'
import Category from '../../../types/categoryTypes'
import { CategoryActionsType } from './category.action-types'

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: CategoryActionsType.FETCH_CATEGORIES_START })

    try {
      const cateforiesFromFirestore: Category[] = []

      const querySnapshop = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )

      querySnapshop.forEach((doc) => {
        cateforiesFromFirestore.push(doc.data())
      })

      dispatch({
        type: CategoryActionsType.FETCH_CATEGORIES_SUCCESS,
        payload: cateforiesFromFirestore
      })
    } catch (error) {
      dispatch({
        type: CategoryActionsType.FETCH_CATEGORIES_FAILURE
      })
    }
  }
}
