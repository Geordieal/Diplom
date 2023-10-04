import React from "react";
import SwiperHighlight from "../../ui/swipers/swiper-highlights/SwiperHighlight";
import styles from "./highlights.module.css";

const Highlights = () => {
  return (
    <div className={styles.highlights}>
      <div className={styles.highlightsRow}>
        <div className={styles.colOne}>
          <h2>HIGHLIGHTS</h2>
        </div>
        <SwiperHighlight className={styles.swiper} />
      </div>
    </div>
  );
};

export default Highlights;
