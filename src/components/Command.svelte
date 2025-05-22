<script lang="ts">
  import Clipboard from "./Clipboard.svelte";

  interface Props {
    command: string;
    fullWidth?: boolean;
    flatLeft?: boolean;
  }

  const { command, fullWidth = false, flatLeft = false }: Props = $props();

  let clipboard: Clipboard;

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      clipboard.copy();
      event.preventDefault(); // Prevent default action for space key
    }
  }
</script>

<style>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-bottom: 0.5rem;
    overflow: visible;
  }
  
  .full-width {
    width: 100% !important;
  }
  
  .cmd-center {
    display: flex;
    min-height: 2rem;
    height: 100%;
    width: 100%;
    justify-content: space-between;
  }
  
  .cmd-vertical {
    background: var(--color-fill-ghost);
    width: 2px;
    height: calc(100% + 4px);
    min-height: 2rem;
    display: block;
    position: relative;
    margin-bottom: -2px;
    z-index: 1;
  }
  
  .cmd-vertical:last-child {
    z-index: 1;
  }
  
  .cmd-horizontal {
    background: var(--color-border-hint);
    width: 100%;
    height: 2px;
  }
  
  .cmd {
    width: 100%;
    cursor: pointer;
    height: 100%;
    min-height: 2rem;
    line-height: 2rem;
    border-radius: var(--border-radius-small);
    display: flex;
    align-items: center;
    font-family: var(--font-family-monospace);
    font-size: var(--font-size-small);
    padding: 0 2rem 0 0.75rem;
    position: relative;
    color: var(--color-foreground-dim);
    user-select: none;
  }
  
  .cmd:hover {
    color: var(--color-foreground-contrast);
  }
  
  .clipboard {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 2rem;
    height: 100%;
  }

  .full-width.wrapper,
  .full-width.cmd {
    width: 100%;
  }
  
  .command-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    min-width: 0;
  }

  .wrapper:hover .cmd-vertical,
  .wrapper:hover .cmd-horizontal {
    background: var(--color-fill-secondary);
  }
</style>

<div class="wrapper" class:full-width={fullWidth}>
  <div style:display="flex" style:height="2px">
    {#if !flatLeft}
      <div style:width="2px" style:height="2px"></div>
    {/if}
    <div class="cmd-horizontal"></div>
    <div style:width="2px" style:height="2px"></div>
  </div>
  <div class="cmd-center">
    <div class="cmd-vertical"></div>
    <div
      role="button"
      tabindex="0"
      class="cmd"
      class:full-width={fullWidth}
      onclick={() => {
        clipboard.copy();
      }}
      onkeydown={handleKeyDown}>
      <span class="command-text">$ {command}</span>
      <div class="clipboard">
        <Clipboard bind:this={clipboard} text={command} />
      </div>
    </div>
    <div class="cmd-vertical"></div>
  </div>
  <div style:display="flex" style:height="2px">
    {#if !flatLeft}
      <div style:width="2px" style:height="2px"></div>
    {/if}
    <div class="cmd-horizontal"></div>
    <div style:width="2px" style:height="2px"></div>
  </div>
</div>
