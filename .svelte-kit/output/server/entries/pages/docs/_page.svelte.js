import { P as fallback, O as ensure_array_like, C as attr_class, I as escape_html, U as stringify, Q as bind_props, B as pop, z as push, K as store_set, T as getContext, G as store_get, N as head, J as unsubscribe_stores } from "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index2.js";
import "clsx";
import "lodash/debounce.js";
/* empty css                                                 */
/* empty css                                                     */
import "../../../chunks/client.js";
function GuideSidebar($$payload, $$props) {
  push();
  let activeSection = fallback($$props["activeSection"], "");
  let headings = [];
  const each_array = ensure_array_like(headings);
  $$payload.out += `<div class="sidebar svelte-o07w0x"><ul class="toc-list svelte-o07w0x"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let heading = each_array[$$index];
    $$payload.out += `<li class="toc-item svelte-o07w0x"><div${attr_class(`toc-link ${stringify(activeSection === heading.id ? "active" : "")}`, "svelte-o07w0x", {
      "level-1": heading.level === 1,
      "level-2": heading.level === 2,
      "level-3": heading.level === 3
    })}>${escape_html(heading.title)}</div></li>`;
  }
  $$payload.out += `<!--]--></ul></div>`;
  bind_props($$props, { activeSection });
  pop();
}
function DesktopAppGuide($$payload, $$props) {
  push();
  let activeSection = fallback($$props["activeSection"], "");
  function navigateToSection(sectionId) {
    console.log(`DesktopAppGuide: Navigating to section: ${sectionId}`);
    setTimeout(
      () => {
        let targetElement = document.getElementById(sectionId);
        if (!targetElement) {
          targetElement = document.querySelector(`section[id="${sectionId}"]`);
        }
        if (!targetElement) {
          const headings = document.querySelectorAll("h1, h2, h3");
          for (const heading of headings) {
            const text = heading.textContent || "";
            const generatedId = text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
            if (generatedId === sectionId) {
              let parent = heading.parentElement;
              while (parent && parent.tagName !== "SECTION" && parent !== document.body) {
                parent = parent.parentElement;
              }
              if (parent && parent.tagName === "SECTION") {
                targetElement = parent;
              } else {
                targetElement = heading;
              }
              break;
            }
          }
        }
        if (targetElement) {
          console.log("Found target element:", targetElement);
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          console.warn(`Could not find section with ID: ${sectionId}`);
        }
      },
      50
    );
  }
  $$payload.out += `<div id="desktop-guide" class="desktop-app-guide">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p>Loading content...</p>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { activeSection, navigateToSection });
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
    console.log(`GuideContent: Attempting to scroll to section: ${sectionId}`);
  }
  {
    store_set(activeSection, section);
    setTimeout(handleContentUpdate, 0);
  }
  $$payload.out += `<div class="guide-content svelte-1viesz6"><div class="content svelte-1viesz6">`;
  DesktopAppGuide($$payload, { activeSection, activeSubSection });
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
  $$payload.out += `<div class="guides-container svelte-1e3esnr"><aside${attr_class("guides-sidebar svelte-1e3esnr", void 0, {
    "show-mobile": store_get($$store_subs ??= {}, "$showMobileSidebar", showMobileSidebar)
  })}>`;
  GuideSidebar($$payload, {
    onNavigate: handleNavigation,
    activeSection,
    activeSubSection
  });
  $$payload.out += `<!----></aside> <main class="guides-content svelte-1e3esnr">`;
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
