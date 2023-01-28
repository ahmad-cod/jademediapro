import Image from "next/image";
import { useRouter } from "next/router";
import { products } from "../../../data/storeData";
import { MdWest } from "react-icons/md";
import styles from "../../../styles/Store.module.css";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BiWorld } from "react-icons/bi";
import { BsTruck, BsCart2 } from "react-icons/bs";

const ProductDetails = () => {
  const [animate, setAnimate] = useState(0);
  const router = useRouter();
  const productId = router.query.id;
  const handleClick = (e) => {
    setAnimate(e.target.value);
  };
  const handleSubmit = (w) => {};

  return (
    <div className={styles.product_description}>
      {products
        ?.filter((product) => product.id === productId)
        .map((product) => (
          <>
            <div className={styles.navigation}>
              <div></div>
              <a>
                <MdWest /> Continue Shopping
              </a>
            </div>
            <div className={styles.product_detail}>
              <div className={styles.product_images_container}>
                <Carousel
                  className={styles.product_preview}
                  showArrows={false}
                  showStatus={false}
                  showIndicators={false}
                  renderThumbs={() =>
                    product.previewImages.map((thumbnail) => (
                      <Image
                        src={thumbnail.src}
                        alt={thumbnail.alt}
                        key={thumbnail.src}
                        width={60}
                        height={60}
                      />
                    ))
                  }
                >
                  {product.previewImages.map((image, i) => (
                    <div
                      className={styles.product_preview_image}
                      key={i}
                      id={product.title}
                    >
                      <Image src={image} alt="product" />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className={styles.product_text_container}>
                <div className={styles.product_heading}>
                  <h2>{product.title}</h2>
                  <p>{product.author}</p>
                </div>
                <div className={styles.product_info}>
                  <p>{product.type}</p>
                  <p>{product.date}</p>
                  <p>{product.build}</p>
                  <p>{product.style}</p>
                  <p>{product.size}</p>
                </div>
                <p>{product.summary}</p>
                <hr className={styles.hr}></hr>
                <div className={styles.product_price}>
                  <p>{product.price}</p>
                </div>
                <div className={styles.product_shipping_details}>
                  <div>
                    <BiWorld /> Ships from Lagos, Nigeria
                  </div>
                  <div>
                    <BsTruck />
                    Estimated to ship in 3 - 7 days within Nigeria
                  </div>
                </div>
                <div className={styles.product_add_button}>
                  <button>
                    <BsCart2 /> Add to Cart
                  </button>
                </div>
                <div className={styles.product_footer}>
                  <p>Taxes and shipping fees will apply upon checkout</p>
                </div>
              </div>
              <section>
                <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
              </section>
            </div>
          </>
        ))}
    </div>
  );
};

export default ProductDetails;
