"use client";
import AppNavigation from "@/components/appNavigation";

import React from "react";
import SearchBox from "../../components/SearchBox";
import productData from "../../data/productsForDemo.json";
import ProductCard from "../../components/molecules/ProductCard";

const ProductListing = ({}) => {
  const renderProductsList = () => {
    let products = productData.scanResult.filter(
      (prod) => prod.isUnileverProduct
    );

    return products.map((prod, index) => {
      return (
        <ProductCard
          key={index}
          product={prod}
          full={true}
          userGoalsMatched={prod.userLifeGoalMatch}
          isUnileverProduct={prod.isUnileverProduct}
          renderForListing={true}
        />
      );
    });
  };

  return (
    <>
      <div className="product-listing-wrapper mb-32">
        <SearchBox />
        <button className="filter-button">
          <div className="filter-icon"></div>
          Filters
        </button>
        <div className="products-wrapper">{renderProductsList()}</div>
        <AppNavigation />
        <footer className="h-10 bg-primary fixed bottom-0 w-full z-10"></footer>
      </div>
    </>
  );
};
export default ProductListing;
