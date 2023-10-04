import React from "react";
import styles from "./hero.module.css";
import ColOne from "./ColOne";
import ColTwo from "./ColTwo";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <ColOne />
      <ColTwo />
    </div>
  );
};

export default Hero;
