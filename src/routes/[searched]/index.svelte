<script>
    import RecipeCard from '../../lib/RecipeCard.svelte';
    import SearchHeader from '../../lib/SearchHeader.svelte';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { sortBy } from '../../stores';
    import { getData } from '../../lib/searchAPI';
    import { scrape } from '../../lib/scrapingAPI';
    import {getFoodData, getCalories} from '../../lib/nutritionAPI'
    import {getCarbonFootprint} from '../../lib/carbonReader'
    import {getSum} from '../../lib/water'
  
 

    let items = [];
    let filteredItems = [];
    let scrapeResult = '';
    //$: console.log(items)

    // onMount(async () => {
    //     let searchText = $page.url.pathname.substring(1)
    //     items = await getData(searchText);
    // })
    async function loadItems() {
        items = []
        filteredItems = []
        items = await getData($page.url.pathname.substring(1));
        // console.log(items)

        for (let item of items) {
            //scrape recipe
            scrapeResult = await scrape(item.link);
            if (scrapeResult.recipe !== 'no recipe found on page') {
                scrapeResult.link = item.link
                filteredItems = [...filteredItems, scrapeResult];
                // console.log(scrapeResult.recipe);
                addStatistics(scrapeResult)
            }
        }
        console.log('filtered items', filteredItems);

        //filteredItems = await addStatistics(filteredItems);
        //addStatistics(filteredItems);
    }

    //const addStatistics = async (filteredItems) => {
    const addStatistics = async (item) => {
        //for (let item of filteredItems) {

            item.hostname = (new URL(await item.link)).hostname;

            //console.log(item.recipe.name);
            const ingredients = await getFoodData(item.recipe.ingredients)
            console.log(ingredients)
            let nServings = parseInt(item.recipe.servings);
            
            Promise.allSettled([getCalories(ingredients, nServings), getCarbonFootprint(ingredients, nServings), getSum(ingredients, nServings)])
            .then(results => {

                
                console.log(`CALORIES: ${results[0].value}`)
                console.log(`CARBON: ${results[1].value}`)
                console.log(`WATER: ${results[2].value}`)
                item.recipe.calories = results[0].value
                item.recipe.carbon = results[1].value
                item.recipe.water = results[2].value
                
                filteredItems = [...filteredItems]
            })
                


            // item.recipe.calories = await getCalories(ingredients, nServings);
            // item.recipe.carbon = await getCarbonFootprint(ingredients, nServings);
            // item.recipe.water = await getSum(ingredients, nServings);
            
            //console.log(`RECIPE: ${item.recipe}`);
        //}
        //return filteredItems
    };

    //on change of pathname, reload items
    $: $page.url.pathname, loadItems()

    // const data = [
    //     {
    //         name: "Singapore chilli crab with brussel sprouts and mashed potatoes",
    //         carbon: 0.5,
    //         water: 500,
    //         calories: 455
    //     },
    //     {
    //         name: "Best chili crab recipe",
    //         carbon: 0.4,
    //         water: 650,
    //         calories: 460
    //     },
    //     {
    //         name: "Extra spicy chilli crab",
    //         carbon: 0.55,
    //         water: 450,
    //         calories: 380
    //     },
    //     {
    //         name: "Quick n easy chilli crab",
    //         carbon: 0.7,
    //         water: 700,
    //         calories: 620
    //     },

    // ]

    

    
    $: $sortBy, sortData();

    function sortData() {
        filteredItems = filteredItems.sort((a, b) => {
            // console.log(`A: ${a}`)
            console.log($sortBy);
            if ($sortBy == 'Calories') {
                return a.recipe.calories - b.recipe.calories;
            } else if ($sortBy == 'Carbon') {
                return a.recipe.carbon - b.recipe.carbon;
            } else if ($sortBy == 'Water') {
                return a.recipe.water - b.recipe.water;
            }
        });
        console.log(filteredItems);
    }
    
    </script>

    <SearchHeader />

    <div id="results">
        {#each filteredItems as item, i}
        <div class="row">
            <p>{i + 1}</p>
            <RecipeCard
                title={item.recipe.name}
                calories={item.recipe.calories}
                carbon={item.recipe.carbon}
                water={item.recipe.water}
                link={item.link}
                hostname={item.hostname}
            />
        </div>
        {/each}


    </div>

    <style>
        #results {
            display: flex;
            flex-direction: column;
            margin-left: 5rem;
        }

        .row {
            display: flex;
            align-items: center;
            margin-bottom: 2rem;
        }

        p {
            width: 5px;
            margin-right: 2rem;
            padding: 0;
            font-family: 'Lexend Deca', sans-serif;
        }


    </style>
