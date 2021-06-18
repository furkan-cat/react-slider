import React from "react";
import style from "../style/card.module.css";
import data from "../data/data";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Card = () => {
    // const discount = data.
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data.map((product) => (
        <SwiperSlide>
          <div className={style.cardContainer}>
              { <div></div>}
            <div className={style.flexCon}>
              <div>
                <div className={style.imgContainer}>
                  <img
                    src={product.image}
                    alt=""
                    className={style.productImg}
                  />
                </div>
                <div className={style.productName}>{product.name}</div>
              </div>
              <div>
                <div className={style.productPrice}>
                  <span>{product.priceText}</span>
                  <span className={style.oldPriceText}>
                    <del>{product.oldPrice}</del>
                  </span>
                </div>
                <div className={style.productInfo}>{product.basePrice}</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Card;
