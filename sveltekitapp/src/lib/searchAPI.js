  //
  // function hndlr(response) {
  //   for (var i = 0; i < response.items.length; i++) {
  //     var item = response.items[i];
  //     console.log(item)
  //
  //    // document.getElementById("content").innerHTML += "<br>" + item.htmlTitle;
  //   }
  // }
  // let my_awesome_script = document.createElement('script');
  // let text = 'beef' // get this from the frontend
  // let query = text.concat(" recipe");
  // // console.log(query)
  // // my_awesome_script.setAttribute('src',`https://www.googleapis.com/customsearch/v1?key=AIzaSyCEnE6JvfcVhDmIlXiSoN4wXqe6xvvcBS8&cx=67e8de86c001949d6&q=${query}`.concat(`&callback=hndlr`))
  // //
  // // document.head.appendChild(my_awesome_script);
  // const key = 'AIzaSyAXTal67RUAk1IyyPX6tO6Mms9px23yEPE'
  // const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=67e8de86c001949d6&q=${query}`

  export const getData = async(text) => {
    try {
      if (text){
        let query = text.concat(" recipe");

        //const key = 'AIzaSyAXTal67RUAk1IyyPX6tO6Mms9px23yEPE'
        const key = 'AIzaSyAPREYSKMGVZ8ZlwqWCGK23CSBzP1gjAns'
        const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=0ec01bd4fbc39bc4f&q=${query}`

        const response = await fetch(apiUrl)
        const jsonResponse = await response.json()
        // console.log(jsonResponse.items)
        // for (var i = 0; i < jsonResponse.items.length; i++) {
        //   var item = jsonResponse.items[i];
        //   console.log(item)
        // }
        return jsonResponse.items;
      }

    } catch(error) {
      console.log("error from fetching API data", error)
    }
  }
