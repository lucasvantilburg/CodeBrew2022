//import fetch from 'node-fetch';

let query = ["3 bananas", "2 tomatoes, 1 banana"];

export const getFoodData = async (foodList) => {
    query = foodList.join(' ');
    
    try {
        if (query) {
            const key = 'o/JgH1wLuYgeBzz6HKc4zg==e9pJXZ3HbBhDiOWx';
            const apiURL = 'https://api.calorieninjas.com/v1/nutrition?query='+query

            const response = await fetch(apiURL, {
            headers: {
                'X-Api-Key': 'o/JgH1wLuYgeBzz6HKc4zg==e9pJXZ3HbBhDiOWx'
            }
            })
            const jsonResponse = await response.json()
            // console.log(jsonResponse)
            
            return jsonResponse['items']
        }
    }
    catch (error) {
        console.log("error fetching from calorie api", error)
    }

    return []
}

export const getCalories = async (query) => {
    const ingredients = await getFoodData(query)

    console.log(ingredients)
    let calories = 0;

    for (const ing of ingredients) {
        // console.log(ing.name)
        // console.log(ing.calories)
        calories += ing.calories
    }
    
    return calories;
}



//console.log(await getCalories(query));

// module.exports = {getFoodData, getCalories}