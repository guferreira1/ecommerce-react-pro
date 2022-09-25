import { FunctionComponent } from 'react'

// Utilities
import Category from '../../types/categoryTypes'

// Styles
import './CategoriesStyles.css'

interface CategoryItemProps {
  category: Category
}

export const CategoryItem: FunctionComponent<CategoryItemProps> = ({
  category
}) => {
  return (
    <div
      className="category-item-container"
      style={{ backgroundImage: category.imageUrl }}>
      <div className="category-name">
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </div>
    </div>
  )
}
