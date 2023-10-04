import React from "react";
import styles from "./../products.module.css";

const Cards = ({ result }) => {
  return (
    <>
      <section className={styles.productsItemsContainer}>{result}</section>
    </>
  );
};

export default Cards;
