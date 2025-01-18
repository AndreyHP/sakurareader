

<script lang="ts">
  import { onMount } from 'svelte';
  import Epub from 'epubjs';

  let book: any;
  let rendition: any;
  let viewer: HTMLDivElement;

  onMount(() => {
    const loadEpub = async () => {
      // Load the EPUB file from the static directory
      book = Epub('./book.epub'); // Use the relative path

      rendition = book.renderTo(viewer, {
        width: '100%',
        height: '100%',
      });

      // Wait for the book to be fully loaded
      await book.loaded;

      // Wait for the navigation to be fully loaded
      await book.loaded.navigation;

      // Access the navigation items
      if (book.navigation && book.navigation.toc && book.navigation.toc.length > 0) {
        // Display the first item in the TOC
        rendition.display(book.navigation.toc[0].href);
      } else {
        console.error("No navigation items found in the EPUB.");
      }

      // Add event listeners for navigation
      const nextButton = document.getElementById('next');
      const prevButton = document.getElementById('prev');

      nextButton?.addEventListener('click', () => {
        rendition.next();
      });

      prevButton?.addEventListener('click', () => {
        rendition.prev();
      });
    };

    // Call the async function
    loadEpub();
  });
</script>

<style>
  #viewer {
    width: 100%;
    height: 70vh;
  }
</style>

<main>

    <div id="viewer" bind:this={viewer}></div>
    <button id="prev">Previous</button>
    <button id="next">Next</button>

</main>










