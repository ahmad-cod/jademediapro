import Image from 'next/image'
import React from 'react'
import { BsArrowBarRight } from 'react-icons/bs'

const CartCard = ({cartImage, title, price, subtitle1, subtitle2 }) => {
  return (
    <div className='border-[1px] flex flex-col sm:flex-row gap-5 items-start justify-between rounded border-[ #91939F] max-w-[881px] p-6'>
        <div className='flex flex-wrap  gap-5'>
            <div className='max-w-[207px] '>
                <Image src={cartImage} width="100%" height="100%" alt='carts '/>
            </div>
            <div>
                <p className='text-[18px] text-[#242526] font-[500]'>{title}</p>
                <p className='text-[18px] text-[#242526] font-[500]'>{price}</p>
                <p className='text-[#3A3B40]'>{subtitle1}</p>
                <p className='text-[#3A3B40]'>{subtitle2}</p>
            </div>
        </div>
        <div className='flex gap-1 flex-col'>
            <button className='text-[#DC2626] '>Remove</button>
            <button className='flex justify-center items-center rounded gap-3 px-5 py-3 text-[#46BFB2]'>Add To Cart<BsArrowBarRight/></button>
            <button className='flex justify-center items-center rounded bg-[#4F2E67] gap-3 text-white px-5=t py-3'>Buy Now <BsArrowBarRight/></button>
        </div>
    </div>
  )
}

export default CartCard