import React from "react";
import ProductCard from "../../components/molecules/ProductCard";
import OffsetCard from "../../components/molecules/OffsetCard";

const results = () => {
	const product = {
		sku: "5057172029709",
		productName: "Asda Galactic Ice Cream 900ml",
		isUnileverProduct: false,
		price: 2.57,
		health: 1,
		wellbeing: 1,
		sustainability: 2,
		community: 0,
		affordability: 5,
		imageAltText: "Volume and Fullness Shampoo",
		imageUrl:
			"https://assets.unileversolutions.com/v2/w600/ch-retailer/web/0lm4z0r-iECbs9K6yQYghg/88591310.jpeg",
		pageUrl:
			"https://www.dove.com/us/en/p/volume-and-fullness-shampoo.html/00079400458018",
		shortDescription:
			"Dove Ultra Care Shampoo Hair Volume & Fullness Shampoo with Bio-Restore Complex 12 fl oz",
	};

	const offset = {
		offsetActivity: "Walk or bike instead of driving",
		description:
			"Choose walking or biking for short trips to reduce carbon emissions and improve personal health.",
		health: 5,
		wellbeing: 5,
		affordability: 5,
		sustainability: 5,
		community: 0,
	};

	const renderOffsetCards = (length = 4) => {
		let offsetRender: any = [];
		for (let i = 0; i < length; i++) {
			offsetRender.push(<OffsetCard offset={offset} />);
		}

		return offsetRender;
	};

	const alternateProductGoals = "two";
	return (
		<div className="result-page-wrapper">
			<ProductCard product={product} full={true} />
			<div className="alternate-product-wrapper">
				<div className="alternate-product-wrapper-icon"></div>
				<h3 className="alternate-product-heading">
					SWAP to this and hit {alternateProductGoals} more goals!
				</h3>
				<p className="alternate-product-description">
					Waste reduction / Refillable Products
				</p>
				<ProductCard product={product} full={false} />
			</div>

			{renderOffsetCards()}
		</div>
	);
};

export default results;
