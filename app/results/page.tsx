"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../../components/molecules/ProductCard";
import Card from "../../components/molecules/Card";
import AppNavigation from "../../components/appNavigation";
import Alert from "../../components/Alert";
import Image from "next/image";
import productData from "../../data/productsForDemo.json";
import { Swiper, SwiperSlide } from "swiper/react";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const renderCards = (offsetGoals: any) => {
  let offsetRender: any = [];

  offsetGoals.forEach((item: any, index: number) => {
    offsetRender.push(
      <SwiperSlide key={index}>
        {" "}
        <Card offset={item} route={"/"} ctaText={"More Info"} />{" "}
      </SwiperSlide>
    );
  });

  return offsetRender;
};
const Results = () => {
  const product = productData.scanResult.filter(
    (item: any) => item.sku === "8006540810743"
  );

  const alternateProductGoals =
    product[0]?.alternateProduct?.userLifeGoalMatch -
    product[0]?.userLifeGoalMatch;

  const offsetGoals = productData.userOffsetActivities;

  const [renderNotification, setRenderNotification] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRenderNotification(false);
    }, 5000);
  }, [renderNotification]);

  const handleIconOnClick = () => {
    setRenderNotification(true);
  };
  return (
    <div className="result-page-wrapper relative overflow-x-hidden overflow-y-scroll">
      {renderNotification && (
        <Alert className="absolute">
          <Image
            className="swap-logo"
            src="/assets/swap-logo.svg"
            alt="Logo"
            width={224}
            height={112}
          />
          <h2>🌟 Your Goals, Your Savings at Boots</h2>
          <h3>
            Explore products that support your life goals and save big. Click to
            see the offers!
          </h3>
        </Alert>
      )}
      <div>
        <ProductCard
          product={product[0]}
          full={true}
          userGoalsMatched={product[0]?.userLifeGoalMatch}
          isUnileverProduct={product[0]?.isUnileverProduct}
        />
      </div>
      <div className="alternate-product-wrapper">
        <div
          className="alternate-product-wrapper-icon"
          role="button"
          onClick={() => handleIconOnClick()}
        ></div>
        <h3 className="alternate-product-heading">
          SWAP to this and hit {alternateProductGoals} more goal
          {alternateProductGoals > 1 ? "s" : ""}!
        </h3>
        <p className="alternate-product-description">
        Health, Wellbeing, and Affordability
        </p>
        <ProductCard
          product={product[0]?.alternateProduct.product}
          full={false}
          isUnileverProduct={
            product[0]?.alternateProduct?.product?.isUnileverProduct
          }
        />
      </div>

      <div className="offset-div-wrapper">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {renderCards(offsetGoals)}
        </Swiper>
      </div>
      <AppNavigation />
    </div>
  );
};

export default Results;
