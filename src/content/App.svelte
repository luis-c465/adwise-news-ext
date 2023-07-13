<script lang="ts">
    import Hidable from '~/components/Hidable.svelte';
    import Loading from '~/components/Loading.svelte';
    import { wait } from "~/util";

  let scraping = false;
  let embeds: string[] | null = null;
  async function scrape() {
    scraping = true;

    const postsElm = document.querySelector(
      ".feed-container-theme > div > div"
    )!
    const postsList = Array.from(postsElm.children);

    // Load all the posts
    let prevNumPosts = 0;
    while(true) {
      window.scrollTo(0, document.body.scrollHeight);
      await wait(2500);

      if (prevNumPosts >= postsElm.children.length) break;
      prevNumPosts = postsElm.children.length;
    }

    embeds = postsList.map(post => {
      const postDiv =post.querySelector<HTMLDivElement>("[data-urn]")
        if (!postDiv) return null;
      const uid = postDiv.dataset.urn

      return `<iframe src="https://www.linkedin.com/embed/feed/update/${uid}" frameborder="0" loading="lazy" title="LinkedIn"></iframe>`;
    }).filter((e) => e !== null) as string[]

    scraping = false;
  };
  console.log("guh")
</script>

<Hidable title="Linkedin posts scrapper">
  <div class="relative flex flex-col gap-4">
    <button
      class="bg-blue-400 hover:bg-blue-600 transition-colors rounded-md p-3 bg-opacity-60 flex items-center justify-center gap-2"
      disabled={scraping}
      on:click={!embeds ? scrape : () => (
          navigator.clipboard.writeText(embeds?.join("\n") ?? "")
      )}>
        {#if !scraping}
          {#if embeds !== null}
            Copy
          {:else}
            Scrape
          {/if}
        {:else}
          <Loading />
        {/if}
      </button
    >
  </div>
</Hidable>
