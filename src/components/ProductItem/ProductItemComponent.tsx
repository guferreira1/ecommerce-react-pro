import { FunctionComponent, useContext } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { CartContext } from '../../contexts/CartContext'

// Utilities
import { Product } from '../../types/productTypes'

// Components
import { CustomButton } from '../CustomButton/CustomButtonComponent'

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
  const { addProductToCart } = useContext(CartContext)

  const handleAddToCartClick = () => {
    addProductToCart(product)
  }

  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton onClick={handleAddToCartClick} startIcon={<BsCartPlus />}>
          Adicionar ao Carrinho
        </CustomButton>
      </ProductImage>

      <ProductInfo>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}
