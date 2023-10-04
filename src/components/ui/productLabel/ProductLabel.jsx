import React from "react";
import styles from "./../../screens//products//sidebar//sidebar.module.css";

const ProductLabel = ({ handleChange, value, title, name, color }) => {
  return (
    <label className={styles.sidebarLabelContainer}>
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span
        className={styles.checkmark}
        style={{ backgroundColor: color }}
      ></span>
      {title}
    </label>
  );
};

export default ProductLabel;
