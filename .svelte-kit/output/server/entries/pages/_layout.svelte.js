import { C as attr_class, E as attr, F as attr_style, G as store_get, I as escape_html, J as unsubscribe_stores, B as pop, z as push, K as store_set, M as slot } from "../../chunks/index.js";
import { g as goto } from "../../chunks/client.js";
import { p as page } from "../../chunks/stores.js";
import { w as writable } from "../../chunks/index2.js";
import { I as Icon } from "../../chunks/Icon.js";
import { union, literal } from "zod";
import "clsx";
function NakedButton($$payload, $$props) {
  const {
    children,
    title,
    disabled,
    variant,
    onclick,
    stylePadding = "8px 12px",
    active = false,
    keyShortcuts
  } = $$props;
  const style = `--button-color-1: var(--color-fill-${variant});--button-color-2: var(--color-fill-${variant}-hover);--button-color-3: var(--color-fill-${variant}-shade);--button-color-4: var(--color-fill${variant === "ghost" ? "" : `-${variant}`}-counter)`;
  $$payload.out += `<divf${attr_class("container svelte-5vehem", void 0, { "disabled": disabled, "active": active })}${attr("title", title)}${attr("aria-keyshortcuts", keyShortcuts)} role="button" tabindex="0"${attr_style(style)}><div class="pixel p1-1 svelte-5vehem"></div> <div class="pixel p1-2 svelte-5vehem"></div> <div class="pixel p1-3 svelte-5vehem"></div> <div class="pixel p1-4 svelte-5vehem"></div> <div class="pixel p1-5 svelte-5vehem"></div> <div class="pixel p2-1 svelte-5vehem"></div> <div class="pixel p2-2 svelte-5vehem"></div> <div class="pixel p2-3 svelte-5vehem"></div> <div class="pixel p2-4 svelte-5vehem"></div> <div class="pixel p2-5 svelte-5vehem"></div> <div class="pixel p3-1 svelte-5vehem"></div> <div class="pixel p3-2 svelte-5vehem"></div> <div class="pixel p3-3 txt-semibold txt-small svelte-5vehem"${attr_style("", { padding: stylePadding })}>`;
  children($$payload);
  $$payload.out += `<!----></div> <div class="pixel p3-4 svelte-5vehem"></div> <div class="pixel p3-5 svelte-5vehem"></div> <div class="pixel p4-1 svelte-5vehem"></div> <div class="pixel p4-2 svelte-5vehem"></div> <div class="pixel p4-3 svelte-5vehem"></div> <div class="pixel p4-4 svelte-5vehem"></div> <div class="pixel p4-5 svelte-5vehem"></div> <div class="pixel p5-1 svelte-5vehem"></div> <div class="pixel p5-2 svelte-5vehem"></div> <div class="pixel p5-3 svelte-5vehem"></div> <div class="pixel p5-4 svelte-5vehem"></div> <div class="pixel p5-5 svelte-5vehem"></div></divf>`;
}
const themeSchema = union([literal("dark"), literal("light")]);
function isBrowser() {
  return typeof window !== "undefined";
}
function loadTheme() {
  if (!isBrowser()) return "light";
  const stored = localStorage.getItem("theme");
  if (stored && themeSchema.safeParse(stored).success) {
    return stored;
  }
  const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
  return matches ? "dark" : "light";
}
function createThemeStore() {
  const { subscribe, set } = writable(loadTheme());
  return {
    subscribe,
    set: (value) => {
      if (isBrowser()) {
        localStorage.setItem("theme", value);
      }
      set(value);
    }
  };
}
const theme = createThemeStore();
const scrolled = writable(false);
function Header($$payload, $$props) {
  push();
  var $$store_subs;
  let isDocsPage, isHomePage;
  const showMobileMenu = writable(false);
  function toggleTheme() {
    theme.set(store_get($$store_subs ??= {}, "$theme", theme) === "dark" ? "light" : "dark");
  }
  function navigateTo(path) {
    {
      isDocsPage = true;
      isHomePage = false;
    }
    goto();
    store_set(showMobileMenu, false);
  }
  isDocsPage = store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/docs");
  isHomePage = store_get($$store_subs ??= {}, "$page", page).url.pathname === "/";
  {
    store_get($$store_subs ??= {}, "$page", page).url.pathname;
    isDocsPage = store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/docs");
    isHomePage = store_get($$store_subs ??= {}, "$page", page).url.pathname === "/";
  }
  $$payload.out += `<div class="header svelte-19jt5hq"${attr_style("", {
    "box-shadow": `${store_get($$store_subs ??= {}, "$scrolled", scrolled) ? "0 4px 8px 0 rgba(0,0,0,0.075)" : "0 4px 8px 0 rgba(0,0,0,0)"}`
  })}><button class="title svelte-19jt5hq" style="cursor: pointer; background: none; border: none; padding: 0;" aria-label="Go to homepage">`;
  if (isDocsPage) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="docs-title">← Desktop App Docs</span>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `RADWORKS`;
  }
  $$payload.out += `<!--]--></button> <div class="header-right svelte-19jt5hq">`;
  NakedButton($$payload, {
    variant: "ghost",
    onclick: toggleTheme,
    children: ($$payload2) => {
      Icon($$payload2, {
        name: store_get($$store_subs ??= {}, "$theme", theme) === "dark" ? "moon" : "sun"
      });
    }
  });
  $$payload.out += `<!----> `;
  if (!isDocsPage) {
    $$payload.out += "<!--[-->";
    NakedButton($$payload, {
      onclick: () => window.open("https://radicle.xyz"),
      variant: "ghost",
      children: ($$payload2) => {
        Icon($$payload2, { size: "16", name: "seedling" });
        $$payload2.out += `<!----> Radicle`;
      }
    });
    $$payload.out += `<!----> `;
    NakedButton($$payload, {
      variant: "ghost",
      onclick: () => window.open("https://bsky.app/profile/radicle.xyz"),
      children: ($$payload2) => {
        Icon($$payload2, { size: "16", name: "bluesky" });
        $$payload2.out += `<!----> Bluesky`;
      }
    });
    $$payload.out += `<!----> `;
    NakedButton($$payload, {
      onclick: () => window.open("https://radicle.zulipchat.com/#narrow/channel/369873-support"),
      variant: "ghost",
      children: ($$payload2) => {
        Icon($$payload2, { size: "16", name: "zulip" });
        $$payload2.out += `<!----> Support`;
      }
    });
    $$payload.out += `<!----> `;
    NakedButton($$payload, {
      onclick: () => navigateTo(),
      variant: "ghost",
      active: isDocsPage,
      children: ($$payload2) => {
        Icon($$payload2, { size: "16", name: "docs" });
        $$payload2.out += `<!----> Docs`;
      }
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  if (isHomePage) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="mobile-toggle svelte-19jt5hq" aria-label="Toggle mobile menu"${attr("aria-expanded", store_get($$store_subs ??= {}, "$showMobileMenu", showMobileMenu))}>`;
    if (store_get($$store_subs ??= {}, "$showMobileMenu", showMobileMenu)) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="close-icon svelte-19jt5hq">✕</span>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<span class="menu-icon svelte-19jt5hq">☰</span>`;
    }
    $$payload.out += `<!--]--></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  if (isHomePage) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr_class("mobile-menu svelte-19jt5hq", void 0, {
      "show": store_get($$store_subs ??= {}, "$showMobileMenu", showMobileMenu)
    })}><button class="mobile-menu-item svelte-19jt5hq">`;
    Icon($$payload, {
      name: store_get($$store_subs ??= {}, "$theme", theme) === "dark" ? "moon" : "sun",
      size: "16"
    });
    $$payload.out += `<!----> ${escape_html(store_get($$store_subs ??= {}, "$theme", theme) === "dark" ? "Light Mode" : "Dark Mode")}</button> <button class="mobile-menu-item svelte-19jt5hq">`;
    Icon($$payload, { size: "16", name: "seedling" });
    $$payload.out += `<!----> Radicle</button> <button class="mobile-menu-item svelte-19jt5hq">`;
    Icon($$payload, { size: "16", name: "bluesky" });
    $$payload.out += `<!----> Bluesky</button> <button class="mobile-menu-item svelte-19jt5hq">`;
    Icon($$payload, { size: "16", name: "zulip" });
    $$payload.out += `<!----> Support</button> <button class="mobile-menu-item svelte-19jt5hq">`;
    Icon($$payload, { size: "16", name: "docs" });
    $$payload.out += `<!----> Docs</button></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-rwqai7"><a href="https://radicle.xyz/guides/user" target="_blank" rel="noopener">Radicle User Guide</a> <span>•</span> <a href="https://radicle.xyz/guides/protocol" target="_blank" rel="noopener">Radicle Protocol Guide</a></footer>`;
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/docs");
  $$payload.out += `<main class="svelte-10iroze">`;
  Header($$payload);
  $$payload.out += `<!----> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> `;
  if (!store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/guides") && !store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/docs")) {
    $$payload.out += "<!--[-->";
    Footer($$payload);
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
