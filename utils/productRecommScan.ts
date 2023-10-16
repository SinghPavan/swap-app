import fs from "fs";
// import productsData from "./data/offsetActivityLifeGoalAlignmentScore.json";

const userLifeGoals = {
  health: 5,
  wellbeing: 5,
  sustainability: 3,
  community: 2,
  affordability: 1,
};

const sku = "3274664142070";

const productResultScan = async (userLifeGoals: object, sku: string) => {
  const response = fs.readFileSync("../data/productLifeGoalAlignmentScore.json");
  const products = JSON.parse(response.toString());
  const scanResult = products.filter((product: any) => product.sku == sku);
  

  // const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // const products = await response.json();
  // const scanResult = products.filter((product) => product.sku == sku)
  // console.log(products);
  console.log(scanResult);
  const productDetailPageResult = await calculateOffsetActivity(userLifeGoals, scanResult);
  console.log(JSON.parse(JSON.stringify(productDetailPageResult)));
  fs.writeFileSync("product.json", JSON.stringify(productDetailPageResult))
  return JSON.stringify(productDetailPageResult);
  
};

const calculateOffsetActivity = async (userLifeGoals: any, scanResult: any) => {
  let userOffsetActivities = [];
  const [userLifeGoalMatch, notMathchedLifeGoalsPoint]: any = await calculateMatchedUserLifeGoals(userLifeGoals, scanResult);

  const response = fs.readFileSync("../data/offsetActivityLifeGoalAlignmentScore.json");
  const offsetAcitivities = JSON.parse(response.toString());
  for (const obj of offsetAcitivities) {
	let isMatch = true;
  
	for (const key in notMathchedLifeGoalsPoint) {
	  if (obj[key] < notMathchedLifeGoalsPoint[key]) {
		isMatch = false;
		break;
	  }
	}
  
	if (isMatch) {
	  userOffsetActivities.push(obj);
	}
  }

  console.log("1", scanResult[0].alternateProduct.product);
  const [alternateProductUserLifeGoalMatch, alternateProductnotMathchedLifeGoalsPoint] = await calculateMatchedUserLifeGoals(userLifeGoals, [scanResult[0].alternateProduct.product]);
  scanResult[0].alternateProduct["userLifeGoalMatch"] = Object.keys(alternateProductUserLifeGoalMatch).length;
  scanResult[0]["userLifeGoalMatch"] =  Object.keys(userLifeGoalMatch).length

  const productDetailPageResult = {
	scanResult,
	userOffsetActivities,
  }

  return productDetailPageResult;

};

const calculateMatchedUserLifeGoals = async (userLifeGoals: any, scanResult: any) => {
let userLifeGoalMatch: any = {};
// console.log("Hi", scanResult)

  const diffHealthPoints: any = {
    health: userLifeGoals.health - scanResult[0].health,
    wellbeing: userLifeGoals.wellbeing - scanResult[0].wellbeing,
    sustainability: userLifeGoals.sustainability - scanResult[0].sustainability,
    community: userLifeGoals.community - scanResult[0].community,
    affordability: userLifeGoals.affordability - scanResult[0].affordability,
  };

  let notMathchedLifeGoalsPoint: any = {};

  for (const key in diffHealthPoints) {
    if (diffHealthPoints[key] > 0) {
      notMathchedLifeGoalsPoint[key] = diffHealthPoints[key];
    }else {
	   userLifeGoalMatch[key] = diffHealthPoints[key];
	}
  }
  return [userLifeGoalMatch, notMathchedLifeGoalsPoint];
}

export {productResultScan}

productResultScan(userLifeGoals, sku);
