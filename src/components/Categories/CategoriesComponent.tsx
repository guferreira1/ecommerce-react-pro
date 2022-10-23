import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Components
import { CategoryItem } from '../CategoryItem/CategoryItemComponent'
import { Loading } from '../loading/loadingComponent'

// Utilities
import { fetchCategories } from '../../store/reducers/category/category.actions'

// Styles
import { CategoriesContainer, CategoryContent } from './CategoriesStyles'
import { useAppSelector } from '../../hooks/redux.hooks'

export const Categories = () => {
  const { categories, isLoading } = useAppSelector(
    (state) => state.categoryReducer
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories() as any)
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
