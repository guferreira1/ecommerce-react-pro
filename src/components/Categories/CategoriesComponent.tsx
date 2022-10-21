import { useContext, useEffect } from 'react'

// Components
import { CategoryItem } from '../CategoryItem/CategoryItemComponent'
import { Loading } from '../loading/loadingComponent'

// Utilities
import { CategoryContext } from '../../contexts/categoryContext'

// Styles
import { CategoriesContainer, CategoryContent } from './CategoriesStyles'

export const Categories = () => {
  const { categories, isLoading, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
      {isLoading && <Loading />}
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
