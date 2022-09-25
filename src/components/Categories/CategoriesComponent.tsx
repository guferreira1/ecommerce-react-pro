import { useEffect, useState } from 'react'
import axios from 'axios'

// Components
import { CategoryItem } from '../CategoryItem/CategoryItemComponent'

// Utilities
import Category from '../../types/categoryTypes'
import env from '../../config/env.config'

// Styles
import { CategoriesContainer, CategoryContent } from './CategoriesStyles'

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}api/category`)

      setCategories(data)
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
