<script lang="ts">
  function getImageSources() {
    return {
      "1": {
        src: "1",
        title: "Easy Hosting",
        text: "Host a seed node on your machine and serve your repositories to your peers natively.",
      },
      "2": {
        src: "2",
        title: "Private by Default",
        text: "Only you and your team have access to the code and all the metadata.",
      },
      "3": {
        src: "3",
        title: "Instant Infrastructure",
        text: "Get end-to-end encrypted code collaboration out of the box.  No additional setup required.",
      },
      "4": {
        src: "4",
        title: "Platform Independent",
        text: "Stick to your workflow and run Radicle against your repositories on every platform.",
      },
    };
  }

  const sections = getImageSources();
  let sectionsCopy = sections;

  function parseContent(content) {
    let modifiedContent = content.split("<br />");
    return modifiedContent;
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 1rem;
  }

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
  }

  .text {
    color: var(--color-foreground-muted);
    font-size: 1.125rem;
    line-height: 1.5;
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
  }

  .about-blocks {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin-top: 2rem;
  }

  .about-block {
    flex: 1;
    min-width: 300px;
    max-width: 400px;
    padding: 2rem;
    border-radius: 0.5rem;
    transition: transform 0.2s ease;
  }

  .block-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  .block-text {
    font-size: 1rem;
    color: var(--color-foreground-muted);
    margin-top: 0.5rem;
  }

  .svg-element {
    width: 3rem;
    height: 3rem;
    fill: currentColor;
    filter: var(--theme-filter);
  }

  /* Light theme SVG colors */
  :global([data-theme="light"]) .svg-element {
    color: var(--color-foreground-contrast);
  }

  /* Dark theme SVG colors */
  :global([data-theme="dark"]) .svg-element {
    color: var(--color-foreground-contrast);
  }

  .blocks-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 719.98px) {
    .container {
      padding: 4rem 1rem;
    }

    .blocks-container {
      width: 100%;
    }

    .about-block {
      min-width: 250px;
    }

    .title {
      font-size: 2rem;
    }

    .text {
      font-size: 1rem;
    }
  }

  @media (min-width: 720px) and (max-width: 1023.98px) {
    .container {
      padding: 6rem 2rem;
    }

    .blocks-container {
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
    .container {
      padding: 8rem 4rem;
    }
  }
</style>

<div class="container">
  <div class="title">Features built for modern developers</div>
  <div class="text">Experience powerful Git features and modern code collaboration — all on a peer-to-peer network.</div>
  <div class="about-blocks">
    {#each Object.entries(sections) as [key, section]}
      <div class="about-block">
        <img src={`/features/${section.src}.svg`} alt={section.title} />
        <div class="block-title">{section.title}</div>
        <div class="block-text">{section.text}</div>
      </div>
    {/each}
  </div>
</div>