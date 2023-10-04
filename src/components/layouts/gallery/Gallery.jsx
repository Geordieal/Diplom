import React from "react";

import styles from "./gallery.module.css";
import ButtonWhite from "./../../ui/button/ButtonWhite";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Link to={`/products/productType/Neo Nylon`}>
            <img
              src="https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Library-Sites-ver-library/default/dw4c1b58c4/Homepage-New/hero-2-6-9-2023-desk.jpg"
              alt="mens-bags"
            />
          </Link>
          <div className={styles.stickyContainer}>
            <h2 className={styles.caption}>men's bags</h2>
            <ButtonWhite
              title={"shop now"}
              link={`/products/productType/Neo Nylon`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
