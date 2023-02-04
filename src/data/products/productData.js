import {  productImage1, productImage2, productImage3, productImage4 } from "../../images";



export const productData = [
  {
    isNewProduct: true,
    discount: "" , 
    productImage: productImage1,
     name:"Crune Chair",
      subtitle:"Stylish cafe chair",
       price:"NGN 25,000.00" ,
    cancelledPrice:""
  },
  {
    isNewProduct: false,
    discount: "" , 
    productImage: productImage2,
     name:"Brand Shirt",
      subtitle:"t-shit Mech",
       price:"NGN 4,000.00" ,
    cancelledPrice:""
  },
  {
    isNewProduct: true,
    discount: "" , 
    productImage: productImage3,
     name:"Cotton Tom",
      subtitle:"Kiddies Wall Frame",
       price:"NGN 8,000.00" ,
    cancelledPrice:""
  },
  {
    isNewProduct: false,
    discount: "-30%" , 
    productImage: productImage4,
     name:"Woilly Abstract",
      subtitle:"Oil Painting",
       price:"NGN 25,000.00" ,
    cancelledPrice:"NGN 32,000.00"
  }
]