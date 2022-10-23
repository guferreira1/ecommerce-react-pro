import { FunctionComponent } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

// Utilities
import { Product } from '../../types/productTypes'
import { addProductToCart } from '../../store/toolkit/cart/cart.slice'

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
  const dispatch = useDispatch()

  const handleAddToCartClick = () => {
    dispatch(addProductToCart(product))
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
