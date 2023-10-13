import offsetActivitiesJSON from "../data/offsetActivityLifeGoalAlignmentScore.json";
import lifeGoalAlignmentJSON from "../data/productLifeGoalAlignmentScore.json";
import { LifeGoals } from "./types";

export const sortProductsOnGoals = (userLifeGoals: LifeGoals) => {
	let healthLifeGoalsProducts,
		wellbeingLifeGoalsProducts,
		sustainabilityLifeGoalsProducts,
		communityLifeGoalsProducts,
		affordabilityLifeGoalsProducts;

	if (userLifeGoals.health) {
		healthLifeGoalsProducts = lifeGoalAlignmentJSON;
		healthLifeGoalsProducts &&
			healthLifeGoalsProducts?.sort((a, b) => a.health - b.health);
	}
	if (userLifeGoals.wellbeing) {
		wellbeingLifeGoalsProducts = lifeGoalAlignmentJSON;
		wellbeingLifeGoalsProducts &&
			wellbeingLifeGoalsProducts?.sort((a, b) => a.wellbeing - b.wellbeing);
	}

	if (userLifeGoals.sustainability) {
		sustainabilityLifeGoalsProducts = lifeGoalAlignmentJSON;
		sustainabilityLifeGoalsProducts &&
			sustainabilityLifeGoalsProducts?.sort(
				(a, b) => a.sustainability - b.sustainability
			);
	}
	if (userLifeGoals.community) {
		communityLifeGoalsProducts = lifeGoalAlignmentJSON;
		communityLifeGoalsProducts &&
			communityLifeGoalsProducts?.sort((a, b) => a.community - b.community);
	}
	if (userLifeGoals.affordability) {
		affordabilityLifeGoalsProducts = lifeGoalAlignmentJSON;
		affordabilityLifeGoalsProducts &&
			affordabilityLifeGoalsProducts?.sort(
				(a, b) => a.affordability - b.affordability
			);
	}

	return {
		healthLifeGoalsProducts,
		wellbeingLifeGoalsProducts,
		sustainabilityLifeGoalsProducts,
		communityLifeGoalsProducts,
		affordabilityLifeGoalsProducts,
	};
};

export const sortOffsetOnGoals = (userLifeGoals: LifeGoals) => {
	let healthLifeGoalOffsets,
		wellbeingLifeGoalsOffsets,
		sustainabilityLifeGoalsOffsets,
		communityLifeGoalsOffsets,
		affordabilityLifeGoalsOffsets;

	if (userLifeGoals.health) {
		healthLifeGoalOffsets = offsetActivitiesJSON;
		healthLifeGoalOffsets &&
			healthLifeGoalOffsets?.sort((a, b) => a.health - b.health);
	}
	if (userLifeGoals.wellbeing) {
		wellbeingLifeGoalsOffsets = offsetActivitiesJSON;
		wellbeingLifeGoalsOffsets &&
			wellbeingLifeGoalsOffsets?.sort((a, b) => a.wellbeing - b.wellbeing);
	}

	if (userLifeGoals.sustainability) {
		sustainabilityLifeGoalsOffsets = offsetActivitiesJSON;
		sustainabilityLifeGoalsOffsets &&
			sustainabilityLifeGoalsOffsets?.sort(
				(a, b) => a.sustainability - b.sustainability
			);
	}
	if (userLifeGoals.community) {
		communityLifeGoalsOffsets = offsetActivitiesJSON;
		communityLifeGoalsOffsets &&
			communityLifeGoalsOffsets?.sort((a, b) => a.community - b.community);
	}
	if (userLifeGoals.affordability) {
		affordabilityLifeGoalsOffsets = offsetActivitiesJSON;
		affordabilityLifeGoalsOffsets &&
			affordabilityLifeGoalsOffsets?.sort(
				(a, b) => a.affordability - b.affordability
			);
	}

	return {
		healthLifeGoalOffsets,
		wellbeingLifeGoalsOffsets,
		sustainabilityLifeGoalsOffsets,
		communityLifeGoalsOffsets,
		affordabilityLifeGoalsOffsets,
	};
};
