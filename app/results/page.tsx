"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../../components/molecules/ProductCard";
import Card from "../../components/molecules/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppNavigation from "../../components/appNavigation";
import Alert from "../../components/ALert";
import Image from "next/image";

const alternateProductGoals = "two";

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

const product = {
	sku: "8710447365403",
	productName: "Love Beauty And Planet Volume & Bounty Conditioner",
	isUnileverProduct: true,
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
const alterznAmteproduct = {
	sku: "8710847949487",
	productName:
		"Love Beauty and Planet Blooming Colour Shampoo Bar for Colour-Treated Hair 50 Washes",
	isUnileverProduct: true,
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

const offsetGoals = [
	{
		offsetActivity: "Walk or bike instead of driving",
		description:
			"Choose walking or biking for short trips to reduce carbon emissions and improve personal health.",
		health: 5,
		wellbeing: 5,
		affordability: 5,
		sustainability: 5,
		community: 0,
	},
	{
		offsetActivity: "Walk or bike instead of driving",
		description:
			"Choose walking or biking for short trips to reduce carbon emissions and improve personal health.",
		health: 5,
		wellbeing: 5,
		affordability: 5,
		sustainability: 5,
		community: 0,
	},
	{
		offsetActivity: "Walk or bike instead of driving",
		description:
			"Choose walking or biking for short trips to reduce carbon emissions and improve personal health.",
		health: 5,
		wellbeing: 5,
		affordability: 5,
		sustainability: 5,
		community: 0,
	},
	{
		offsetActivity: "Walk or bike instead of driving",
		description:
			"Choose walking or biking for short trips to reduce carbon emissions and improve personal health.",
		health: 5,
		wellbeing: 5,
		affordability: 5,
		sustainability: 5,
		community: 0,
	},
];

const renderCards = (offsetGoals) => {
	let offsetRender: any = [];

	offsetGoals.forEach((item) => {
		offsetRender.push(<Card offset={item} route={"/"} ctaText={"More Info"} />);
	});

	return offsetRender;
};
const results = () => {
	const [renderNotification, setRenderNotification] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setRenderNotification(false);
		}, 3000);
	}, [renderNotification]);
	return (
		<div className="result-page-wrapper relative">
			{renderNotification && (
				<Alert>
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
			<ProductCard
				product={product}
				full={true}
				isUnileverProduct={product.isUnileverProduct}
			/>
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

			<div className="offset-div-wrapper">
				<Slider {...settings}>{renderCards(offsetGoals)}</Slider>
			</div>
			<AppNavigation />
		</div>
	);
};

export default results;
