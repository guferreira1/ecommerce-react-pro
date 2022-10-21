import { FunctionComponent } from 'react'

// Utilities
import { Product } from '../../types/productTypes'

// Styles
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './ProductItemStyles'

interface ProductItemProps {
  product: Product
}

export const ProductItem: FunctionComponent<ProductItemProps> = ({
  product
}) => {
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl} />

      <ProductInfo>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}
