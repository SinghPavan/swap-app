import React from "react";

const SearchBox = () => {
	return (
		<div className="search-box-wrapper relative">
			<div className="search-icon absolute"></div>
			<input
				type="text"
				id="floating_filled"
				placeholder="Search for a Product"
			/>
			<div className="mic-icon absolute"></div>
		</div>
	);
};

export default SearchBox;
