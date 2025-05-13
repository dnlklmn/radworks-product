<script lang="ts">
  import svgOne from "../assets/about-radicle/1.svg?raw";
  import svgTwo from "../assets/about-radicle/2.svg?raw";
  import svgThree from "../assets/about-radicle/3.svg?raw";
  import svgFour from "../assets/about-radicle/4.svg?raw";

  let features = [
    {
      title: "Install the Radicle Desktop App",
      description:
        "Install the Radicle Desktop App to connect devices directly in a global peer-to-peer network — no central servers, no single point of failure.<br/>You host and sync code with others just by running the app.",
      svgId: "svg1",
    },
    {
      title: "Create your identity",
      description:
        "Radicle stores issues and patches inside Git, making them portable, versioned, and fully offline-friendly.<br/>Social collaboration is now as decentralized as your code.",
      svgId: "svg2",
    },
    {
      title: "Install and start your node",
      description:
        "Your entire repository — code, issues, patches — lives on your machine, always available.<br/>Work offline, sync when you're online.",
      svgId: "svg3",
    },
    {
      title: "Fetch from or push to the network",
      description:
        "Once connected to the network, share your contributions or access the work of others by fetching from or pushing to the network. Your code moves directly between peers without relying on central servers.",
      svgId: "svg4",
    },
  ] as const;

  let selectedFeatureIndex = $state(0);

  function selectFeature(index: number) {
    selectedFeatureIndex = index;
  }
</script>

<style>
  .container {
    width: 100%;
    display: flex;
    background: var(--color-background-float);
    color: var(--color-foreground-contrast);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
  }

  .widget-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 960px;
    padding: 0 2rem;
    height: 500px;
  }

  .title-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  @media (min-width: 1011px) {
    .widget-container {
      flex-direction: row;
      align-items: center;
    }
  }

  .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    align-self: center;
  }

  .image-container :global(svg) {
    width: 100%;
    height: 100%;
    fill: currentColor;
    filter: var(--theme-filter);
  }

  .blocks-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: -1px;
    margin-top: 2rem;
    align-self: center;
  }

  .feature-block {
    padding: 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: inset 0 0 0 2px var(--color-border-default);
  }

  .feature-block.active {
    box-shadow: inset 0 0 0 2px var(--color-fill-secondary);
  }

  .feature-title {
    font-weight: 600;
  }

  .feature-description {
    font-size: 0.9rem;
    color: var(--color-foreground-dim);
    margin-top: 0.5rem;
  }

  @media (min-width: 719.98px) {
    .container {
      padding: 2rem;
    }
  }
</style>

<div class="container">
  <div class="title-block">
    <span class="h2">Getting started</span>
    <span class="subtitle">Get on the network in 4 easy steps.</span>
  </div>
  <div class="widget-container">
    <div class="image-container">
      {#if features[selectedFeatureIndex].svgId === "svg1"}
        {@html svgOne}
      {:else if features[selectedFeatureIndex].svgId === "svg2"}
        {@html svgTwo}
      {:else if features[selectedFeatureIndex].svgId === "svg3"}
        {@html svgThree}
      {:else}
        {@html svgFour}
      {/if}
    </div>
    <div class="blocks-container">
      {#each features as feature, index}
        <div
          class="feature-block {selectedFeatureIndex === index ? 'active' : ''}"
          on:mouseover={() => selectFeature(index)}>
          <div class="feature-title">{feature.title}</div>
          {#if selectedFeatureIndex === index}
            <div class="feature-description">{@html feature.description}</div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
