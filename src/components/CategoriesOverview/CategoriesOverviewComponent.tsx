import { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Utilities
import { fetchCategories } from '../../store/reducers/category/category.actions'
import { useAppSelector } from '../../hooks/redux.hooks'

// Components
import { CategoryOverview } from '../CategoryOverview/CategoryOverviewComponent'
import { Loading } from '../loading/loadingComponent'

// Styles
import { Container } from './CategoriesOverviewStyles'

export const CategoriesOverview: FunctionComponent = () => {
  const { categories, isLoading } = useAppSelector(
    (state) => state.categoryReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories() as any)
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
