import React from "react";
import styles from "./button.module.css";
import { Link } from "react-router-dom";
const ButtonWhite = ({ title, link }) => {
  return (
    <Link to={`${link}`} className={styles.btnWhite}>
      {title}
    </Link>
  );
};

export default ButtonWhite;
