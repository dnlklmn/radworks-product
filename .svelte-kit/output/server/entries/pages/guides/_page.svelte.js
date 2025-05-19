import { O as fallback, G as store_get, M as escape_html, N as ensure_array_like, C as attr_class, E as attr, I as unsubscribe_stores, P as bind_props, B as pop, z as push, S as store_set, K as getContext, T as head } from "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
import { h as html } from "../../../chunks/html.js";
import "../../../chunks/client.js";
function GuidesSidebar($$payload, $$props) {
  push();
  var $$store_subs;
  let activeSection = fallback($$props["activeSection"], () => writable(""), true);
  let activeSubSection = fallback($$props["activeSubSection"], () => writable(""), true);
  let onNavigate = fallback($$props["onNavigate"], void 0);
  const navigationStore = writable([]);
  const loadingError = writable(null);
  const isLoading = writable(true);
  const expandedSections = writable({});
  store_get($$store_subs ??= {}, "$page", page).url.pathname;
  $$payload.out += `<nav class="guides-sidebar svelte-x2xxfw">`;
  if (store_get($$store_subs ??= {}, "$isLoading", isLoading)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="loading svelte-x2xxfw">Loading guide navigation...</div>`;
  } else if (store_get($$store_subs ??= {}, "$loadingError", loadingError)) {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<div class="error svelte-x2xxfw">Error loading guide: ${escape_html(store_get($$store_subs ??= {}, "$loadingError", loadingError))}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
    const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$navigationStore", navigationStore));
    $$payload.out += `<div class="navigation svelte-x2xxfw"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let section = each_array[$$index_1];
      $$payload.out += `<div class="section svelte-x2xxfw"><div class="section-header-container"><button${attr_class("section-header svelte-x2xxfw", void 0, {
        "active": section.href === store_get($$store_subs ??= {}, "$activeSection", activeSection)
      })}${attr("aria-expanded", store_get($$store_subs ??= {}, "$expandedSections", expandedSections)[section.title] ? "true" : "false")}><span>${escape_html(section.title)}</span> <span class="toggle-icon svelte-x2xxfw">${escape_html(store_get($$store_subs ??= {}, "$expandedSections", expandedSections)[section.title] ? "−" : "+")}</span></button></div> `;
      if (store_get($$store_subs ??= {}, "$expandedSections", expandedSections)[section.title]) {
        $$payload.out += "<!--[-->";
        const each_array_1 = ensure_array_like(section.items);
        $$payload.out += `<ul class="svelte-x2xxfw"><!--[-->`;
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let item = each_array_1[$$index];
          $$payload.out += `<li><a${attr("href", item.href)}${attr_class("nav-link svelte-x2xxfw", void 0, {
            "active": section.href === store_get($$store_subs ??= {}, "$activeSection", activeSection) && item.id === store_get($$store_subs ??= {}, "$activeSubSection", activeSubSection)
          })}>${escape_html(item.title)}</a></li>`;
        }
        $$payload.out += `<!--]--></ul>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></nav>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { activeSection, activeSubSection, onNavigate });
  pop();
}
function GuideContent($$payload, $$props) {
  push();
  var $$store_subs;
  let activeSection = fallback($$props["activeSection"], () => writable(""), true);
  let activeSubSection = fallback($$props["activeSubSection"], () => writable(""), true);
  let section = fallback($$props["section"], "");
  const content = writable("");
  const isLoading = writable(true);
  const loadingError = writable(null);
  async function fetchGuideContent() {
    isLoading.set(true);
    store_set(activeSection, section);
    try {
      let contentToDisplay = "";
      let sectionId = section;
      if (sectionId && sectionId.startsWith("#")) {
        sectionId = sectionId.substring(1);
      }
      console.log("Loading content for normalized section:", sectionId);
      if (sectionId === "radicle-protocol") {
        contentToDisplay = `
          <div class="guide-section">
            <h1>Radicle Protocol</h1>
            
            <section id="protocol-overview">
              <h2>What is the Radicle Protocol?</h2>
              <p>The Radicle Protocol is a peer-to-peer stack for code collaboration built on Git. It enables developers to collaborate without relying on centralized platforms.</p>
              
              <p>Key aspects of the Radicle Protocol:</p>
              <ul>
                <li><strong>Git-compatible:</strong> Built on Git, extending its functionality for distributed collaboration</li>
                <li><strong>Peer-to-peer architecture:</strong> No central servers, all data is stored on your device and shared directly</li>
                <li><strong>Cryptographic identities:</strong> Uses public-key cryptography for secure, verifiable identities</li>
                <li><strong>Replication:</strong> Data gets replicated across the network for resilience and availability</li>
              </ul>
            </section>
            
            <section id="protocol-architecture">
              <h2>Protocol Architecture</h2>
              <p>The Radicle Protocol consists of several layers:</p>
              
              <h3>Storage Layer</h3>
              <p>At its core, Radicle uses Git's content-addressable storage model, extending it with:</p>
              <ul>
                <li>Signed Git references for identity verification</li>
                <li>Gossip-based replication to share repository data</li>
                <li>Merkle DAG structures for content integrity</li>
              </ul>
              
              <h3>Identity Layer</h3>
              <p>Radicle identities are:</p>
              <ul>
                <li>Based on Ed25519 cryptographic key pairs</li>
                <li>Self-sovereign - you control your identity</li>
                <li>Portable across devices</li>
                <li>Linked to Git commits and repository actions</li>
              </ul>
              
              <h3>Networking Layer</h3>
              <p>Communication in Radicle happens through:</p>
              <ul>
                <li>Direct peer connections</li>
                <li>Gossip protocols for data propagation</li>
                <li>Seed nodes for discovery and availability</li>
              </ul>
            </section>
            
            <section id="protocol-security">
              <h2>Security Model</h2>
              <p>Radicle's security is built on:</p>
              <ul>
                <li><strong>Cryptographic verification:</strong> All operations are signed and verified</li>
                <li><strong>Local-first approach:</strong> Your data remains on your device first</li>
                <li><strong>Trust through connectivity:</strong> You choose which peers to connect with</li>
                <li><strong>Content addressability:</strong> Data integrity is ensured through cryptographic hashing</li>
              </ul>
            </section>
          </div>
        `;
      } else if (sectionId === "radicle-network") {
        contentToDisplay = `
          <div class="guide-section">
            <h1>Radicle Network</h1>
            
            <section id="network-overview">
              <h2>Understanding the Radicle Network</h2>
              <p>The Radicle Network is a peer-to-peer network of nodes that collectively store, validate, and share code repositories and collaboration data. Unlike centralized platforms, there is no single point of control or failure.</p>
              
              <p>The network is designed to be:</p>
              <ul>
                <li><strong>Resilient:</strong> Data is replicated across multiple nodes</li>
                <li><strong>Censorship-resistant:</strong> No central authority can remove or block content</li>
                <li><strong>Self-sovereign:</strong> Users maintain full control over their identities and data</li>
                <li><strong>Open:</strong> Anyone can join and participate in the network</li>
              </ul>
            </section>
            
            <section id="network-participants">
              <h2>Network Participants</h2>
              
              <h3>Nodes</h3>
              <p>Every Radicle Desktop user runs a node that:</p>
              <ul>
                <li>Stores their own repositories and data they're interested in</li>
                <li>Connects to other nodes to share and receive updates</li>
                <li>Verifies the integrity and authenticity of data</li>
              </ul>
              
              <h3>Seeds</h3>
              <p>Seeds are special nodes that:</p>
              <ul>
                <li>Maintain high availability</li>
                <li>Help with discovery of other peers</li>
                <li>Improve network connectivity</li>
                <li>Replicate repositories for availability</li>
              </ul>
              <p>Anyone can run a seed to support the network.</p>
            </section>
            
            <section id="network-interactions">
              <h2>Network Interactions</h2>
              <p>When using Radicle, these network interactions happen:</p>
              <ol>
                <li><strong>Publishing:</strong> When you push to Radicle, your changes are stored locally and made available to peers</li>
                <li><strong>Discovery:</strong> Other users can find your repositories through seeds or by exchanging repository IDs</li>
                <li><strong>Replication:</strong> When someone is interested in your repository, they replicate it to their node</li>
                <li><strong>Collaboration:</strong> Others can propose changes that you can review and incorporate</li>
              </ol>
              <p>All these interactions happen without a central server in between.</p>
            </section>
          </div>
        `;
      } else if (sectionId === "getting-started-guide") {
        contentToDisplay = `
          <div class="guide-section">
            <h1>Getting Started with Radicle</h1>
            
            <section id="prerequisites">
              <h2>Prerequisites</h2>
              <p>Before you begin using Radicle, make sure you have:</p>
              <ul>
                <li>Git installed on your system</li>
                <li>Basic familiarity with Git commands</li>
                <li>A project you want to collaborate on</li>
              </ul>
            </section>
            
            <section id="installation-steps">
              <h2>Installation Steps</h2>
              <ol>
                <li><strong>Download Radicle Desktop:</strong>
                  <ul>
                    <li>Visit <a href="https://radworks.garden" target="_blank">radworks.garden</a></li>
                    <li>Download the appropriate version for your operating system</li>
                    <li>Run the installer and follow the prompts</li>
                  </ul>
                </li>
                
                <li><strong>Create Your Identity:</strong>
                  <ul>
                    <li>Launch Radicle Desktop</li>
                    <li>Follow the onboarding process to create your cryptographic identity</li>
                    <li>Set your display name and other profile information</li>
                  </ul>
                </li>
              </ol>
            </section>
            
            <section id="first-steps">
              <h2>Your First Steps</h2>
              
              <h3>Creating a New Repository</h3>
              <ol>
                <li>In Radicle Desktop, click "New Repository"</li>
                <li>Choose a name and description for your repository</li>
                <li>Initialize with a README or import an existing Git repository</li>
                <li>Your repository is now available on the Radicle network</li>
              </ol>
              
              <h3>Exploring Existing Projects</h3>
              <ol>
                <li>Use the "Explore" section to discover projects</li>
                <li>Search by name or browse featured projects</li>
                <li>When you find an interesting project, click "Clone" to replicate it to your node</li>
                <li>You now have a local copy you can browse and contribute to</li>
              </ol>
            </section>
            
            <section id="collaboration">
              <h2>Collaborating with Others</h2>
              
              <h3>Sharing Your Repository</h3>
              <ol>
                <li>Find your repository's Radicle ID in its overview page</li>
                <li>Share this ID with collaborators</li>
                <li>They can use this ID to find and clone your repository</li>
              </ol>
              
              <h3>Contributing to Projects</h3>
              <ol>
                <li>Clone the repository you want to contribute to</li>
                <li>Create a branch for your changes</li>
                <li>Commit your changes locally</li>
                <li>Create a patch (similar to a pull request) in Radicle Desktop</li>
                <li>The project maintainer will be notified and can review your contribution</li>
              </ol>
            </section>
          </div>
        `;
      } else {
        if (sectionId === "desktop-guide" || !sectionId) {
          console.log("Loading default desktop guide content");
        } else {
          console.log("Unknown section:", sectionId, "- loading default content");
        }
        contentToDisplay = `
          <div id="desktop-guide" class="desktop-app-guide">
            <h1>Radicle Desktop App Guide</h1>
            
            <section id="introduction">
              <h2>Introduction to Radicle Desktop</h2>
              <p>The Radicle Desktop app provides a user-friendly interface for interacting with the Radicle network. 
              It allows you to host and sync code with others just by running the app, without relying on centralized services.</p>
              
              <p>With Radicle Desktop, you can:</p>
              <ul>
                <li>Manage repositories in a peer-to-peer network</li>
                <li>Track issues and review code</li>
                <li>Work offline and sync when connected</li>
                <li>Maintain full ownership of your data</li>
              </ul>
            </section>
            
            <section id="installation">
              <h2>Installation</h2>
              <p>To get started with Radicle Desktop:</p>
              <ol>
                <li>Visit <a href="https://radworks.garden" target="_blank">radworks.garden</a> to download the latest version</li>
                <li>Choose the appropriate installer for your operating system (Windows, macOS, or Linux)</li>
                <li>Run the installer and follow the on-screen instructions</li>
                <li>Launch the app once installation is complete</li>
              </ol>
            </section>
            
            <section id="getting-started">
              <h2>Getting Started</h2>
              <p>When you first open Radicle Desktop, you'll need to:</p>
              <ol>
                <li><strong>Create your identity</strong> - This is how you'll be known on the network</li>
                <li><strong>Set up your profile</strong> - Add details about yourself that will be visible to others</li>
                <li><strong>Create or import repositories</strong> - Start with your own Git repositories or clone from the network</li>
              </ol>
            </section>
            
            <section id="features">
              <h2>Key Features</h2>
              
              <h3>Repository Management</h3>
              <p>Radicle Desktop provides a complete interface for managing Git repositories:</p>
              <ul>
                <li>Create and clone repositories</li>
                <li>Browse code and commit history</li>
                <li>Manage branches and tags</li>
                <li>Connect with remote peers to share and collaborate</li>
              </ul>
              
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
              <p>Radicle is fundamentally different because it's built on a peer-to-peer architecture. There is no central server or company controlling your data. Your repositories exist on your device and are shared directly with collaborators.</p>
              
              <h3>Do I need an internet connection to use Radicle?</h3>
              <p>No, you can work completely offline. When you connect to the internet, you can sync with your peers to share updates.</p>
              
              <h3>Is Radicle Desktop open source?</h3>
              <p>Yes, Radicle Desktop is entirely open source. You can find the source code on the Radicle network itself or on GitHub.</p>
              
              <h3>How do I find other users and repositories?</h3>
              <p>Radicle provides discovery mechanisms through seeds (public nodes) and through direct sharing of repository IDs and node addresses.</p>
            </section>
          </div>
        `;
      }
      content.set(contentToDisplay);
      store_set(activeSection, section);
    } catch (error) {
      console.error("Error setting guide content:", error);
      if (error instanceof Error) {
        loadingError.set(error.message);
      } else {
        loadingError.set("An unknown error occurred");
      }
    } finally {
      isLoading.set(false);
    }
  }
  function handleContentUpdate() {
  }
  function scrollToSection(sectionId) {
  }
  {
    console.log("Section changed to:", section);
    if (section) fetchGuideContent();
  }
  if (store_get($$store_subs ??= {}, "$content", content)) {
    setTimeout(handleContentUpdate, 0);
    store_set(activeSection, section);
  }
  $$payload.out += `<div class="guide-content svelte-1pewey9">`;
  if (store_get($$store_subs ??= {}, "$isLoading", isLoading)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="loading svelte-1pewey9">Loading content...</div>`;
  } else if (store_get($$store_subs ??= {}, "$loadingError", loadingError)) {
    $$payload.out += "<!--[1-->";
    $$payload.out += `<div class="error svelte-1pewey9">Error loading content: ${escape_html(store_get($$store_subs ??= {}, "$loadingError", loadingError))}</div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div class="content svelte-1pewey9">${html(store_get($$store_subs ??= {}, "$content", content))}</div>`;
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    activeSection,
    activeSubSection,
    section,
    scrollToSection
  });
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const showMobileSidebar = getContext("showMobileSidebar");
  const currentSection = writable("");
  const currentTitle = writable("Radicle Desktop App Guide");
  const activeSection = writable("");
  const activeSubSection = writable("");
  function handleNavigation(url, title) {
    const [baseUrl, fragment] = url.split("#");
    currentSection.set(baseUrl.startsWith("#") ? baseUrl.substring(1) : baseUrl);
    currentTitle.set(title);
    if (fragment) {
      window.sessionStorage.setItem("scrollToFragment", fragment);
    } else {
      window.sessionStorage.removeItem("scrollToFragment");
    }
    const newUrl = `/guides?section=${encodeURIComponent(baseUrl)}&title=${encodeURIComponent(title)}${fragment ? "#" + fragment : ""}`;
    window.history.pushState({ url: baseUrl, title, fragment }, title, newUrl);
  }
  function handlePopState(event) {
    if (event.state) {
      const url = event.state.url || "";
      currentSection.set(url.startsWith("#") ? url.substring(1) : url);
      currentTitle.set(event.state.title || "Radicle Guide");
      if (event.state.fragment) {
        window.sessionStorage.setItem("scrollToFragment", event.state.fragment);
      } else {
        window.sessionStorage.removeItem("scrollToFragment");
      }
    }
  }
  function initFromQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get("section");
    const title = urlParams.get("title");
    if (section) {
      currentSection.set(section.startsWith("#") ? section.substring(1) : section);
    }
    if (title) {
      currentTitle.set(title);
    }
    if (window.location.hash) {
      const fragment = window.location.hash.substring(1);
      if (fragment) {
        window.sessionStorage.setItem("scrollToFragment", fragment);
      }
    }
  }
  if (typeof window !== "undefined") {
    initFromQueryParams();
    window.addEventListener("popstate", handlePopState);
  }
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(store_get($$store_subs ??= {}, "$currentTitle", currentTitle))} | Radworks</title>`;
  });
  $$payload.out += `<div class="guides-container svelte-1yx5e31"><aside${attr_class("guides-sidebar svelte-1yx5e31", void 0, {
    "show-mobile": store_get($$store_subs ??= {}, "$showMobileSidebar", showMobileSidebar)
  })}>`;
  GuidesSidebar($$payload, {
    onNavigate: handleNavigation,
    activeSection,
    activeSubSection
  });
  $$payload.out += `<!----></aside> <main class="guides-content svelte-1yx5e31">`;
  GuideContent($$payload, {
    section: store_get($$store_subs ??= {}, "$currentSection", currentSection),
    activeSection,
    activeSubSection
  });
  $$payload.out += `<!----></main></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
