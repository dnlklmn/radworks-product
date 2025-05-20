<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Command from "../../components/Command.svelte";
  import Download from "../../components/Download.svelte";
  
  const dispatch = createEventDispatcher();
  
  // Function to scroll to a specific section
  function navigateToSection(sectionId: string) {
    dispatch("scrollToSection", { sectionId });
  }
</script>

<style>
  .commands {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    margin: 1rem 0 1.5rem;
  }

  .list-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .nav-button {
    align-self: flex-start;
    background: transparent;
    color: var(--color-foreground-emphasized);
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  .nav-button:hover {
    background-color: var(--color-fill-separator);
    color: var(--color-foreground-emphasized-hover);
  }

  .first {
    padding-top: 1rem;
  }

  .desktop-app-guide {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem 0;
  }

  .paragraph {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  section {
    margin-bottom: 2.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--color-fill-separator);
  }

  section:last-child {
    border-bottom: none;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  ul,
  ol {
    margin: 0.5rem 0 1.5rem 1.5rem;
    line-height: 1.6;
  }

  li {
    margin-bottom: 0.5rem;
  }
</style>

<div id="desktop-guide" class="desktop-app-guide">
  <h1>Radicle Desktop App Guide</h1>

  <section id="getting-started" class="paragraph">
    <h2>Getting Started</h2>
    <p>
      This is a step-by-step guide that will walk you through the setup process.
    </p>
    <li class="list-item first">
      <strong>1. Download the desktop app</strong>
      Install the radicle desktop app on your computer. Find your package or build
      it from source.
      <button class="nav-button" on:click={() => navigateToSection("installation")}>
        Download instructions
      </button>
    </li>
    <li class="list-item">
      <strong>2. Launch the desktop app</strong>
      Log in with your existing Radicle keys or create a new identity.
    </li>
    <li class="list-item">
      <strong>3. Install and start your node</strong>
      The Radicle node runs on your computer and keeps you in sync with the network.
      <button class="nav-button" on:click={() => navigateToSection("cli-first-steps")}>
        Install instructions
      </button>
    </li>
    <li class="list-item">
      <strong>4. Try it out!</strong>
      You are now on Radicle! Initialize your first repo or clone something you like!
    </li>
  </section>

  <section id="installation">
    <h3>Installation</h3>
    <p>Get started quickly</p>
    <Download hidesourcecode="true" />
  </section>

  <section id="build-from-source">
    <h3>Build from Source</h3>
    <p>Run the following commands to build the desktop app locally:</p>
    <div class="commands">
      <Command
        command="git clone https://seed.radicle.xyz/z4D5UCArafTzTQpDZNQRuqswh3ury.git radicle-desktop"
        fullWidth>
      </Command>
      <Command command="cd radicle-desktop" fullWidth></Command>
      <Command command="npm install" fullWidth></Command>
      <Command command="npm run tauri build" fullWidth></Command>
    </div>
    <p>Then run one of the builds that the script outputs at the end.</p>
  </section>

  <section id="prerequisites">
    <h3>Prerequisites</h3>
    <p>Make sure you have the following</p>
    <ul>
      <li>Recent versions of Node.js (22.11.0 or higher) and npm installed</li>
      <li>Requires the Rust toolchain (1.77 or higher)</li>
      <li>
        <a
          href="https://v1.tauri.app/v1/guides/getting-started/prerequisites/"
          target="_blank">
          Tauri system dependencies
        </a>
      </li>
    </ul>
  </section>

  <section id="desktop-app">
    <h2>Desktop App</h2>

    <h3 id="first-steps">First steps</h3>
    <div class="paragraph">
      <p>
        Once the app is launched, it will pick up on your Radicle identity and
        automatically connect to your node, or offer to create a new identity if
        you don't have one.
      </p>
      <p>
        You'll be prompted to add an alias and a passphrase, both of which you
        will be able to change later.
      </p>
      <p>
        Once you click create new identity, your identity will be created and
        stored on your computer in an SSH agent.
      </p>
    </div>
    <h3>Issue Tracking</h3>
    <p>Track and manage issues directly within the app:</p>
    <ul>
      <li>Create and assign issues</li>
      <li>Add labels and priorities</li>
      <li>Comment and collaborate on solutions</li>
      <li>Track progress and resolution</li>
    </ul>

    <h3>Code Reviews</h3>
    <p>Collaborate on code changes with integrated review tools:</p>
    <ul>
      <li>Create and review patches</li>
      <li>Comment on specific lines of code</li>
      <li>Suggest changes</li>
      <li>Approve and merge contributions</li>
    </ul>
  </section>

  <section id="faq">
    <h2>Frequently Asked Questions</h2>

    <h3>How is Radicle different from GitHub or GitLab?</h3>
    <p>
      Radicle is fundamentally different because it's built on a peer-to-peer
      architecture. There is no central server or company controlling your data.
      Your repositories exist on your device and are shared directly with
      collaborators.
    </p>

    <h3>Do I need an internet connection to use Radicle?</h3>
    <p>
      No, you can work completely offline. When you connect to the internet, you
      can sync with your peers to share updates.
    </p>

    <h3>Is Radicle Desktop open source?</h3>
    <p>
      Yes, Radicle Desktop is entirely open source. You can find the source code
      on the Radicle network itself or on GitHub.
    </p>

    <h3>How do I find other users and repositories?</h3>
    <p>
      Radicle provides discovery mechanisms through seeds (public nodes) and
      through direct sharing of repository IDs and node addresses.
    </p>
  </section>
</div>
