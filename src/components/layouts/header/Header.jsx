import React from "react";
import styles from "../header/header.module.css";
import HeaderIcons from "./HeaderIcons";
// import Men from "./navigation/Men";
import HeaderSection from "./navigation/HeaderSection";
import { Link } from "react-router-dom";
import Burger from "./burger/Burger";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <Link to={"/"} className={styles.homePage}>
          <img
            className={styles.brand}
            src="/logo.svg"
            alt="187MAGAZINE | Homepage"
          />
        </Link>

        <div className={styles.nav}>
          <HeaderSection
            title={"women"}
            category1={"CLOTHING"}
            category2={"BAGS"}
            category3={"SHOES"}
            link1={"dresses"}
            link2={"Greca Goddess Bag"}
            link3={"sneakers"}
          />

          <HeaderSection
            title={"men"}
            category1={"CLOTHING"}
            category2={"BAGS"}
            category3={"SHOES"}
            link1={"sweatshirts"}
            link2={"Neo Nylon"}
            link3={"sneakers"}
          />
          <HeaderSection
            title={"bags"}
            category1={"WOMEN"}
            category2={"Link2"}
            category3={"Link3"}
            link1={"Greca Goddess Bag"}
            link2={"Link1"}
            link3={"Link1"}
          />
        </div>

        <div className={styles.headerIcons}>
          <HeaderIcons />
        </div>
      </div>
      <Burger />
    </div>
  );
};

export default Header;
