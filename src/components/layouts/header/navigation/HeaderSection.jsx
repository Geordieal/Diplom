import React from "react";
import styles from "../../header/header.module.css";
import { Link } from "react-router-dom";

const HeaderSection = ({
  title,
  category1,
  category2,
  category3,
  link1,
  link2,
  link3,
}) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.dropDown}>
        <button>
          <Link to={`/products/category/${title}`} className={styles.dropBtn}>
            {title}
          </Link>
        </button>

        <div className={styles.dropDownContent}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.col}>
                <h3>{category1}</h3>
                <li>
                  <Link to={`/products/productType/${link1}`}>{link1}</Link>
                </li>
                <li>
                  <Link> Link 2</Link>
                </li>
                <li>
                  <Link> Link 3</Link>
                </li>
              </div>
            </div>
            <div className={styles.column}>
              <h3>{category2}</h3>
              <li>
                <Link to={`/products/productType/${link2}`}>{link2}</Link>
              </li>
              <li>
                <Link> Link 2</Link>
              </li>
              <li>
                <Link> Link 3</Link>
              </li>
            </div>
            <div className={styles.column}>
              <h3>{category3}</h3>
              <li>
                <Link to={`/products/productType/${link3}`}>{link3}</Link>
              </li>
              <li>
                <Link> Link 2</Link>
              </li>
              <li>
                <Link> Link 3</Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
