import React from "react";
import SwiperDefault from "../../ui/swipers/SwiperDefault";
import styles from "./slider-section.module.css";
import ButtonBlack from "./../../ui/button/ButtonBlack";

const SliderSection = () => {
  return (
    <div className={styles.sliderSection}>
      <div className={styles.topRow}>
        <span>What's Trending</span>
        <ButtonBlack title={"view all"} />
      </div>
      <SwiperDefault />
    </div>
  );
};

export default SliderSection;
