
import { getFoodData } from './nutritionAPI.js';

//let query = ['1kg steak'];

let waterFootprint = {
	'Fruits and Fruit Juices': 962,
	'Legumes and Legume Products': 4055,
	'Beef Products': 15415,
  'Vegetables and Vegetable Products': 322,
	'Dairy and Egg Products': 3226, // weighted avg of milk, eggs, and butter
	'Poultry Products': 4325,
	'Finfish and Shellfish Products': 2325, // weighted avg of farmed and wild-caught
	'Cereal Grains and Pasta': 1644,
	'Sausages and Luncheon Meats': 5988,
	'Pork Products': 5988,
	'Baked Products': 1608,
	'Spices and Herbs': 7048,
	'Nut and Seed Products': 9063,
	'Fats and Oils': 2364,
	'Restaurant Foods': 0, //no data
	'Soups, Sauces, and Gravies': 62,
	Sweets: 183, // 87% of sugar-cane is turned into sugar
	Beverages: 35
};

const getIngredientSizes = (ingredients) => {
	
	let ingredient_sizes = {};

	for (const i of ingredients) {
    //console.log(`INGREDIENT: ${i}`)
		ingredient_sizes[i['name']] = i['serving_size_g'];
	}


	return ingredient_sizes;
};

export const getSum = async (ingredients, n_servings) => {
  //console.log(`INGREDIENTS: ${ingredients}`)

  const ingredient_sizes = getIngredientSizes(ingredients)
  
	let sum = 0;
	for (const i of Object.keys(ingredient_sizes)) {
  
    //console.log(`name: ${i}`)
		let params = {
			api_key: 'mR6BQGcjgDJLgxQS2uWvQnHhmfPPg9upBIJbB7fP',
			query: i,
			dataType: ['Foundation'],
			pagesize: 1
		};
		
    let result = await getFoodGroup(params);
    // console.log(result)

    //foods array is empty if no match found
    if (result.totalHits > 0) {
      
      const foodCategory = result.foods[0].foodCategory
      //console.log(foodCategory)

      if (foodCategory in waterFootprint) {
        //console.log(`${waterFootprint[result.foods[0].foodCategory]}`)

        let amount_g = ingredient_sizes[i];
        let litres = (amount_g / 1000) * waterFootprint[result.foods[0].foodCategory];
        //console.log(`LITRES: ${litres}`)
		    sum += litres;
      }
      else {
        console.log(`not available: ${foodCategory}`)
      }
		  
    }
		
	}
  //console.log(sum)
	return Math.round(sum / n_servings);
};

const getFoodGroup = async (params) => {
	const apiURL = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(
		params.api_key
	)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(
		params.dataType
	)}&pagesize=${encodeURIComponent(params.pagesize)}`;
	const response = await fetch(apiURL);
	const jsonResponse = await response.json();
	return jsonResponse;
};

// const sum = await getSum(query);
// console.log(sum);