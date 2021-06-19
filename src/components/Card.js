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
  // let discount = ((product.oldPrice - product.price) / product.oldPrice) * product.oldPrice;
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      keyboard={{ enabled: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 60,
        },
      }}
    >
      {data.map((product) => (
        <SwiperSlide key={product.productId}  >
          <div className={style.cardContainer}>
            {product.oldPrice ? (
              <div className={style.discount}>
                {"-" +
                  (
                    product.oldPrice -
                    (product.price / product.oldPrice) * product.oldPrice
                  ).toFixed(0) +
                  "%"}
              </div>
            ) : null}
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
                  <div className={style.price}>{product.price + "€ *"}</div>
                  {product.oldPrice ? (
                    <div className={style.oldPrice}>
                      {product.oldPrice + "€ *"}
                    </div>
                  ) : null}
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
