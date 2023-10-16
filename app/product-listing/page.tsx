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

		return products.map((prod) => {
			return (
				<ProductCard
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
		<div className="product-listing-wrapper">
			<SearchBox />
			<button className="filter-button">
				<div className="filter-icon"></div>
				Filters
			</button>
			<div className="products-wrapper">{renderProductsList()}</div>
			<AppNavigation />
		</div>
	);
};
export default ProductListing;
