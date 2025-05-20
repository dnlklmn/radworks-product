import { R as fallback, G as store_get, M as ensure_array_like, C as attr_class, E as attr, N as escape_html, I as unsubscribe_stores, O as bind_props, B as pop, z as push, S as store_set, T as getContext, K as head } from "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
import "clsx";
import { D as Download, C as Command } from "../../../chunks/Download.js";
import "../../../chunks/client.js";
function GuidesSidebar($$payload, $$props) {
  push();
  var $$store_subs;
  let activeSection = fallback($$props["activeSection"], () => writable(""), true);
  let activeSubSection = fallback($$props["activeSubSection"], () => writable(""), true);
  let onNavigate = fallback($$props["onNavigate"], void 0);
  const navigationStore = writable([]);
  const expandedSections = writable({});
  const sections = [
    {
      title: "Getting Started",
      href: "desktop-guide",
      items: [
        {
          title: "Overview",
          id: "getting-started",
          href: "desktop-guide"
        },
        {
          title: "Installation",
          id: "installation",
          href: "desktop-guide"
        },
        {
          title: "Build from Source",
          id: "build-from-source",
          href: "desktop-guide"
        },
        {
          title: "Prerequisites",
          id: "prerequisites",
          href: "desktop-guide"
        }
      ]
    },
    {
      title: "Desktop App",
      href: "desktop-guide",
      items: [
        {
          title: "First Steps",
          id: "first-steps",
          href: "desktop-guide"
        },
        {
          title: "Issues",
          id: "features",
          href: "desktop-guide"
        },
        {
          title: "Patches",
          id: "patches",
          href: "desktop-guide"
        },
        {
          title: "Code Review",
          id: "code-review",
          href: "desktop-guide"
        },
        {
          title: "Inbox",
          id: "inbox",
          href: "desktop-guide"
        }
      ]
    },
    {
      title: "Radicle CLI",
      href: "desktop-guide",
      items: [
        {
          title: "First Steps",
          id: "first-steps",
          href: "desktop-guide"
        },
        {
          title: "Radicle Node",
          id: "radicle-node",
          href: "desktop-guide"
        },
        {
          title: "Radicle Storage",
          id: "radicle-storage",
          href: "desktop-guide"
        }
      ]
    },
    {
      title: "FAQ",
      href: "desktop-guide",
      items: [
        {
          title: "Comparison with GitHub",
          id: "faq",
          href: "desktop-guide"
        },
        {
          title: "Offline Usage",
          id: "faq",
          href: "desktop-guide"
        },
        {
          title: "Open Source Status",
          id: "faq",
          href: "desktop-guide"
        },
        {
          title: "Finding Repositories",
          id: "faq",
          href: "desktop-guide"
        }
      ]
    }
  ];
  const initialExpandedState = {};
  sections.forEach((section) => {
    initialExpandedState[section.title] = true;
  });
  expandedSections.set(initialExpandedState);
  navigationStore.set(sections);
  store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$navigationStore", navigationStore));
  $$payload.out += `<nav class="guides-sidebar svelte-4fos3i"><div class="navigation svelte-4fos3i"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let section = each_array[$$index_1];
    $$payload.out += `<div class="section svelte-4fos3i"><div class="section-header-container"><button${attr_class("section-header svelte-4fos3i", void 0, {
      "active": section.href === store_get($$store_subs ??= {}, "$activeSection", activeSection)
    })}${attr("aria-expanded", store_get($$store_subs ??= {}, "$expandedSections", expandedSections)[section.title] ? "true" : "false")}><span>${escape_html(section.title)}</span> <span class="toggle-icon svelte-4fos3i">${escape_html(store_get($$store_subs ??= {}, "$expandedSections", expandedSections)[section.title] ? "−" : "+")}</span></button></div> `;
    if (store_get($$store_subs ??= {}, "$expandedSections", expandedSections)[section.title]) {
      $$payload.out += "<!--[-->";
      const each_array_1 = ensure_array_like(section.items);
      $$payload.out += `<ul class="svelte-4fos3i"><!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let item = each_array_1[$$index];
        $$payload.out += `<li><a${attr("href", item.href)}${attr_class("nav-link svelte-4fos3i", void 0, {
          "active": section.href === store_get($$store_subs ??= {}, "$activeSection", activeSection) && item.id === store_get($$store_subs ??= {}, "$activeSubSection", activeSubSection)
        })}>${escape_html(item.title)}</a></li>`;
      }
      $$payload.out += `<!--]--></ul>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></nav>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { activeSection, activeSubSection, onNavigate });
  pop();
}
function DesktopAppGuide($$payload, $$props) {
  push();
  $$payload.out += `<div id="desktop-guide" class="desktop-app-guide svelte-1vhsfn9"><h1 class="svelte-1vhsfn9">Radicle Desktop App Guide</h1> <section id="getting-started" class="paragraph svelte-1vhsfn9"><h2 class="svelte-1vhsfn9">Getting Started</h2> <p class="svelte-1vhsfn9">This is a step-by-step guide that will walk you through the setup process.</p> <li class="list-item first svelte-1vhsfn9"><strong>1. Download the desktop app</strong> Install the radicle desktop app on your computer. Find your package or build
      it from source. <button class="nav-button svelte-1vhsfn9">Download instructions</button></li> <li class="list-item svelte-1vhsfn9"><strong>2. Launch the desktop app</strong> Log in with your existing Radicle keys or create a new identity.</li> <li class="list-item svelte-1vhsfn9"><strong>3. Install and start your node</strong> The Radicle node runs on your computer and keeps you in sync with the network. <button class="nav-button svelte-1vhsfn9">Install instructions</button></li> <li class="list-item svelte-1vhsfn9"><strong>4. Try it out!</strong> You are now on Radicle! Initialize your first repo or clone something you like!</li></section> <section id="installation" class="svelte-1vhsfn9"><h3 class="svelte-1vhsfn9">Installation</h3> <p class="svelte-1vhsfn9">Get started quickly</p> `;
  Download($$payload, { hidesourcecode: "true" });
  $$payload.out += `<!----></section> <section id="build-from-source" class="svelte-1vhsfn9"><h3 class="svelte-1vhsfn9">Build from Source</h3> <p class="svelte-1vhsfn9">Run the following commands to build the desktop app locally:</p> <div class="commands svelte-1vhsfn9">`;
  Command($$payload, {
    command: "git clone https://seed.radicle.xyz/z4D5UCArafTzTQpDZNQRuqswh3ury.git radicle-desktop",
    fullWidth: true
  });
  $$payload.out += `<!----> `;
  Command($$payload, {
    command: "cd radicle-desktop",
    fullWidth: true
  });
  $$payload.out += `<!----> `;
  Command($$payload, { command: "npm install", fullWidth: true });
  $$payload.out += `<!----> `;
  Command($$payload, {
    command: "npm run tauri build",
    fullWidth: true
  });
  $$payload.out += `<!----></div> <p class="svelte-1vhsfn9">Then run one of the builds that the script outputs at the end.</p></section> <section id="prerequisites" class="svelte-1vhsfn9"><h3 class="svelte-1vhsfn9">Prerequisites</h3> <p class="svelte-1vhsfn9">Make sure you have the following</p> <ul class="svelte-1vhsfn9"><li class="svelte-1vhsfn9">Recent versions of Node.js (22.11.0 or higher) and npm installed</li> <li class="svelte-1vhsfn9">Requires the Rust toolchain (1.77 or higher)</li> <li class="svelte-1vhsfn9"><a href="https://v1.tauri.app/v1/guides/getting-started/prerequisites/" target="_blank">Tauri system dependencies</a></li></ul></section> <section id="desktop-app" class="svelte-1vhsfn9"><h2 class="svelte-1vhsfn9">Desktop App</h2> <h3 id="first-steps" class="svelte-1vhsfn9">First steps</h3> <div class="paragraph svelte-1vhsfn9"><p class="svelte-1vhsfn9">Once the app is launched, it will pick up on your Radicle identity and
        automatically connect to your node, or offer to create a new identity if
        you don't have one.</p> <p class="svelte-1vhsfn9">You'll be prompted to add an alias and a passphrase, both of which you
        will be able to change later.</p> <p class="svelte-1vhsfn9">Once you click create new identity, your identity will be created and
        stored on your computer in an SSH agent.</p></div> <h3 class="svelte-1vhsfn9">Issue Tracking</h3> <p class="svelte-1vhsfn9">Track and manage issues directly within the app:</p> <ul class="svelte-1vhsfn9"><li class="svelte-1vhsfn9">Create and assign issues</li> <li class="svelte-1vhsfn9">Add labels and priorities</li> <li class="svelte-1vhsfn9">Comment and collaborate on solutions</li> <li class="svelte-1vhsfn9">Track progress and resolution</li></ul> <h3 class="svelte-1vhsfn9">Code Reviews</h3> <p class="svelte-1vhsfn9">Collaborate on code changes with integrated review tools:</p> <ul class="svelte-1vhsfn9"><li class="svelte-1vhsfn9">Create and review patches</li> <li class="svelte-1vhsfn9">Comment on specific lines of code</li> <li class="svelte-1vhsfn9">Suggest changes</li> <li class="svelte-1vhsfn9">Approve and merge contributions</li></ul></section> <section id="faq" class="svelte-1vhsfn9"><h2 class="svelte-1vhsfn9">Frequently Asked Questions</h2> <h3 class="svelte-1vhsfn9">How is Radicle different from GitHub or GitLab?</h3> <p class="svelte-1vhsfn9">Radicle is fundamentally different because it's built on a peer-to-peer
      architecture. There is no central server or company controlling your data.
      Your repositories exist on your device and are shared directly with
      collaborators.</p> <h3 class="svelte-1vhsfn9">Do I need an internet connection to use Radicle?</h3> <p class="svelte-1vhsfn9">No, you can work completely offline. When you connect to the internet, you
      can sync with your peers to share updates.</p> <h3 class="svelte-1vhsfn9">Is Radicle Desktop open source?</h3> <p class="svelte-1vhsfn9">Yes, Radicle Desktop is entirely open source. You can find the source code
      on the Radicle network itself or on GitHub.</p> <h3 class="svelte-1vhsfn9">How do I find other users and repositories?</h3> <p class="svelte-1vhsfn9">Radicle provides discovery mechanisms through seeds (public nodes) and
      through direct sharing of repository IDs and node addresses.</p></section></div>`;
  pop();
}
function GuideContent($$payload, $$props) {
  push();
  let activeSection = $$props["activeSection"];
  let activeSubSection = fallback($$props["activeSubSection"], null);
  let section = $$props["section"];
  function handleContentUpdate() {
  }
  function scrollToSection(sectionId) {
  }
  {
    store_set(activeSection, section);
    setTimeout(handleContentUpdate, 0);
  }
  $$payload.out += `<div class="guide-content svelte-1viesz6"><div class="content svelte-1viesz6">`;
  DesktopAppGuide($$payload);
  $$payload.out += `<!----></div></div>`;
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
  const currentSection = writable("desktop-guide");
  const currentTitle = writable("Radicle Desktop App Guide");
  const activeSection = writable("desktop-guide");
  const activeSubSection = writable("");
  function handleNavigation(url, title) {
    const [baseUrl, fragment] = url.split("#");
    currentSection.set("desktop-guide");
    currentTitle.set(title);
    activeSection.set("desktop-guide");
    if (fragment) {
      window.sessionStorage.setItem("scrollToFragment", fragment);
      activeSubSection.set(fragment);
    } else {
      window.sessionStorage.removeItem("scrollToFragment");
    }
    const newUrl = `/docs/desktop-guide${fragment ? "#" + fragment : ""}`;
    window.history.pushState({ title, fragment }, title, newUrl);
  }
  function handlePopState(event) {
    if (event.state) {
      currentSection.set("desktop-guide");
      activeSection.set("desktop-guide");
      currentTitle.set(event.state.title || "Radicle Desktop App Guide");
      if (event.state.fragment) {
        window.sessionStorage.setItem("scrollToFragment", event.state.fragment);
        activeSubSection.set(event.state.fragment);
      } else {
        window.sessionStorage.removeItem("scrollToFragment");
      }
    }
  }
  function initFromQueryParams() {
    currentSection.set("desktop-guide");
    activeSection.set("desktop-guide");
    currentTitle.set("Radicle Desktop App Guide");
    if (window.location.hash) {
      const fragment = window.location.hash.substring(1);
      if (fragment) {
        window.sessionStorage.setItem("scrollToFragment", fragment);
        activeSubSection.set(fragment);
      }
    }
  }
  if (typeof window !== "undefined") {
    initFromQueryParams();
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("beforeunload", () => {
      window.sessionStorage.setItem("scrollToFragment", store_get($$store_subs ??= {}, "$activeSubSection", activeSubSection));
    });
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
