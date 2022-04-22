<script>
    import SearchBar from "../lib/SearchBar.svelte";

</script>

<div id="page">
    <h1 class="title">planet-based</h1>
    <SearchBar height="70px" width="60%"/>
</div>

<style>
    #page {
        position: relative;
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transform: translateY(-50px);
    }

    h1 {
        color: #356144;
        font-size: 60px;
        font-weight: 500;
        text-align: center;
    }


</style>