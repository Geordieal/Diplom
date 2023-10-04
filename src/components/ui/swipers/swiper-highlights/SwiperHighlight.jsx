import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import styles from "./swiper-highlight.module.css";
import "./../swipers.css";

const SwiperHighlight = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3001/products`);

      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
    >
      {data.map((item) => (
        <SwiperSlide className={styles.item} key={item.id}>
          <img src={item.src} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperHighlight;
