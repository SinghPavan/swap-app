import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({
	offset,
	ImgSrc,
	ctaText,
	route,
}: {
	offset: any;
	ImgSrc?: any;
	ctaText?: any;
	route?: any;
}) => {
	return (
		<div className="offset-card-wrapper">
			<div className="offset-icon">
				{ImgSrc && <Image src={ImgSrc} alt="Logo" width={224} height={112} />}
			</div>
			<h3 className="offset-title">{offset.offsetActivity}</h3>
			<p className="offset-description">{offset.description}</p>
			{ctaText && <Link href={route}>{ctaText}</Link>}
		</div>
	);
};

export default Card;
