<script>
    import SearchBar from "./SearchBar.svelte";
    import SortBy from "./SortBy.svelte";

</script>

<div class="container">
    <h1 class="title">planet-based</h1>
    <SearchBar width="50%" height="50px"/>
    <SortBy />
</div>

<style>
    .container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 1em;
        
    }

    .title {
        color: #356144;
        font-size: 42px;
        margin-bottom: 0;
        white-space: nowrap;
    }

    @media screen and (max-width: 650px) {
        .container {
        margin-top: 2em;
        display: flex;  
        flex-direction: column;
        align-items: center;
        }

        .title {
            color: #356144;
            font-size: 42px;
            margin-bottom: 0.5em;
            margin-top: 0.5em;
        }
    }

</style>