<script>
  /* JSON for each Recipe */
  export let title="", calories=0, water=0, carbon=0, link='', hostname='';
</script>

<div class="recipeWrapper">
  <a href={link}>
    <div class="recipeCard">
      <h1 class="recipeTitle">{title} <p class="hostname">{hostname}</p></h1>
      <ul>
        <li class="calories">
          <div class="stat">
            <img src="./images/fire.svg" alt=""><p>{calories}kcal</p>
          </div>
        </li>
    
        <li class="water">
          <div class="stat">
            <img src="./images/water.svg" alt=""><p>{water}L</p>
          </div>
        </li>
        
        <li class="carbon">
          <div class="stat">
            <img src="./images/carbon.svg" alt=""><p>{carbon}kg</p>
          </div>
        </li>
    
      </ul>
    </div>
  </a>
</div>




<style>
  .recipeWrapper {
    height: 100px;
    width: 60vw;
    max-width: 800px;
  }

  .recipeCard {
    height: 100px;
    width: 60vw;
    max-width: 800px;

    background-color: #f6f6e9;
    border: 1px solid #595959;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 4px 2px -2px gray;
    margin-right: auto;
  }

  .recipeCard:hover {
    border: 1.5px solid #356144;
  }


  .recipeTitle {
    color: #356144;
    padding-left: 1em;
    font-size: 20px;
    font-family: 'Lexend Deca', sans-serif;
    align-self: center;
  }

  .hostname {
    color: #356144;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
  }



  ul {
    font-family: 'Lexend Deca', sans-serif;
    margin: 0;
    padding: 0;

    margin-right: 2rem;
    list-style-type: none;

    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  li {
    float: left;
  }

  .stat {
    display: flex;
    align-items: center;

    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
  }

  p {
    margin: 0;
    margin-left: 0.5rem;
  }

  img {
      height: 25px;
      width: 22px;
      padding-right: 2px;

  }

  .calories {
      color: #DF6868;
  }

  .water {
      color: #6DBFFA;
  }

  .carbon {
      color: #595959;
  }

  
  /* li:not(:last-child) { 
   padding-bottom: 5px;  
    } */

  a:hover {
    text-decoration: none;
  }

  a {
    text-decoration: none;
    display: block;
  }

  @media screen and (max-width: 650px) {
    .recipeCard {
      flex-direction: column;
      height: 300px;
      width: 65vw;
      justify-content: space-around;
      align-items: center;
      margin: 0;
    }

    .recipeWrapper {
      height: 300px;
      width: 65vw;
    }

    .recipeTitle {
      padding-left: 0;
      margin: 0.5rem;
      text-align: center;
    }

    ul {
      margin: 0;
    }
  }
</style>
