import React from "react";
import styles from "./sidebar.module.css";
import ProductLabel from "../../../ui/productLabel/ProductLabel";

const Price = ({ handleChange }) => {
  return (
    <div className={styles.ml}>
      <h2 className={`${styles.sidebarTitle} ${styles.priceTitle}`}>Price</h2>
      <div>
        <label className={styles.sidebarLabelContainer}>
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className={styles.checkmark}></span>All
        </label>

        <ProductLabel
          handleChange={handleChange}
          value={100}
          title="$0 - 100"
          name="test2"
        />
        <ProductLabel
          handleChange={handleChange}
          value={400}
          title="$100 - 400"
          name="test2"
        />
        <ProductLabel
          handleChange={handleChange}
          value={750}
          title="$400 - 1000"
          name="test2"
        />
        <ProductLabel
          handleChange={handleChange}
          value={1200}
          title="Over $1000"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Price;
