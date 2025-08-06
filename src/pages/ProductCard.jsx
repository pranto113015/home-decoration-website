import React from 'react'
import { getImgUrl } from '../utils/getImageURL';

const ProductCard = ({product}) => {
  return (
    <div>
      <div className='bg-[#FAFAFA]'>
        <img src={getImgUrl(`${product.imageUrl}`)} alt="product_img" />
      </div>
    </div>
  )
}

export default ProductCard
