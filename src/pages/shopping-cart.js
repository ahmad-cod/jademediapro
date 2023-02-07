import React from 'react'
import Image from 'next/image'
import { storefront } from '../images';
import { productData } from '../data/products/productData';
import { ProductCard } from '../components';

const shoppingCart = () => {
  return (
    <div className='shoppingcart-container'>
      <div className='shoppingcart-heading'>
        <div className="shoppingcart-headertext">
          <h1>Shopping Cart</h1>
          <p>Total: 0 items</p>
        </div>

        <div className='shoppingcart-imageframe'>
          <Image src={storefront} alt="" width="100%" height="100%"/>
          <p className='yourcart'>Your cart is empty. Keep shopping to find a product!</p>
          <button className='shoppingcart-empty__cart-button'>Keep Shopping</button>

        </div>

      </div>
      <div className='shoppingcart-displaybox mt-20'>
            <h2 className=' top-picks text-[30px] md:text-[50px] '>Top picks for you</h2>
            <div className='.shoppingcart-box mt-14 flex gap-4 justify-between flex-wrap'>
                {
                    productData.map(data => (

                        <ProductCard isNewProduct={data.isNewProduct} discount={data.discount}  productImage={data.productImage} name={data.name} subtitle={data.subtitle} price={data.price} cancelledPrice={data.cancelledPrice} />
                    ))

                }
            </div>
        </div>
    </div>
  )
}

export default shoppingCart;