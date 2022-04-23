<script>
  import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
		Styles
  } from 'sveltestrap';

  import { sortBy } from '../stores'



  function handleClick(s) {
		sortBy.set(s);
	}
/*
  $: if ($sortBy == 'carbon') {
    sortByText = "Carbon footprint"
  }
  else if ($sortBy == 'carbon')*/

</script>

<Styles />
<div class="local">
  <Dropdown>
    <p class="label">Sort by</p>
    <DropdownToggle id="sortby">
      <h1>{ $sortBy }</h1>
      <img src="./images/downArrow.svg" alt="Down Arrow">
    </DropdownToggle>
    <DropdownMenu class="menu">
      <DropdownItem class="selectable" on:click={() => handleClick("Carbon")}>Carbon footprint </DropdownItem>
      <DropdownItem class="selectable" on:click={() => handleClick("Water")}>Water footprint</DropdownItem>
      <DropdownItem class="selectable" on:click={() => handleClick("Calories")}>Calories (low to high)</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</div>

<style>


  .local {
    transform: translateY(-7px);
  }
  .local .label {
    font-family: "Lexend Deca", sans-serif;
    font-size: 15px;
    margin-bottom: 0;
    color: #356144;
  }

  .local :global(#sortby) {
    background-color: #7D9B76;
    width: 15vw;
    height: 50px;
    border-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    margin-top: 0;
  }

  .local :global(h1) {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    padding-top: 8px;
  }

  .local :global(img) {
    height: 15px;
    align-self: center;
  }

  
  .local :global(#sortby):focus {
    box-shadow: none;
  }

  .local :global(.menu) {
    background-color: #7D9B76;
    width: 250px;
    border-style: none;
  }

  .local :global(.selectable) {
    background-color: #7D9B76;
    color: white;
    font-family: 'Lexend Deca', sans-serif;
  }

  .local :global(.selectable):hover {
    color: #356144;
  }

  @media screen and (max-width: 650px) {
    .local :global(#sortby) {
    background-color: #7D9B76;
    width: 200px;
    height: 50px;
    border-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    }

    .local {
    margin: 1em;
    }
  }

</style>