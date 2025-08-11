import React from 'react'
import {products} from '../utils/products';
import ProductCard from './ProductCard';
import { useState } from 'react';


const Products = ({headline}) => {
    const categories =["Chair","Beds","Sofa","Lamp"];
    const [selectedCategory, setSelectedCategory] = useState("Chair");
    const filteredProducts = products.filter((product)=> product.category === selectedCategory)
  return (
    <div>
      <div className='section-container'>
        <h2 className='text-4xl font-bold text-center my-8'>{headline}</h2>
       
       {/* category tabs */}

       <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2 py-5 mb-16'>
          <div className='flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4'>
              {
                categories.map((category)=>(
                    <button onClick={()=>{setSelectedCategory(category)}} key={category} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors ${selectedCategory === category ? 'bg-white text-primary' : 'text-secondary'}`}>{category}</button>
                ))
            }
          </div>
       </div>


       {/* products grid */}
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {
          filteredProducts.map((product,index)=>(
            <div key={index}>
              {
               <ProductCard  product={product} />
              }
            </div>
          ))
        }
       </div>
  

      </div>
    </div>
  )
}

export default Products

