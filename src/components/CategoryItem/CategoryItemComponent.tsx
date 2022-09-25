import { FunctionComponent } from 'react'

// Utilities
import Category from '../../types/categoryTypes'

// Styles
import { CategoryItemContainer, CategoryName } from './CategoryItemStyles'

interface CategoryItemProps {
  category: Category
}

export const CategoryItem: FunctionComponent<CategoryItemProps> = ({
  category
}) => {
  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}
