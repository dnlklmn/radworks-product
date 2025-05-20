import { R as fallback, E as attr, O as bind_props, B as pop, z as push, C as attr_class, F as attr_style, N as escape_html } from "./index.js";
import debounce from "lodash/debounce.js";
import { I as Icon } from "./Icon.js";
async function toClipboard(text) {
  await navigator.clipboard.writeText(text);
}
function Clipboard($$payload, $$props) {
  push();
  let text = $$props["text"];
  let tooltip = fallback($$props["tooltip"], void 0);
  let icon = "clipboard";
  const restoreIcon = debounce(
    () => {
      icon = "clipboard";
    },
    800
  );
  async function copy() {
    await toClipboard(text);
    icon = "checkmark";
    restoreIcon();
  }
  $$payload.out += `<span role="button" tabindex="0"${attr("title", tooltip)} class="clipboard svelte-1wrroz3">`;
  Icon($$payload, { name: icon });
  $$payload.out += `<!----></span>`;
  bind_props($$props, { text, tooltip, copy });
  pop();
}
function Command($$payload, $$props) {
  const { command, fullWidth = false, flatLeft = false } = $$props;
  $$payload.out += `<div${attr_class("wrapper svelte-fykpqx", void 0, { "full-width": fullWidth })}><div${attr_style("", { display: "flex" })}>`;
  if (!flatLeft) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr_style("", { width: "2px", height: "2px" })}></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="cmd-horizontal svelte-fykpqx"></div> <div${attr_style("", { width: "2px", height: "2px" })}></div></div> <div class="cmd-center svelte-fykpqx"><div class="cmd-vertical svelte-fykpqx"></div> <div role="button" tabindex="0"${attr_class("cmd txt-overflow svelte-fykpqx", void 0, { "full-width": fullWidth })}>$ ${escape_html(command)} <div class="clipboard svelte-fykpqx">`;
  Clipboard($$payload, { text: command });
  $$payload.out += `<!----></div></div> <div class="cmd-vertical svelte-fykpqx"></div></div> <div${attr_style("", { display: "flex" })}>`;
  if (!flatLeft) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr_style("", { width: "2px", height: "2px" })}></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="cmd-horizontal svelte-fykpqx"></div> <div${attr_style("", { width: "2px", height: "2px" })}></div></div></div>`;
}
function Button($$payload, $$props) {
  const {
    children,
    variant,
    disabled = false,
    active = false,
    flatLeft = false,
    flatRight = false,
    title,
    fixedWidth
  } = $$props;
  const style = `--button-color-1: var(--color-fill-${variant});--button-color-2: var(--color-fill-${variant}-hover);--button-color-3: var(--color-fill-${variant}-shade);--button-color-4: var(--color-fill${variant === "ghost" ? "" : `-${variant}`}-counter);--text-color: ${variant === "ghost" ? "var(--color-foreground-contrast)" : "var(--color-foreground-white)"}` + (fixedWidth ? `; width: ${fixedWidth}` : "");
  $$payload.out += `<div${attr_class("container active svelte-lty0nm", void 0, {
    "disabled": disabled,
    "active": active,
    "flat-right": flatRight,
    "flat-left": flatLeft
  })} role="button" tabindex="0"${attr("title", title)}${attr_style(style, { cursor: !disabled ? "pointer" : "default" })}><div class="p1-1 svelte-lty0nm"></div> <div class="p1-2 svelte-lty0nm"></div> <div class="p1-3 svelte-lty0nm"></div> <div class="p1-4 svelte-lty0nm"></div> <div class="p1-5 svelte-lty0nm"></div> <div class="p2-1 svelte-lty0nm"></div> <div class="p2-2 svelte-lty0nm"></div> <div class="p2-3 svelte-lty0nm"></div> <div class="p2-4 svelte-lty0nm"></div> <div class="p2-5 svelte-lty0nm"></div> <div class="p3-1 svelte-lty0nm"></div> <div class="p3-2 svelte-lty0nm"></div> <div class="p3-3 txt-semibold txt-small svelte-lty0nm">`;
  children($$payload);
  $$payload.out += `<!----></div> <div class="p3-4 svelte-lty0nm"></div> <div class="p3-5 svelte-lty0nm"></div> <div class="p4-1 svelte-lty0nm"></div> <div class="p4-2 svelte-lty0nm"></div> <div class="p4-3 svelte-lty0nm"></div> <div class="p4-4 svelte-lty0nm"></div> <div class="p4-5 svelte-lty0nm"></div> <div class="p5-1 svelte-lty0nm"></div> <div class="p5-2 svelte-lty0nm"></div> <div class="p5-3 svelte-lty0nm"></div> <div class="p5-4 svelte-lty0nm"></div> <div class="p5-5 svelte-lty0nm"></div></div>`;
}
function Download($$payload, $$props) {
  push();
  const { hidesourcecode = false } = $$props;
  let hideSourceCode = typeof hidesourcecode === "string" ? hidesourcecode === "true" : hidesourcecode;
  const version = "0.3.0";
  const releaseFolder = "2025-05-08T16:24:32Z_25c6ab32";
  const buildSha = releaseFolder.split("_")[1];
  const files = {
    mac: {
      extension: "dmg",
      name: `Radicle_${version}_aarch64.dmg`,
      label: "Mac (arm64)"
    },
    linux: {
      extension: "AppImage",
      name: `Radicle_${version}_amd64.AppImage`,
      label: "Linux (amd64)"
    }
  };
  let os = navigator.platform.startsWith("Mac") ? "mac" : "linux";
  let dropdownOpen = false;
  const command = `curl --output radicle-desktop-${version}-${buildSha}.${files[os].extension} 'https://minio-api.radworks.garden/radworks-releases/radicle-desktop/${releaseFolder}/${files[os].name}'`;
  $$payload.out += `<div class="buttons svelte-1m7idnw"><div${attr_style("", { display: "flex", width: "100%" })}><div class="dropdown svelte-1m7idnw">`;
  Button($$payload, {
    fixedWidth: "200px",
    variant: "ghost",
    flatRight: true,
    children: ($$payload2) => {
      $$payload2.out += `<div class="os-button-content svelte-1m7idnw"><div class="os-label svelte-1m7idnw">`;
      Icon($$payload2, { name: os === "mac" ? "apple" : "linux" });
      $$payload2.out += `<!----> ${escape_html(files[os].label)}</div> `;
      Icon($$payload2, { name: "chevron-down" });
      $$payload2.out += `<!----></div>`;
    }
  });
  $$payload.out += `<!----> <div${attr_class("dropdown-content svelte-1m7idnw", void 0, { "show": dropdownOpen })}><div class="dropdown-item svelte-1m7idnw">`;
  Icon($$payload, { name: "apple" });
  $$payload.out += `<!----> Mac (arm64)</div> <div class="dropdown-item svelte-1m7idnw">`;
  Icon($$payload, { name: "linux" });
  $$payload.out += `<!----> Linux (amd64)</div></div></div> <div${attr_style("", { flex: "1", width: "100%", overflow: "hidden" })}>`;
  Command($$payload, { flatLeft: true, command, fullWidth: true });
  $$payload.out += `<!----></div></div> <div class="download-instructions svelte-1m7idnw">`;
  if (os === "mac") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p>Download and open the DMG file, then drag the Radicle app to your
        Applications folder.</p>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p>Download, make the file executable with <code class="svelte-1m7idnw">chmod +x</code> , and run it.</p>`;
  }
  $$payload.out += `<!--]--></div> `;
  if (!hideSourceCode) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="or-source-code svelte-1m7idnw">Or check out the <a target="_blank" href="https://app.radicle.xyz/nodes/seed.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury" class="svelte-1m7idnw">source code.</a></span>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  Command as C,
  Download as D
};
