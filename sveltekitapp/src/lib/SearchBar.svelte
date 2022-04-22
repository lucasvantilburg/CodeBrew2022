<script>
    import {goto} from '$app/navigation';
    import {page} from '$app/stores';
    
    //let searchText = $page.params.searched ? $page.params.searched : ""
    let searchText = decodeURI($page.url.pathname.substring(1))

    function search() {
        //update url
        goto(`${searchText}`)
        
    };

    export let height = "60px"
    export let width = "60%"



</script>

<form on:submit|preventDefault={search} id="search" style='height:{height}; width:{width}'>
    
    <input type="text" name="submittedText" id="searchBar" bind:value={searchText} placeholder="What do you want to eat?">
    <button type="submit"><img src="./images/search-button.svg" alt=""></button>
    
</form>

    

<style>
    

    #search {
        background-color: #F6F6E9;
        /* height: 88px;
        width: 754px; */
        border: 1.5px solid #65865D;
        border-radius: 50px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-left: 1em;
        margin-right: 1em;
    }

    input[type="text"] {
        position: relative;
        height: 100%;
        width: 80%;

        font-family: 'Lexend Deca';
        font: 300;
        color: #7D9B76;
        font-size: 22px;
        font-weight: 300;

        margin-left: 5%;
        margin-top: 5px;
        

        background: transparent;
        border: 0;

        /* padding-left: 2rem;
        padding-right: 2rem; */
    }

    input:focus {
        outline: none;
    }

    button {

        background: none;
        border: 0;
        margin-right: 20px;

    }

    button:hover {
        cursor: pointer;
    }

    img{
        height: 35px;
        width: 35px;
    }
    
    button:active img {
        filter: invert(98%) sepia(12%) saturate(52%) hue-rotate(315deg) brightness(112%) contrast(100%);
    }


</style>