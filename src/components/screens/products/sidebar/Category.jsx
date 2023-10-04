import React from "react";
import styles from "./sidebar.module.css";
import ProductLabel from "../../../ui/productLabel/ProductLabel";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className={styles.sidebarTitle}>Category</h2>
      <div>
        <label className={styles.sidebarLabelContainer}>
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className={styles.checkmark}></span>All
        </label>

        <ProductLabel
          handleChange={handleChange}
          value="clothing"
          title="Clothing"
          name="test"
        />
        <ProductLabel
          handleChange={handleChange}
          value="shoes"
          title="Shoes"
          name="test"
        />
        <ProductLabel
          handleChange={handleChange}
          value="bags"
          title="Bags"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
