export const scrape = async(link) => {
  try {
    if (link){
      const apiUrl = `https://scraper-api-codebrew-2.herokuapp.com/link`
      const body = {"link": link};

      const response = await fetch(apiUrl, {
      	method: 'post',
      	body: JSON.stringify(body),
      	headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}
      });
      const jsonResponse = await response.json()
      // console.log(jsonResponse.items)
      // for (var i = 0; i < jsonResponse.items.length; i++) {
      //   var item = jsonResponse.items[i];
      //   console.log(item)
      // }
      return jsonResponse;
    }

  } catch(error) {
    console.log("error from fetching scrape data", error)
  }
}
