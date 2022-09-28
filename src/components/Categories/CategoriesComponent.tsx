import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'

// Components
import { CategoryItem } from '../CategoryItem/CategoryItemComponent'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converters'

// Utilities
import Category from '../../types/categoryTypes'

// Styles
import { CategoriesContainer, CategoryContent } from './CategoriesStyles'

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
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
    }
  }

  console.log({ categories })

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
      <CategoryContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoryContent>
    </CategoriesContainer>
  )
}
