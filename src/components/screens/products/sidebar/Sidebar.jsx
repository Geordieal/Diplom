import React from "react";
import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";
import styles from "./sidebar.module.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className={styles.sidebar}>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
