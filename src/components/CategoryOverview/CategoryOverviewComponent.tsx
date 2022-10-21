import { FunctionComponent } from 'react'

// Styles
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './CategoryOverviewStyles'

// Utilities
import Category from '../../types/categoryTypes'

// Components
import { ProductItem } from '../ProductItem/ProductItemComponent'

interface CategoryOverviewProps {
  category: Category
}

export const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({
  category
}) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>

      <ProductsContainer>
        {category.products.slice(0, 4).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </CategoryContainer>
  )
}
