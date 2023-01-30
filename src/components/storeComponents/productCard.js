import Image from "next/image";
import styles from "../../styles/Store.module.css";
import { AiOutlineEye } from "react-icons/ai";
import { BsShare, BsHeart } from "react-icons/bs";

const ProductCard = ({ products }) => {
  return (
    <div className={styles.products_container}>
      {products.map((product) => (
        <div key={product.id} className={styles.product}>
          <div className={styles.product_content}>
            <div className={styles.product_image}>
              <Image src={product.image} alt={product.title} />
              <button
                className={
                  product.feature === "-30%" ? styles.red_background : ""
                }
              >
                {product.feature === "-30%" || product.feature === "New"
                  ? product.feature
                  : undefined}
              </button>
            </div>
            <div className={styles.product_text}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <h4>{product.price}</h4>
              <p className={styles.dis}>{product.discount}</p>
            </div>
          </div>
          <div className={styles.hover_info}>
            <div className={styles.hover}>
              <a href={`/store/productdetails/${product.id}`}>
                Preview <AiOutlineEye />
              </a>
              <div className={styles.hover_icons}>
                <button>
                  <BsShare /> Share
                </button>
                <button>
                  <BsHeart /> Like
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
