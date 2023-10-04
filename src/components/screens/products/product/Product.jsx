import React from "react";
import styles from "./product.module.css";
import { Link } from "react-router-dom";

const Product = ({ src, id, title, price }) => {
  return (
    <div key={id} className={styles.productsItem}>
      <Link to={`/products/item/${id}`} className={styles.productsImage}>
        <img src={src} alt={title} />
      </Link>
      <Link to={`/products/item/${id}`} className={styles.productsName}>
        {title}
      </Link>
      <Link to={`/products/item/${id}`} className={styles.productsBtn}>
        ${price}
      </Link>
    </div>
  );
};

export default Product;
