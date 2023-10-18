import React from "react";
import Link from "next/link";
import Image from "next/image";

const AppNavigation = () => {
	return (
		<div className="app-navigation">
			<div className="home-button">
				<button className="app-navigation-button">
					<Link href="/profile" role="button">
						<div className="home-icon" />
						Home
					</Link>
				</button>
			</div>
			<div className="products-button">
				<button className="app-navigation-button">
					<Link href="/product-listing" role="button">
						<div className="products-icon" />
						Products
					</Link>
				</button>
			</div>
			<div className="scan-button">
				<button className="app-navigation-button">
					<Link href="/scan" role="button">
						{/* <div className="scan-icon" /> */}
						<Image
							src="/assets/scan-icon.svg"
							alt="scan button"
							width={65.92}
							height={65.92}
						/>
						SWAP
					</Link>
				</button>
			</div>
			<div className="rewards-button">
				<button className="app-navigation-button">
					{/* <Link href="/rewards" role="button"> */}
					<div className="rewards-icon" />
					Rewards
					{/* </Link> */}
				</button>
			</div>
			<div className="profile-button">
				<button className="app-navigation-button">
					{/* <Link href="/profile" role="button"> */}
					<div className="profile-icon" />
					Profile
					{/* </Link> */}
				</button>
			</div>
		</div>
	);
};
export default AppNavigation;
