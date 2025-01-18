<script lang="ts">
	let { children } = $props();
    import { base } from '$app/paths';
</script>


<header>
	<div id="menu-bar">
    <nav>
	    <a href="{base}/" class="menu-link" title="home">
                <img src="./logo.png" id="img-logo" alt="sakura">
        </a>
	    <a href="{base}/about" class="menu-link" title="settings">
                <img src="./gear-solid.png" id="settings-logo" alt="settings">
        </a>
    </nav>
    </div>
</header>

     





{@render children()}
