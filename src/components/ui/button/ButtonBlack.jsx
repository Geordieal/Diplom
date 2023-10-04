import React from "react";
import styles from "./button.module.css";
import { Link } from "react-router-dom";

const ButtonBlack = ({ title, link }) => {
  return (
    <Link to={`${link}`} className={styles.btnBlack}>
      {title}
    </Link>
  );
};

export default ButtonBlack;
