

<script lang="ts" module>

    let fontSize = $state(20);

    function changeSize(){
        fontSize+=1;
    }

   export function newSize(size:number){

        return size = fontSize;
    }

</script>

<h1>Settings</h1>

<main class="main-page">
<button onclick={changeSize}>Font Size</button>


</main>

<footer>
 <p>&copy Andrey Marins</p>
</footer>
