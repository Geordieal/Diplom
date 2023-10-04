import React from "react";
import styles from "./sidebar.module.css";
import ProductLabel from "../../../ui/productLabel/ProductLabel";

const Colors = ({ handleChange }) => {
  return (
    <div className={styles.colors}>
      <h2 className={`${styles.sidebarTitle} ${styles.colorTitle}`}>Colors</h2>
      <div>
        <label className={styles.sidebarLabelContainer}>
          <input onChange={handleChange} type="radio" value="" name="test3" />
          <span className={`${styles.checkmark} ${styles.all}`}></span>All
        </label>
        <ProductLabel
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test3"
          color="black"
        />

        <ProductLabel
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test3"
          color="blue"
        />

        <ProductLabel
          handleChange={handleChange}
          value="white"
          title="White"
          name="test3"
          color="white"
        />

        <ProductLabel
          handleChange={handleChange}
          value="orange"
          title="Orange"
          name="test3"
          color="orange"
        />
      </div>
    </div>
  );
};

export default Colors;
