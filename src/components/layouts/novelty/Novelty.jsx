import React from "react";
import styles from "./novelty.module.css";
import ButtonBlack from "../../ui/button/ButtonBlack";

const Novelty = () => {
  return (
    <section className={styles.contentProducts}>
      <div className={styles.topRow}>
        <span>New items</span>

        <ButtonBlack title={"view all"} />
      </div>
      <div className={styles.productsItems}>
        <div className={styles.productsItem}>
          <a className={styles.productsImage} href="">
            <img
              src="https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw3d2a9e3e/original/90_1009699-1A08705_1B00E_20_NeoNylonLargeToteBag-Bags-Versace-online-store_1_2.jpg?sw=850&q=85&strip=true"
              alt=""
            />
          </a>
          <a href="" className={styles.productsName}>
            Neo Nylon Large Tote Bag
          </a>
          <a href="" className={styles.productsButton}>
            Buy
          </a>
        </div>
        <div className={styles.productsItem}>
          <a className={styles.productsImage} href="">
            <img
              src="https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw6846e849/original/90_1011988-1A08705_1B00E_20_Neo~Nylon~Jacquard~Messenger~Bag-Crossbody~Bags-Versace-online-store_0_0.jpg?sw=850&q=85&strip=true"
              alt=""
            />
          </a>
          <a href="" className={styles.productsName}>
            Neo Nylon Jacquard Messenger Bag
          </a>
          <a href="" className={styles.productsButton}>
            Buy
          </a>
        </div>
        <div className={styles.productsItem}>
          <a className={styles.productsImage} href="">
            <img
              src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0ab1cc4ac0a457bb4de8a9fad83defe_9366/All_SZN_Fleece_Sweatshirt_Black_IJ6903_21_model.jpg"
              alt=""
            />
          </a>
          <a href="" className={styles.productsName}>
            All SZN Fleece
          </a>
          <a href="" className={styles.productsButton}>
            Buy
          </a>
        </div>
        <div className={styles.productsItem}>
          <a className={styles.productsImage} href="">
            <img
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/75f5cf17-1344-49ef-acbf-219ca2b2c509/sportswear-club-fleece-crew-TWcqLw.png"
              alt=""
            />
          </a>
          <a href="" className={styles.productsName}>
            Nike Sportswear Club Fleece
          </a>
          <a href="" className={styles.productsButton}>
            Buy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Novelty;
