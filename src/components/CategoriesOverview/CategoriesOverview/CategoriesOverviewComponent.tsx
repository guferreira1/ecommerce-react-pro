import { FunctionComponent, useContext, useEffect } from 'react'

// Utilities
import { Container } from './CategoriesOverviewStyles'

// Components
import { CategoryOverview } from '../../CategoryOverview/CategoryOverviewComponent'

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
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  )
}
