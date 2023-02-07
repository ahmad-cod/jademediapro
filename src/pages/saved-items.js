import React from "react";
import { CartCard, ProductCard } from "../components";
import { cartData } from "../data/products/cartData";
import { productData } from "../data/products/productData";
import { productImage1 } from "../images";
import { Pagination } from "../components";
import useWidth from "../hooks/useWidth";

const SaveItems = () => {
  const [currentData, currentPage, setCurrentPage, dataPerPage, data] =
    useWidth(cartData, 3, 5);
  return (
    <div className="px-6 md:px-16">
      <div>
        <h1 className="text-[50px]">Saved Items</h1>
        <p>Total 5 items</p>
      </div>
      <div className="mt-16 flex flex-col gap-6">
        {currentData.map((data) => (
          <CartCard
            title={data.title}
            cartImage={data.cartImage}
            price={data.price}
            subtitle1={data.subtitle1}
            subtitle2={data.subtitle2}
          />
        ))}
      </div>
      <div className="my-12">
        <hr />
      </div>
      <div>
        <h2 className="text-[30px] md:text-[50px] ">Top picks for you</h2>
        <div className="mt-14 flex gap-4 flex-wrap">
          {productData.map((data) => (
            <ProductCard
              isNewProduct={data.isNewProduct}
              discount={data.discount}
              productImage={data.productImage}
              name={data.name}
              subtitle={data.subtitle}
              price={data.price}
              cancelledPrice={data.cancelledPrice}
            />
          ))}
        </div>
        {/* <ProductCard products={productData} /> */}
      </div>
      <Pagination
        cardsPerPage={dataPerPage}
        totalCards={data.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default SaveItems;
