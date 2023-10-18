import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SWAP",
	description: "Life Goals App",
};
export default function Home() {
	return (
		<main className="home px-8">
			<Head>
				<title>SWAP</title>
				<meta property="og:title" content="SWAP - life goals app" key="title" />
				<script
					type="text/javascript"
					src="https://s3.cartwire.co/widget/js/widget_master_v2.js"></script>
			</Head>
			<div className="heading">
				<h1 className="flex flex-col items-center text-center text-lightYellow text-xl">
					Welcome to
					<Image
						className="mt-4 mb-4"
						src="/assets/swap-logo.svg"
						alt="Logo"
						width={300}
						height={300}
					/>
				</h1>
				<p className="text-center text-2xl mt-64 mb-20 text-primary">
					We take some of the stress of decision making between products away
					and make life easier.
				</p>
			</div>
			<div className="flex flex-col ">
				<Link
					href="/auth/signup"
					role="button"
					className="bg-white text-lg rounded-full  py-4 px-6 text-primary">
					Create your account
				</Link>
				<Link className="text-center mt-4 text-primary" href="/auth/signup">
					Log In
				</Link>
			</div>
		</main>
	);
}
