## Inspiration
It is a fact that the foods we love are killing the planet. Despite being aware of the negative impacts animal products have on the environment, we remain inflexible when it comes to our lifestyle. Many people consider turning to a plant-based diet, but change requires significant effort. Where does that leave our planet in the interim?

Our idea came about because many of our group members have thought about adopting a plant-based diet to minimise their environmental impact, but were unable to follow through on such a large lifestyle change. Unsure on how else to help, we continue eating the same foods as always, resigned to the negative consequences of our actions. We felt there had to be a way to meet in the middle.

## What it does
Planet-based is a planet-conscious recipe search engine designed to help you make healthier and more sustainable food choices. Your search will return recipe options, along with their carbon footprint and calorie content and related sorting functionality, allowing you to make an informed decision on your dinner while keeping your own health (and that of the planet) at the front of your mind.

## How we built it
We made our app prototype using Figma, and the app was initialised with the SvelteKit Framework, and JavaScript as our backend. We used Google’s custom search API, 'recipe-scrape', as well as 'puppeteer' for searching and scraping functionalities. To obtain our data, we used APIs from CalorieNinjas and FoodData Central. Finally, we deployed our application using the Heroku Cloud Application Platform.

## Challenges we ran into
- Mapping individual ingredients to its respective nutritional, carbon, and water footprint information. 
- Our Svelte app was bundled with a module called rollup, which caused some dependency issues with some of the web scraping packages that we used. To work around this we deployed our scraping functionalities as a separate express app and made API calls to it from planet-based.

## Accomplishments that we're proud of
- A clean and satisfying UI with (almost) responsive pages!
- Connecting multiple different APIs to collate our data.

## What we learned
- How to create hi-fi prototypes using Figma
- Using Svelte & SvelteKit framework for the first time
- Using Asynchronous functions in JavaScript
- Red Bull gives you wings!!

## What's next for planet-based
- Include water footprint as an additional point of information
- Increase the search domain to include a larger range of recipe websites
- Recipe formatting for a seamless user experience
- Log in functionality, allowing users to save their recipes
- Track impact by seeing the average carbon impact and calorie content of saved recipes
- Clear comparison metrics so users are able to understand how their choices measure up (eg. your meal is equivalent to emissions produced driving a Toyota Corolla for 23km)

## Prototype

### Home Page Prototype

![Home Page Prototype - planet-based](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/914/057/datas/original.png)

### Results Page Prototype
![Results Page Prototype - planet-based](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/914/059/datas/original.png)

### Upcoming Feature Prototype
![Feature Page Prototype - planet-based](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/914/058/datas/original.png)



## References

### Research

References Carbon Footprint Factsheet | Center for Sustainable Systems. (2020). Umich.edu. https://css.umich.edu/factsheets/carbon-footprint-factsheet

Charles, K. (2021, September 13). Food production emissions make up more than a third of global total. New Scientist. https://www.newscientist.com/article/2290068-food-production-emissions-make-up-more-than-a-third-of-global-total/

Jain, A., & Xu, X. (2021, September 14). Food production generates more than a third of manmade greenhouse gas emissions – a new framework tells us how much comes from crops, countries and regions. The Conversation. https://theconversation.com/food-production-generates-more-than-a-third-of-manmade-greenhouse-gas-emissions-a-new-framework-tells-us-how-much-comes-from-crops-countries-and-regions-167623#:~:text=In%20a%20new%20study%2C%20we

Xu, X., Sharma, P., Shu, S., Lin, T.-S., Ciais, P., Tubiello, F. N., Smith, P., Campbell, N., & Jain, A. K. (2021). Global greenhouse gas emissions from animal-based foods are twice those of plant-based foods. Nature Food, 2(9), 724–732. https://doi.org/10.1038/s43016-021-00358-x

### APIS

Food Data Central: https://fdc.nal.usda.gov/api-guide.html

Calorie Ninjas: https://calorieninjas.com/api

### Data

Carbon Footprint: 
- https://github.com/nw-hacks2020/c-o-you/blob/master/carbon_data/c-o-you_foods.csv
- https://link.springer.com/article/10.1007/s11367-019-01597-8#Sec24

Water:
- https://waterfootprint.org/media/downloads/Mekonnen-Hoekstra-2011-WaterFootprintCrops.pdf)
- https://www.healabel.com/water-footprints-of-food-list/

### Other Resources

Recipe Scraper: https://github.com/jadkins89/Recipe-Scraper

