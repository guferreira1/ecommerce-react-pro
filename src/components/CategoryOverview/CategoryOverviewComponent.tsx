import { FunctionComponent } from 'react'

// Styles
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './CategoryOverviewStyles'

// Utilities
import Category from '../../types/categoryTypes'

interface CategoryOverviewProps {
  category: Category
}

export const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({
  category
}) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>

      <ProductsContainer></ProductsContainer>
    </CategoryContainer>
  )
}
