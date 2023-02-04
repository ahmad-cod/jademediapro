import Image from 'next/image'
import React from 'react'

const ProductCard = ({isNewProduct, discount,  productImage, name, subtitle, price, cancelledPrice}) => {
  return (
    <div className='relative max-w-[278px]'>
        {
            discount && (<div className='absolute  flex  text-white  bg-[#F87171] rounded-full right-4 top-4 w-[47px] h-[47px] '>
               
                <div className='w-full relative'>
               <p className='absolute right-1 top-[2px]'>
               {discount}
               </p>
               </div>
            </div>)
        }
         {
            isNewProduct && (<div className='absolute    text-white bg-[#34D399] rounded-full left-4 top-4 w-[47px] h-[47px] '>
               <div className='w-full relative'>
               <p className='absolute right-2 top-[2px]'>New</p>
               </div>
            </div>)
        }
        <Image src={productImage} width="100%" height="100%" alt="product" />
       <div className='px-4 bg-[#F6F6F6] h-[159px]'>
       <h3 className='font-bold text-6  '>{name}</h3>
        <p className='text-[#57585F]'>{subtitle}</p>
        <p className='text-[#77459B] text-[21px]'>{price}</p>
        {
            cancelledPrice && (<p className='text-[#AEB1BF] line-through '>{cancelledPrice}</p>)
        }
       </div>
    </div>
  )
}

export default ProductCard