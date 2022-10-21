import { collection, getDocs } from '@firebase/firestore'
import { createContext, FunctionComponent, useState } from 'react'

// Utilities
import { db } from '../config/firebase.config'
import { categoryConverter } from '../converters/firestore.converters'
import Category from '../types/categoryTypes'

interface ICategoryContext {
  categories: Category[]
  isLoading: boolean
  fetchCategories: () => Promise<void>
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  isLoading: false,
  fetchCategories: () => Promise.resolve()
})

export const CategoryContextProvider: FunctionComponent = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchCategories = async () => {
    try {
      setIsLoading(true)

      const cateforiesFromFirestore: Category[] = []

      const querySnapshop = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )

      querySnapshop.forEach((doc) => {
        cateforiesFromFirestore.push(doc.data())
      })

      setCategories(cateforiesFromFirestore)
    } catch (error) {
      console.log({ error })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CategoryContext.Provider
      value={{ categories, fetchCategories, isLoading }}>
      {children}
    </CategoryContext.Provider>
  )
}
