import React from 'react'
import { getImgUrl } from '../utils/getImageURL';

const ProductCard = ({product}) => {
  return (
    <div>
        {/* image fetch form products.js */}
      <div className='bg-[#FAFAFA]'>
        <img src={getImgUrl(`${product.imageUrl}`)} alt="product_img" />
      </div>

       {/* product card design */}
      <div className='p-6 bg-white dark:bg-black shadow-sm'>
        <h4 className='text-base mb-1'>{product.category}</h4>
        <h3 className='font-semibold text-xl mb-2'>{product.name}</h3>
      </div>
    </div>
  )
}

export default ProductCard
