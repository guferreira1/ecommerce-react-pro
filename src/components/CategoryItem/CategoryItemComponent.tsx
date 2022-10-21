import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const handleExploreClick = () => {
    navigate(`/category/${category.id}`)
  }

  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName onClick={handleExploreClick}>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}
