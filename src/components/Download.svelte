<script lang="ts">
  import Command from "./Command.svelte";
  import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";

  const { hidesourcecode = false } = $props<{ hidesourcecode?: boolean | string }>();
  let hideSourceCode = $state(typeof hidesourcecode === "string" 
    ? hidesourcecode === "true"
    : hidesourcecode);

  const version = "0.3.0";
  const releaseFolder = "2025-05-08T16:24:32Z_25c6ab32";
  const buildSha = releaseFolder.split("_")[1];

  const files = {
    mac: {
      extension: "dmg",
      name: `Radicle_${version}_aarch64.dmg`,
      label: "Mac (arm64)",
    },
    linux: {
      extension: "AppImage",
      name: `Radicle_${version}_amd64.AppImage`,
      label: "Linux (amd64)",
    },
  };

  let os: "mac" | "linux" = $state(
    navigator.platform.startsWith("Mac") ? "mac" : "linux",
  );

  let dropdownOpen = $state(false);

  const command = $derived(
    `curl --output radicle-desktop-${version}-${buildSha}.${files[os].extension} 'https://minio-api.radworks.garden/radworks-releases/radicle-desktop/${releaseFolder}/${files[os].name}'`,
  );

  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
  }

  function selectOs(selectedOs: "mac" | "linux") {
    os = selectedOs;
    dropdownOpen = false;
  }
</script>

<style>

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2rem;
    width: 100%;
    max-width: 600px;
  }

  .buttons a {
    text-decoration: none;
  }
  
  /* Row containing Button and Command */
  .download-row {
    display: flex;
    width: 100%;
    position: relative;
    align-items: stretch;
    height: 36px; /* Fixed height for the row */
  }
  
  /* Command container */
  .command-container {
    flex: 1;
    width: calc(100% - 200px);
    position: relative;
    overflow: visible;
    display: flex;
    align-items: center;
  }
  
  /* Custom styling for Command component */
  .command-container :global(.wrapper) {
    height: 36px;
    margin-bottom: 0;
  }
  
  .command-container :global(.cmd) {
    height: 32px;
    line-height: 32px;
  }
  
  /* Right vertical line */
  .command-container::after {
    content: '';
    position: absolute;
    top: 2px;
    bottom: 2px;
    right: 0;
    width: 2px;
    background: var(--color-fill-ghost);
    z-index: 2;
  }
  .download-instructions {
    font-size: 0.9rem;
    color: var(--color-foreground-dim);
    width: 100%;
  }

  .or-source-code {
    font-size: 0.9rem;
    color: var(--color-foreground-dim);
    width: 100%;
  }

  .download-instructions code {
    background: var(--color-background-float);
    padding: 0.1rem 0.3rem;
    border-radius: 3px;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--color-background-default);
    width: 200px;
    border: 1px solid var(--color-border-hint);
    border-radius: 4px;
    z-index: 1;
    top: 100%;
    left: 0;
  }
  .dropdown-content.show {
    display: block;

  }
  .dropdown-item {
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;

  }
  .dropdown-item:hover {
    background-color: var(--color-background-float);
  }
  .os-button-content {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  .os-label {
    display: flex;
    align-items: center;
    gap: 6px;
  }
</style>

<div class="buttons">
  <div class="download-row">
    <div class="dropdown" style:z-index="2">
      <Button
        fixedWidth="200px"
        variant="ghost"
        flatRight
        onclick={toggleDropdown}>
        <div class="os-button-content">
          <div class="os-label">
            <Icon name={os === "mac" ? "apple" : "linux"} />
            {files[os].label}
          </div>
          <Icon name="chevron-down" />
        </div>
      </Button>
      <div class="dropdown-content" class:show={dropdownOpen}>
        <div class="dropdown-item" on:click={() => selectOs("mac")}>
          <Icon name="apple" />
          Mac (arm64)
        </div>
        <div class="dropdown-item" on:click={() => selectOs("linux")}>
          <Icon name="linux" />
          Linux (amd64)
        </div>
      </div>
    </div>
    <div class="command-container">
      <Command flatLeft {command} fullWidth></Command>
    </div>
  </div>
  <div class="download-instructions">
    {#if os === "mac"}
      <p>
        Download and open the DMG file, then drag the Radicle app to your
        Applications folder.
      </p>
    {:else}
      <p>
        Download, make the file executable with <code>chmod +x</code>
        , and run it.
      </p>
    {/if}
  </div>
  {#if !hideSourceCode}
    <span class="or-source-code">
      Or check out the
      <a
        target="_blank"
        href="https://app.radicle.xyz/nodes/seed.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury">
        source code.
      </a>
    </span>
  {/if}
</div>
