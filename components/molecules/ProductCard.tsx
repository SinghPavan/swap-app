import React from "react";
import Image from "next/image";
import Head from "next/head";

declare global {
  interface Window {
    loadsWidget: (
      arg1: string,
      arg2: HTMLElement | null,
      arg3: string,
      arg4: string
    ) => void;
  }
}

const handleBinOnClick = (event: any) => {
  // (window as any["loadsWidget"])(
  //   "51f53e6eb07eaba25291af265b15d458",
  //   event.currentTaget,
  //   "retailPopup",
  //   "en"
  // );
  window?.loadsWidget(
    "51f53e6eb07eaba25291af265b15d458",
    event.currentTarget,
    "retailPopup",
    "en"
  );
};

const ProductCard = (props: any) => {
  return !props.renderForListing ? (
    <div
      className={`product-card-wrapper ${props.smallFonts ? "font-small" : ""}`}
    >
      <Head>
        <script
          src="https://s3.cartwire.co/widget/js/widget_master_v2.js"
          async
        />
      </Head>
      {props.full && (
        <div className="top-section justify-between items-center flex p-4">
          <div className="goal-indicator flex gap-2">
            <span className="text-primary px-4 py-2 font-bold bg-lightYellow rounded-full">
              {props.userGoalsMatched} GOAL
              {props.userGoalsMatched > 1 ? "S" : ""} MATCHED
            </span>
            <span className="light-icon flex"></span>
          </div>
          <span
            className="heart-icon flex"
            onClick={(event) => {
              (event.target as HTMLInputElement)?.classList?.toggle("active");
            }}
          ></span>
        </div>
      )}
      <div className="middle-section justify-around items-center flex p-4">
        <Image
          className="mt-4 mb-4"
          src={props?.product?.imageUrl}
          alt="Product Photo"
          width={224}
          height={112}
        />
      </div>
      <div className="bottom-section">
        <h3 className="product-title">{props?.product?.productName}</h3>
        <span>
          {props?.product?.shortDescription && (
            <p className="product-description">
              {props?.product?.shortDescription + " "}
              <a
                className="product-link"
                href={props?.product?.pageUrl}
                target="_blank"
              >
                More
              </a>
            </p>
          )}
        </span>
        {props?.isUnileverProduct && (
          <div className="buynow-wrapper">
            <p className="product-price">From £{props?.product.price}</p>
            <button
              className="product-buyNow"
              onClick={(event) => handleBinOnClick(event)}
            ></button>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div
      className={`product-card-wrapper font-small render-for-listing relative`}
    >
      <div className="top-section absolute">
        {props.isUnileverProduct && (
          <span
            className="heart-icon flex"
            onClick={(event) => {
              (event.target as HTMLInputElement).classList.toggle("active");
            }}
          ></span>
        )}
      </div>
      <div className="middle-section justify-around items-center flex flex-wrap">
        <Image
          src={props?.product?.imageUrl}
          alt="Product Photo"
          width={91}
          height={93}
        />
      </div>
      <div className="bottom-section">
        <h3 className="product-title">{props?.product?.productName}</h3>
        <div className="goal-indicator">
          <h1 className="text-blue-500">
            {props.userGoalsMatched} GOAL
            {props.userGoalsMatched > 1 ? "S" : ""} MATCHED
          </h1>
        </div>
        <div className="buynow-wrapper">
          <p className="product-price">From £{props?.product?.price}</p>
          <button className="product-buyNow"></button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
