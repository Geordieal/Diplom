import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import styles from "./swiper-default.module.css";
const SwiperDefault = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={6}
      navigation
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src="https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwaca36cb0/original/90_1008124-1A08728_2B130_22_OdisseaSneakers-Shoes-Versace-online-store_0_2.jpg?sw=850&q=85&strip=true" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwcefe9f68/original/90_1004184-1A00775_2W020_22_Greca~Sneakers--Versace-online-store_0_0.jpg?sw=850&q=85&strip=true" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw3951cbbe/original/90_1011349-1A05873_1W000_22_GrecaOdisseaHigh~TopSneakers-Shoes-Versace-online-store_0_2.jpg?sw=850&q=85&strip=true" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwd16bfd29/original/90_1012570-1A09069_1B000_10_VersaceFilmTitlesSweatshirt-Clothing-Versace-online-store_1_2.jpg?sw=550&q=85&strip=true" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw8f9e8787/original/90_1007220-1A05134_1W00V_20_Greca~Goddess~Mini~Bag--Versace-online-store_0_0.jpg?sw=850&q=85&strip=true" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee3f2362-71bd-482c-9ec4-da409a6c149e/sportswear-club-fleece-mens-graphic-crew-56GFJR.png" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/75f5cf17-1344-49ef-acbf-219ca2b2c509/sportswear-club-fleece-crew-TWcqLw.png" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperDefault;
