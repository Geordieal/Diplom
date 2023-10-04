import React from "react";
import styles from "./nav.module.css";
// import Sort from "./../../../ui/filter/Sort";

const Nav = ({
  handleClick,
  handleInputChange,
  handleSortChange,
  query,
  sortType,
}) => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.wrapMarg}>
        <div className={styles.navBtns}>
          <button onClick={handleClick} className={styles.btns} value="">
            All products
          </button>
          <button onClick={handleClick} className={styles.btns} value="Nike">
            Nike
          </button>
          <button onClick={handleClick} className={styles.btns} value="Adidas">
            Adidas
          </button>
          <button onClick={handleClick} className={styles.btns} value="Versace">
            Versace
          </button>
        </div>
      </div>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Enter your search"
        onChange={handleInputChange}
        value={query}
      />
      <select
        className={styles.sort}
        value={sortType}
        onChange={handleSortChange}
      >
        <option value="default">Default</option>
        <option value="price_asc">Price: Low to High ↑</option>
        <option value="price_desc">Price: High to Low ↓</option>
      </select>
    </div>
  );
};

export default Nav;
