import React from "react";
import styles from "./hero.module.css";
import ButtonBlack from "../../ui/button/ButtonBlack";
import ButtonWhite from "./../../ui/button/ButtonWhite";

const ColTwo = () => {
  return (
    <div className={styles.colTwo}>
      <div className={styles.caption}>
        <h1>ONE DAY SALE</h1>
        <h1>50% off all shoes</h1>
      </div>
      <div className={styles.colTwoSecond}>
        <div className={styles.text}>
          <p>Only orignial products</p>
        </div>

        <div className={styles.buttons}>
          <ButtonWhite title={"shop women"} link={`/products/category/women`} />
          <ButtonWhite title={"shop men"} link={`/products/category/men`} />
        </div>
      </div>
    </div>
  );
};

export default ColTwo;
