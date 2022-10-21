import { FunctionComponent, useContext, useEffect } from 'react'

// Utilities
import { Container } from './CategoriesOverviewStyles'

// Components
import { CategoryOverview } from '../CategoryOverview/CategoryOverviewComponent'
import { Loading } from '../loading/loadingComponent'

// Styles
import { CategoryContext } from '../../contexts/categoryContext'

export const CategoriesOverview: FunctionComponent = () => {
  const { categories, isLoading, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])

  if (isLoading) return <Loading />

  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  )
}
