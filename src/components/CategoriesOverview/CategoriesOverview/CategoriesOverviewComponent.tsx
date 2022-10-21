import { FunctionComponent, useContext, useEffect } from 'react'

// Utilities
import { Container } from './CategoriesOverviewStyles'

// Styles
import { CategoryContext } from '../../../contexts/categoryContext'

export const CategoriesOverview: FunctionComponent = () => {
  const { categories, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])

  return (
    <Container>
      {categories.map((category) => (
        <p key={category.id}>{category.displayName}</p>
      ))}
    </Container>
  )
}
