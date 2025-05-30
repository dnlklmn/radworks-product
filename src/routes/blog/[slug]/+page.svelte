<script lang="ts">
  import { formatDate } from "$lib/utils";
  import { title } from "$lib/config";

  let { data } = $props();
</script>

<style>
  .container {
    max-width: 50rem;
  }
  .markdown :global(code) {
    font-family: var(--font-family-monospace);
    font-size: var(--font-size-small);
  }

  .markdown :global(pre) {
    font-family: var(--font-family-monospace);
    font-size: var(--font-size-small);
    overflow: scroll;
    padding: 1rem;
  }
</style>

<svelte:head>
  <title>{data.meta.title}</title>

  <meta name="description" content={data.meta.description} />

  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta property="og:description" content={data.meta.description} />
  <meta property="og:site_name" content={title} />
  <meta property="og:image" content={data.meta.image} />

  <meta name="twitter:site" content="@YouTwitterHandle" />
  <meta name="twitter:creator" content="@YouTwitterHandle" />
  <meta name="twitter:title" content={data.meta.title} />
  <meta name="twitter:description" content={data.meta.description} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image:src" content={data.meta.image} />
  <meta name="twitter:widgets:new-embed-design" content="on" />

  <meta
    name="theme-color"
    content="#ffffff"
    media="(prefers-color-scheme: light)" />
  <meta
    name="theme-color"
    content="#000000"
    media="(prefers-color-scheme: dark)" />
</svelte:head>

<div class="container">
  <h1 class="">{data.meta.title}</h1>
  <i>
    Published {formatDate(data.meta.date)} by
    <a href={data.meta.authorUrl} target="_blank">{data.meta.author}</a>
  </i>

  <div class="markdown">
    <data.content theme="dark" />
  </div>
</div>
