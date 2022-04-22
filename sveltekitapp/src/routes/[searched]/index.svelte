<script>
    import RecipeCard from "../../lib/RecipeCard.svelte";
    import SearchHeader from "../../lib/SearchHeader.svelte";
    import {onMount} from 'svelte';
    import {page} from '$app/stores';
    import { sortBy } from '../../stores';
    // import { getData } from '../../lib/searchAPI';
    // import { scrape } from '../../lib/scrapingAPI';
    // import {getCarbonFootprint} from '../../lib/carbonReader'
 

    let items = [];
    $: console.log(items)
    onMount(async () => {
        let searchText = $page.url.pathname.substring(1)
        items = await getData(searchText);

    })
    
    const data = [
        {
            name: "Singapore chilli crab with brussel sprouts and mashed potatoes",
            carbon: 0.5, 
            water: 500,
            calories: 455
        },
        {
            name: "Best chili crab recipe",
            carbon: 0.4,
            water: 650,
            calories: 460
        },
        {
            name: "Extra spicy chilli crab",
            carbon: 0.55, 
            water: 450,
            calories: 380
        },
        {
            name: "Quick n easy chilli crab",
            carbon: 0.7, 
            water: 700,
            calories: 620
        },
    
    ]
    
    /*
    $: $sortBy, sortData();
    
    function sortData() {
        data.sort((a, b))
    }
    */
    </script>
    
    <SearchHeader />
    
    <div id="results">
        {#each items as recipe, i}
        <div class="row">
            <p>{i+1}</p>
            <RecipeCard title={recipe.title}/>
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
    