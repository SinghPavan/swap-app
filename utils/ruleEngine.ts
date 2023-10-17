import offsetActivitiesJSON from "../data/offsetActivityLifeGoalAlignmentScore.json";
import lifeGoalAlignmentJSON from "../data/productLifeGoalAlignmentScore.json";
import { sortProductsOnGoals } from "./sort.utils";
import { LifeGoals } from "./types";
// import sustainabilityJSON from "../data/productSustainabilityBadges.json";

let bestMatchingProducts = [];

let betterSuitedProductInfo = [];
// let highestOffeseter;

//always assume u get correct sku
export const getProductInfoForSKU = (sku: any) => {
	return lifeGoalAlignmentJSON.filter((prod) => prod.sku === sku)[0];
};

//for now - the product scanned products meets minimal or zero of the goals.
export const getResultsForSKU = (sku: any, lifeGoals: LifeGoals) => {
	let findOffsetGoals: LifeGoals = {
		health: null,
		wellbeing: null,
		affordability: null,
		sustainability: null,
		community: null,
	};
	let alternateProductGoals: LifeGoals = {
		health: null,
		wellbeing: null,
		affordability: null,
		sustainability: null,
		community: null,
	};
	let productInfo = getProductInfoForSKU(sku);

	//identify if product is meeting certain life goals
	if (lifeGoals.health) {
		if (productInfo.health) {
			const diff = lifeGoals.health - productInfo.health;

			if (diff) {
				findOffsetGoals["health"] = diff;
				alternateProductGoals["health"] = diff;
			}
		} else {
			findOffsetGoals["health"] = lifeGoals.health;
			alternateProductGoals["health"] = lifeGoals.health;
		}
	}
	if (lifeGoals.wellbeing) {
		if (productInfo.wellbeing) {
			const diff = lifeGoals.wellbeing - productInfo.wellbeing;

			if (diff) {
				findOffsetGoals["wellbeing"] = diff;
				alternateProductGoals["wellbeing"] = diff;
			}
		} else {
			findOffsetGoals["wellbeing"] = lifeGoals.wellbeing;
			alternateProductGoals["wellbeing"] = lifeGoals.health;
		}
	}
	if (lifeGoals.sustainability) {
		if (productInfo.sustainability) {
			const diff = lifeGoals.sustainability - productInfo.sustainability;

			if (diff) {
				findOffsetGoals["sustainability"] = diff;
				alternateProductGoals["sustainability"] = diff;
			}
		} else {
			findOffsetGoals["sustainability"] = lifeGoals.sustainability;
			alternateProductGoals["sustainability"] = lifeGoals.sustainability;
		}
	}
	if (lifeGoals.community) {
		if (productInfo.community) {
			const diff = lifeGoals.community - productInfo.community;

			if (diff) {
				findOffsetGoals["community"] = diff;
				alternateProductGoals["community"] = diff;
			}
		} else {
			findOffsetGoals["community"] = lifeGoals.community;
			alternateProductGoals["community"] = lifeGoals.community;
		}
	}
	if (lifeGoals.affordability) {
		if (productInfo.affordability) {
			const diff = lifeGoals.affordability - productInfo.affordability;

			if (diff) {
				findOffsetGoals["affordability"] = diff;
				alternateProductGoals["affordability"] = diff;
			}
		} else {
			findOffsetGoals["affordability"] = lifeGoals.affordability;
			alternateProductGoals["affordability"] = lifeGoals.affordability;
		}
	}

	return { findOffsetGoals, alternateProductGoals };
};

export const getAlternateProductForSKU = (sku: any, lifeGoals: LifeGoals) => {
	let alternateProducts: any[] = [];
	let { alternateProductGoals }: any = getResultsForSKU(sku, lifeGoals);

	let {
		healthLifeGoalsProducts,
		wellbeingLifeGoalsProducts,
		sustainabilityLifeGoalsProducts,
		communityLifeGoalsProducts,
		affordabilityLifeGoalsProducts,
	}: any = sortProductsOnGoals(lifeGoals);

	var list = alternateProductGoals;
	let keysSorted = Object.keys(list).sort(function (a, b) {
		return list[a] - list[b];
	});
	console.log(keysSorted);

	keysSorted.map((key: string) => {
		if (alternateProductGoals[key] && key === "health") {
			alternateProducts.push(healthLifeGoalsProducts[0]);
		}
		if (alternateProductGoals[key] && key === "wellbeing") {
			alternateProducts.push(wellbeingLifeGoalsProducts[0]);
		}
		if (alternateProductGoals[key] && key === "sustainability") {
			alternateProducts.push(sustainabilityLifeGoalsProducts[0]);
		}
		if (alternateProductGoals[key] && key === "community") {
			alternateProducts.push(communityLifeGoalsProducts[0]);
		}
		if (alternateProductGoals[key] && key === "affordability") {
			alternateProducts.push(affordabilityLifeGoalsProducts[0]);
		}
	});

	return { alternateProductGoals };
};

export const getOffsetsForSKU = (sku: any, lifeGoals: LifeGoals) => {
	let offsetGoals: any[] = [];
	let { findOffsetGoals }: any = getResultsForSKU(sku, lifeGoals);

	let {
		healthLifeGoalsProducts,
		wellbeingLifeGoalsProducts,
		sustainabilityLifeGoalsProducts,
		communityLifeGoalsProducts,
		affordabilityLifeGoalsProducts,
	}: any = sortProductsOnGoals(lifeGoals);

	var list = findOffsetGoals;
	let keysSorted = Object.keys(list).sort(function (a, b) {
		return list[a] - list[b];
	});
	console.log(keysSorted);

	keysSorted.map((key) => {
		if (findOffsetGoals[key] && key === "health") {
			offsetGoals.push(healthLifeGoalsProducts[0]);
		}
		if (findOffsetGoals[key] && key === "wellbeing") {
			offsetGoals.push(wellbeingLifeGoalsProducts[0]);
		}
		if (findOffsetGoals[key] && key === "sustainability") {
			offsetGoals.push(sustainabilityLifeGoalsProducts[0]);
		}
		if (findOffsetGoals[key] && key === "community") {
			offsetGoals.push(communityLifeGoalsProducts[0]);
		}
		if (findOffsetGoals[key] && key === "affordability") {
			offsetGoals.push(affordabilityLifeGoalsProducts[0]);
		}
	});

	return { offsetGoals };
};
