import "clsx";
import { O as ensure_array_like, I as escape_html, z as push, P as fallback, E as attr, Q as bind_props, B as pop, C as attr_class, F as attr_style, M as slot, R as copy_payload, S as assign_payload } from "../../chunks/index.js";
import debounce from "lodash/debounce.js";
import { I as Icon } from "../../chunks/Icon.js";
/* empty css                                                  */
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Features($$payload) {
  let features = [
    {
      title: "Peer-to-Peer by Default",
      description: "Radicle connects devices directly in a global peer-to-peer network — no central servers, no single point of failure.<br/>You host and sync code with others just by running the app.",
      icon: "🕸️"
    },
    {
      title: "Git-Native Collaboration",
      description: "Radicle stores issues and patches inside Git, making them portable, versioned, and fully offline-friendly.<br/>Social collaboration is now as decentralized as your code.",
      icon: "🧱"
    },
    {
      title: "Always Local, Always Yours",
      description: "Your entire repository — code, issues, patches — lives on your machine, always available.<br/>Work offline, sync when you’re online.",
      icon: "💾"
    },
    {
      title: "No Accounts, Just Keys",
      description: "Identities in Radicle are public keys you generate locally — no signups, passwords, or email needed.<br/>You’re in control of your identity, always.",
      icon: "🆔"
    },
    {
      title: "Trust Through Cryptography",
      description: "Every repository and identity is verified through cryptographic signatures, not centralized authority.",
      icon: "🔐"
    }
  ];
  const each_array = ensure_array_like(features);
  $$payload.out += `<div class="container svelte-14fuabd"><div class="title-block svelte-14fuabd"><span class="h2">Features</span></div> <div class="features-grid svelte-14fuabd"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { title, description, icon } = each_array[$$index];
    $$payload.out += `<div class="feature-box svelte-14fuabd"><div class="icon-container">${escape_html(icon)}</div> <div><strong>${escape_html(title)}</strong></div> <div></div> <div>${html(description)}</div></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
}
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
  $$payload.out += `<div${attr_class("wrapper svelte-5znykc", void 0, { "full-width": fullWidth })}><div${attr_style("", { display: "flex" })}>`;
  if (!flatLeft) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr_style("", { width: "2px", height: "2px" })}></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="cmd-horizontal svelte-5znykc"></div> <div${attr_style("", { width: "2px", height: "2px" })}></div></div> <div class="cmd-center svelte-5znykc"><div class="cmd-vertical svelte-5znykc"></div> <div role="button" tabindex="0"${attr_class("cmd svelte-5znykc", void 0, { "full-width": fullWidth })}><span class="command-text svelte-5znykc">$ ${escape_html(command)}</span> <div class="clipboard svelte-5znykc">`;
  Clipboard($$payload, { text: command });
  $$payload.out += `<!----></div></div> <div class="cmd-vertical svelte-5znykc"></div></div> <div${attr_style("", { display: "flex" })}>`;
  if (!flatLeft) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr_style("", { width: "2px", height: "2px" })}></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="cmd-horizontal svelte-5znykc"></div> <div${attr_style("", { width: "2px", height: "2px" })}></div></div></div>`;
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
  $$payload.out += `<div${attr_class("container active svelte-1juoxhn", void 0, {
    "disabled": disabled,
    "active": active,
    "flat-right": flatRight,
    "flat-left": flatLeft
  })} role="button" tabindex="0"${attr("title", title)}${attr_style(style, { cursor: !disabled ? "pointer" : "default" })}><div class="p1-1 svelte-1juoxhn"></div> <div class="p1-2 svelte-1juoxhn"></div> <div class="p1-3 svelte-1juoxhn"></div> <div class="p1-4 svelte-1juoxhn"></div> <div class="p1-5 svelte-1juoxhn"></div> <div class="p2-1 svelte-1juoxhn"></div> <div class="p2-2 svelte-1juoxhn"></div> <div class="p2-3 svelte-1juoxhn"></div> <div class="p2-4 svelte-1juoxhn"></div> <div class="p2-5 svelte-1juoxhn"></div> <div class="p3-1 svelte-1juoxhn"></div> <div class="p3-2 svelte-1juoxhn"></div> <div class="p3-3 txt-semibold txt-small svelte-1juoxhn">`;
  children($$payload);
  $$payload.out += `<!----></div> <div class="p3-4 svelte-1juoxhn"></div> <div class="p3-5 svelte-1juoxhn"></div> <div class="p4-1 svelte-1juoxhn"></div> <div class="p4-2 svelte-1juoxhn"></div> <div class="p4-3 svelte-1juoxhn"></div> <div class="p4-4 svelte-1juoxhn"></div> <div class="p4-5 svelte-1juoxhn"></div> <div class="p5-1 svelte-1juoxhn"></div> <div class="p5-2 svelte-1juoxhn"></div> <div class="p5-3 svelte-1juoxhn"></div> <div class="p5-4 svelte-1juoxhn"></div> <div class="p5-5 svelte-1juoxhn"></div></div>`;
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
  $$payload.out += `<div class="buttons svelte-1xdc99e"><div${attr_style("", { display: "flex", width: "100%" })}><div class="dropdown svelte-1xdc99e">`;
  Button($$payload, {
    fixedWidth: "200px",
    variant: "ghost",
    flatRight: true,
    children: ($$payload2) => {
      $$payload2.out += `<div class="os-button-content svelte-1xdc99e"><div class="os-label svelte-1xdc99e">`;
      Icon($$payload2, { name: os === "mac" ? "apple" : "linux" });
      $$payload2.out += `<!----> ${escape_html(files[os].label)}</div> `;
      Icon($$payload2, { name: "chevron-down" });
      $$payload2.out += `<!----></div>`;
    }
  });
  $$payload.out += `<!----> <div${attr_class("dropdown-content svelte-1xdc99e", void 0, { "show": dropdownOpen })}><div class="dropdown-item svelte-1xdc99e">`;
  Icon($$payload, { name: "apple" });
  $$payload.out += `<!----> Mac (arm64)</div> <div class="dropdown-item svelte-1xdc99e">`;
  Icon($$payload, { name: "linux" });
  $$payload.out += `<!----> Linux (amd64)</div></div></div> <div${attr_style("", { flex: "1", width: "100%", overflow: "hidden" })}>`;
  Command($$payload, { flatLeft: true, command, fullWidth: true });
  $$payload.out += `<!----></div></div> <div class="download-instructions svelte-1xdc99e">`;
  if (os === "mac") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p>Download and open the DMG file, then drag the Radicle app to your
        Applications folder.</p>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p>Download, make the file executable with <code class="svelte-1xdc99e">chmod +x</code> , and run it.</p>`;
  }
  $$payload.out += `<!--]--></div> `;
  if (!hideSourceCode) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="or-source-code svelte-1xdc99e">Or check out the <a target="_blank" href="https://app.radicle.xyz/nodes/seed.radicle.xyz/rad:z4D5UCArafTzTQpDZNQRuqswh3ury" class="svelte-1xdc99e">source code.</a></span>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function Hero($$payload, $$props) {
  push();
  let { qrcodeVisible = void 0 } = $$props;
  $$payload.out += `<div class="container svelte-kwbcu6"><div class="hero-text svelte-kwbcu6"><span class="h1">Local-first code collaboration <br> on a peer-to-peer network</span> <span class="subtitle">Radicle Desktop lets you manage issues, review code, and stay in sync with
      your team — all on a peer-to-peer network. Say goodbye to platform
      lock-in. Radicle runs locally and syncs with your network.</span> `;
  Download($$payload, {});
  $$payload.out += `<!----></div> <div class="video-container svelte-kwbcu6"><div class="preloader svelte-kwbcu6">Loading...</div> <video id="video" class="video svelte-kwbcu6"><track kind="captions"> Your browser does not support the video tag.</video> <div class="play-button svelte-kwbcu6">▶</div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { qrcodeVisible });
  pop();
}
const svgOne = '<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect x="28" y="31" width="23" height="1" fill="#D9D9D9"/>\n<rect x="27" y="47" width="1" height="3" fill="#D9D9D9"/>\n<rect x="27" y="32" width="1" height="16" fill="#D9D9D9"/>\n<rect x="51" y="46" width="1" height="4" fill="#D9D9D9"/>\n<rect x="51" y="32" width="1" height="15" fill="#D9D9D9"/>\n<rect x="26" y="50" width="1" height="1" fill="#D9D9D9"/>\n<rect x="52" y="50" width="1" height="1" fill="#D9D9D9"/>\n<rect x="24" y="55" width="25" height="1" fill="#D9D9D9"/>\n<rect x="45" y="55" width="10" height="1" fill="#D9D9D9"/>\n<rect x="29" y="49" width="22" height="1" fill="#D9D9D9"/>\n<rect x="53" y="51" width="1" height="1" fill="#D9D9D9"/>\n<rect x="54" y="52" width="1" height="1" fill="#D9D9D9"/>\n<rect x="24" y="52" width="1" height="1" fill="#D9D9D9"/>\n<rect x="55" y="53" width="1" height="1" fill="#D9D9D9"/>\n<rect x="55" y="54" width="1" height="1" fill="#D9D9D9"/>\n<rect x="25" y="51" width="1" height="1" fill="#D9D9D9"/>\n<rect x="45" y="53" width="11" height="1" fill="#D9D9D9"/>\n<rect x="23" y="53" width="26" height="1" fill="#D9D9D9"/>\n<rect x="23" y="53" width="1" height="1" fill="#D9D9D9"/>\n<rect x="23" y="54" width="1" height="1" fill="#D9D9D9"/>\n<rect x="28" y="49" width="1" height="1" fill="#D9D9D9"/>\n<path d="M44 37H45V39H44V37Z" fill="#F9F9FB"/>\n<path d="M44 44H45V37H44V44Z" fill="#F9F9FB"/>\n<path d="M34 39H33L33 37H34L34 39Z" fill="#F9F9FB"/>\n<path d="M34 37H33L33 44H34V37Z" fill="#F9F9FB"/>\n<path d="M42 36H44V37L42 37V36Z" fill="#F9F9FB"/>\n<path d="M42 40H44V39H42V40Z" fill="#F9F9FB"/>\n<path d="M42 45H44V44H42V45Z" fill="#F9F9FB"/>\n<path d="M40 35H42V36L40 36V35Z" fill="#F9F9FB"/>\n<path d="M40 41H42V40H40V41Z" fill="#F9F9FB"/>\n<path d="M40 46H42V45H40V46Z" fill="#F9F9FB"/>\n<path d="M39 34H40V35L39 35V34Z" fill="#F9F9FB"/>\n<path d="M39 42H40V41H39V42Z" fill="#F9F9FB"/>\n<path d="M39 47H40V46H39V47Z" fill="#F9F9FB"/>\n<path d="M38 34L39 34V35L38 35V34Z" fill="#F9F9FB"/>\n<path d="M38 42L39 42V41L38 41V42Z" fill="#F9F9FB"/>\n<path d="M38 47H39V46H38V47Z" fill="#F9F9FB"/>\n<path d="M36 37L34 37L34 36L36 36V37Z" fill="#F9F9FB"/>\n<path d="M36 39H34L34 40L36 40L36 39Z" fill="#F9F9FB"/>\n<path d="M36 44H34L34 45H36V44Z" fill="#F9F9FB"/>\n<path d="M38 36L36 36V35H38L38 36Z" fill="#F9F9FB"/>\n<path d="M38 40H36V41H38L38 40Z" fill="#F9F9FB"/>\n<path d="M38 45H36L36 46H38L38 45Z" fill="#F9F9FB"/>\n</svg>\n';
const svgTwo = '<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect x="28" y="31" width="23" height="1" fill="#D9D9D9"/>\n<rect x="27" y="47" width="1" height="3" fill="#D9D9D9"/>\n<rect x="27" y="32" width="1" height="16" fill="#D9D9D9"/>\n<rect x="51" y="46" width="1" height="4" fill="#D9D9D9"/>\n<rect x="51" y="32" width="1" height="15" fill="#D9D9D9"/>\n<rect x="26" y="50" width="1" height="1" fill="#D9D9D9"/>\n<rect x="52" y="50" width="1" height="1" fill="#D9D9D9"/>\n<rect x="24" y="55" width="25" height="1" fill="#D9D9D9"/>\n<rect x="45" y="55" width="10" height="1" fill="#D9D9D9"/>\n<rect x="29" y="49" width="22" height="1" fill="#D9D9D9"/>\n<rect x="53" y="51" width="1" height="1" fill="#D9D9D9"/>\n<rect x="54" y="52" width="1" height="1" fill="#D9D9D9"/>\n<rect x="24" y="52" width="1" height="1" fill="#D9D9D9"/>\n<rect x="55" y="53" width="1" height="1" fill="#D9D9D9"/>\n<rect x="55" y="54" width="1" height="1" fill="#D9D9D9"/>\n<rect x="25" y="51" width="1" height="1" fill="#D9D9D9"/>\n<rect x="45" y="53" width="11" height="1" fill="#D9D9D9"/>\n<rect x="23" y="53" width="26" height="1" fill="#D9D9D9"/>\n<rect x="23" y="53" width="1" height="1" fill="#D9D9D9"/>\n<rect x="23" y="54" width="1" height="1" fill="#D9D9D9"/>\n<rect x="37" y="37" width="1" height="1" fill="#D9D9D9"/>\n<rect x="37" y="40" width="2" height="1" transform="rotate(90 37 40)" fill="#D9D9D9"/>\n<rect x="43" y="39" width="3" height="1" transform="rotate(90 43 39)" fill="#D9D9D9"/>\n<rect x="36" y="39" width="1" height="2" fill="#D9D9D9"/>\n<rect x="41" y="37" width="1" height="1" fill="#D9D9D9"/>\n<rect x="38" y="37" width="3" height="1" fill="#D9D9D9"/>\n<rect x="37" y="42" width="1" height="1" fill="#D9D9D9"/>\n<rect x="38" y="43" width="3" height="1" fill="#D9D9D9"/>\n<rect x="41" y="42" width="1" height="1" fill="#D9D9D9"/>\n<rect x="41" y="44" width="2" height="1" fill="#D9D9D9"/>\n<rect x="36" y="44" width="2" height="1" fill="#D9D9D9"/>\n<rect x="43" y="45" width="1" height="1" fill="#D9D9D9"/>\n<rect x="35" y="45" width="1" height="1" fill="#D9D9D9"/>\n<rect x="44" y="46" width="1" height="1" fill="#D9D9D9"/>\n<rect x="34" y="46" width="1" height="1" fill="#D9D9D9"/>\n<rect x="34" y="46" width="11" height="1" fill="#D9D9D9"/>\n<rect x="37" y="38" width="5" height="1" fill="#D9D9D9"/>\n<rect x="40" y="40" width="1" height="1" fill="#D9D9D9"/>\n<rect x="38" y="40" width="1" height="1" fill="#D9D9D9"/>\n<rect x="37" y="39" width="1" height="1" fill="#D9D9D9"/>\n<rect x="41" y="39" width="1" height="1" fill="#D9D9D9"/>\n<rect x="48" y="34" width="1" height="13" fill="#D9D9D9"/>\n<rect x="30" y="46" width="19" height="1" fill="#D9D9D9"/>\n<rect x="30" y="34" width="18" height="1" fill="#D9D9D9"/>\n<rect x="30" y="34" width="1" height="13" fill="#D9D9D9"/>\n<rect x="28" y="49" width="1" height="1" fill="#D9D9D9"/>\n</svg>\n';
const svgThree = '<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect x="28" y="31" width="23" height="1" fill="#D9D9D9"/>\n<rect x="27" y="47" width="1" height="3" fill="#D9D9D9"/>\n<rect x="27" y="32" width="1" height="16" fill="#D9D9D9"/>\n<rect x="51" y="46" width="1" height="4" fill="#D9D9D9"/>\n<rect x="51" y="32" width="1" height="15" fill="#D9D9D9"/>\n<rect x="26" y="50" width="1" height="1" fill="#D9D9D9"/>\n<rect x="52" y="50" width="1" height="1" fill="#D9D9D9"/>\n<rect x="24" y="55" width="10" height="1" fill="#D9D9D9"/>\n<rect x="45" y="55" width="10" height="1" fill="#D9D9D9"/>\n<rect x="29" y="49" width="22" height="1" fill="#D9D9D9"/>\n<rect x="53" y="51" width="1" height="1" fill="#D9D9D9"/>\n<rect x="54" y="52" width="1" height="1" fill="#D9D9D9"/>\n<rect x="24" y="52" width="1" height="1" fill="#D9D9D9"/>\n<rect x="55" y="53" width="1" height="1" fill="#D9D9D9"/>\n<rect x="55" y="54" width="1" height="1" fill="#D9D9D9"/>\n<rect x="25" y="51" width="1" height="1" fill="#D9D9D9"/>\n<rect x="45" y="53" width="11" height="1" fill="#D9D9D9"/>\n<rect x="23" y="53" width="11" height="1" fill="#D9D9D9"/>\n<rect x="23" y="53" width="1" height="1" fill="#D9D9D9"/>\n<rect x="23" y="54" width="1" height="1" fill="#D9D9D9"/>\n<rect x="39" y="52" width="1" height="7" fill="#D9D9D9"/>\n<rect x="42" y="55" width="1" height="1" fill="#D9D9D9"/>\n<rect x="36" y="55" width="7" height="1" fill="#D9D9D9"/>\n<rect x="40" y="54" width="1" height="1" fill="#D9D9D9"/>\n<rect x="42" y="52" width="1" height="1" fill="#D9D9D9"/>\n<rect x="38" y="54" width="1" height="1" fill="#D9D9D9"/>\n<rect x="40" y="56" width="1" height="1" fill="#D9D9D9"/>\n<rect x="38" y="56" width="1" height="1" fill="#D9D9D9"/>\n<rect x="42" y="58" width="1" height="1" fill="#D9D9D9"/>\n<rect x="36" y="58" width="1" height="1" fill="#D9D9D9"/>\n<rect x="36" y="52" width="1" height="1" fill="#D9D9D9"/>\n<rect x="37" y="37" width="1" height="1" fill="#D9D9D9"/>\n<rect x="37" y="40" width="2" height="1" transform="rotate(90 37 40)" fill="#D9D9D9"/>\n<rect x="43" y="39" width="3" height="1" transform="rotate(90 43 39)" fill="#D9D9D9"/>\n<rect x="36" y="39" width="1" height="2" fill="#D9D9D9"/>\n<rect x="41" y="37" width="1" height="1" fill="#D9D9D9"/>\n<rect x="38" y="37" width="3" height="1" fill="#D9D9D9"/>\n<rect x="37" y="42" width="1" height="1" fill="#D9D9D9"/>\n<rect x="38" y="43" width="3" height="1" fill="#D9D9D9"/>\n<rect x="41" y="42" width="1" height="1" fill="#D9D9D9"/>\n<rect x="41" y="44" width="2" height="1" fill="#D9D9D9"/>\n<rect x="36" y="44" width="2" height="1" fill="#D9D9D9"/>\n<rect x="43" y="45" width="1" height="1" fill="#D9D9D9"/>\n<rect x="35" y="45" width="1" height="1" fill="#D9D9D9"/>\n<rect x="44" y="46" width="1" height="1" fill="#D9D9D9"/>\n<rect x="34" y="46" width="1" height="1" fill="#D9D9D9"/>\n<rect x="34" y="46" width="11" height="1" fill="#D9D9D9"/>\n<rect x="37" y="38" width="5" height="1" fill="#D9D9D9"/>\n<rect x="40" y="41" width="1" height="1" fill="#D9D9D9"/>\n<rect x="38" y="41" width="1" height="1" fill="#D9D9D9"/>\n<rect x="37" y="39" width="1" height="1" fill="#D9D9D9"/>\n<rect x="41" y="39" width="1" height="1" fill="#D9D9D9"/>\n<rect x="48" y="34" width="1" height="13" fill="#D9D9D9"/>\n<rect x="30" y="46" width="19" height="1" fill="#D9D9D9"/>\n<rect x="30" y="34" width="18" height="1" fill="#D9D9D9"/>\n<rect x="30" y="34" width="1" height="13" fill="#D9D9D9"/>\n<rect x="28" y="49" width="1" height="1" fill="#D9D9D9"/>\n</svg>\n';
const svgFour = '<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect x="28" y="31" width="23" height="1" fill="#D9D9D9"/>\n<rect x="27" y="47" width="1" height="3" fill="#D9D9D9"/>\n<rect x="27" y="32" width="1" height="7" fill="#D9D9D9"/>\n<rect x="51" y="46" width="1" height="4" fill="#D9D9D9"/>\n<rect x="51" y="32" width="1" height="9" fill="#D9D9D9"/>\n<rect x="26" y="50" width="1" height="1" fill="#D9D9D9"/>\n<rect x="52" y="50" width="1" height="1" fill="#D9D9D9"/>\n<rect x="24" y="55" width="10" height="1" fill="#D9D9D9"/>\n<rect x="45" y="55" width="10" height="1" fill="#D9D9D9"/>\n<rect x="33" y="49" width="11" height="1" fill="#D9D9D9"/>\n<rect x="53" y="51" width="1" height="1" fill="#D9D9D9"/>\n<rect x="54" y="52" width="1" height="1" fill="#D9D9D9"/>\n<rect x="24" y="52" width="1" height="1" fill="#D9D9D9"/>\n<rect x="55" y="53" width="1" height="1" fill="#D9D9D9"/>\n<rect x="55" y="54" width="1" height="1" fill="#D9D9D9"/>\n<rect x="25" y="51" width="1" height="1" fill="#D9D9D9"/>\n<rect x="45" y="53" width="11" height="1" fill="#D9D9D9"/>\n<rect x="23" y="53" width="11" height="1" fill="#D9D9D9"/>\n<rect x="23" y="53" width="1" height="1" fill="#D9D9D9"/>\n<rect x="23" y="54" width="1" height="1" fill="#D9D9D9"/>\n<rect x="39" y="52" width="1" height="7" fill="#D9D9D9"/>\n<rect x="42" y="55" width="1" height="1" fill="#D9D9D9"/>\n<rect x="36" y="55" width="7" height="1" fill="#D9D9D9"/>\n<rect x="40" y="54" width="1" height="1" fill="#D9D9D9"/>\n<rect x="42" y="52" width="1" height="1" fill="#D9D9D9"/>\n<rect x="38" y="54" width="1" height="1" fill="#D9D9D9"/>\n<rect x="40" y="56" width="1" height="1" fill="#D9D9D9"/>\n<rect x="38" y="56" width="1" height="1" fill="#D9D9D9"/>\n<rect x="42" y="58" width="1" height="1" fill="#D9D9D9"/>\n<rect x="36" y="58" width="1" height="1" fill="#D9D9D9"/>\n<rect x="36" y="52" width="1" height="1" fill="#D9D9D9"/>\n<rect x="18" y="21" width="1" height="7" fill="#D9D9D9"/>\n<rect x="21" y="24" width="1" height="1" fill="#D9D9D9"/>\n<rect x="15" y="24" width="7" height="1" fill="#D9D9D9"/>\n<rect x="19" y="23" width="1" height="1" fill="#D9D9D9"/>\n<rect x="21" y="21" width="1" height="1" fill="#D9D9D9"/>\n<rect x="17" y="23" width="1" height="1" fill="#D9D9D9"/>\n<rect x="19" y="25" width="1" height="1" fill="#D9D9D9"/>\n<rect x="17" y="25" width="1" height="1" fill="#D9D9D9"/>\n<rect x="21" y="27" width="1" height="1" fill="#D9D9D9"/>\n<rect x="15" y="27" width="1" height="1" fill="#D9D9D9"/>\n<rect x="15" y="21" width="1" height="1" fill="#D9D9D9"/>\n<rect x="61" y="29" width="1" height="7" fill="#D9D9D9"/>\n<rect x="64" y="32" width="1" height="1" fill="#D9D9D9"/>\n<rect x="58" y="32" width="7" height="1" fill="#D9D9D9"/>\n<rect x="62" y="31" width="1" height="1" fill="#D9D9D9"/>\n<rect x="64" y="29" width="1" height="1" fill="#D9D9D9"/>\n<rect x="60" y="31" width="1" height="1" fill="#D9D9D9"/>\n<rect x="62" y="33" width="1" height="1" fill="#D9D9D9"/>\n<rect x="60" y="33" width="1" height="1" fill="#D9D9D9"/>\n<rect x="64" y="35" width="1" height="1" fill="#D9D9D9"/>\n<rect x="58" y="35" width="1" height="1" fill="#D9D9D9"/>\n<rect x="58" y="29" width="1" height="1" fill="#D9D9D9"/>\n<rect x="37" y="37" width="1" height="1" fill="#D9D9D9"/>\n<rect x="37" y="40" width="2" height="1" transform="rotate(90 37 40)" fill="#D9D9D9"/>\n<rect x="43" y="39" width="3" height="1" transform="rotate(90 43 39)" fill="#D9D9D9"/>\n<rect x="36" y="39" width="1" height="2" fill="#D9D9D9"/>\n<rect x="41" y="37" width="1" height="1" fill="#D9D9D9"/>\n<rect x="38" y="37" width="3" height="1" fill="#D9D9D9"/>\n<rect x="37" y="42" width="1" height="1" fill="#D9D9D9"/>\n<rect x="38" y="43" width="3" height="1" fill="#D9D9D9"/>\n<rect x="41" y="42" width="1" height="1" fill="#D9D9D9"/>\n<rect x="41" y="44" width="2" height="1" fill="#D9D9D9"/>\n<rect x="36" y="44" width="2" height="1" fill="#D9D9D9"/>\n<rect x="43" y="45" width="1" height="1" fill="#D9D9D9"/>\n<rect x="35" y="45" width="1" height="1" fill="#D9D9D9"/>\n<rect x="44" y="46" width="1" height="1" fill="#D9D9D9"/>\n<rect x="34" y="46" width="1" height="1" fill="#D9D9D9"/>\n<rect x="34" y="46" width="11" height="1" fill="#D9D9D9"/>\n<rect x="37" y="38" width="5" height="1" fill="#D9D9D9"/>\n<rect x="40" y="40" width="1" height="1" fill="#D9D9D9"/>\n<rect x="38" y="40" width="1" height="1" fill="#D9D9D9"/>\n<rect x="37" y="39" width="1" height="1" fill="#D9D9D9"/>\n<rect x="41" y="39" width="1" height="1" fill="#D9D9D9"/>\n<rect x="51" y="44" width="1" height="1" transform="rotate(90 51 44)" fill="#D9D9D9"/>\n<rect x="57" y="38" width="1" height="1" transform="rotate(90 57 38)" fill="#D9D9D9"/>\n<rect x="50" y="45" width="1" height="1" transform="rotate(90 50 45)" fill="#D9D9D9"/>\n<rect x="56" y="39" width="1" height="1" transform="rotate(90 56 39)" fill="#D9D9D9"/>\n<rect x="49" y="46" width="1" height="1" transform="rotate(90 49 46)" fill="#D9D9D9"/>\n<rect x="55" y="40" width="1" height="1" transform="rotate(90 55 40)" fill="#D9D9D9"/>\n<rect x="48" y="47" width="1" height="1" transform="rotate(90 48 47)" fill="#D9D9D9"/>\n<rect x="54" y="41" width="1" height="1" transform="rotate(90 54 41)" fill="#D9D9D9"/>\n<rect x="47" y="48" width="1" height="1" transform="rotate(90 47 48)" fill="#D9D9D9"/>\n<rect x="53" y="42" width="1" height="1" transform="rotate(90 53 42)" fill="#D9D9D9"/>\n<rect x="46" y="49" width="1" height="1" transform="rotate(90 46 49)" fill="#D9D9D9"/>\n<rect x="52" y="43" width="1" height="1" transform="rotate(90 52 43)" fill="#D9D9D9"/>\n<rect width="1" height="4.85714" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 35.5714 25)" fill="#D9D9D9"/>\n<rect width="1" height="4.85714" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 40.4285 26)" fill="#D9D9D9"/>\n<rect width="1" height="4.85714" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 45.2857 27)" fill="#D9D9D9"/>\n<rect width="1" height="4.85714" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 50.1428 28)" fill="#D9D9D9"/>\n<rect width="1" height="4.85714" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 55 29)" fill="#D9D9D9"/>\n<rect width="1" height="4.85714" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 30.7143 24)" fill="#D9D9D9"/>\n<rect x="23" y="34" width="1" height="2" transform="rotate(180 23 34)" fill="#D9D9D9"/>\n<rect x="29" y="46" width="1" height="2" transform="rotate(180 29 46)" fill="#D9D9D9"/>\n<rect x="24" y="36" width="1" height="2" transform="rotate(180 24 36)" fill="#D9D9D9"/>\n<rect x="30" y="48" width="1" height="2" transform="rotate(180 30 48)" fill="#D9D9D9"/>\n<rect x="25" y="38" width="1" height="2" transform="rotate(180 25 38)" fill="#D9D9D9"/>\n<rect x="31" y="50" width="1" height="2" transform="rotate(180 31 50)" fill="#D9D9D9"/>\n<rect x="32" y="52" width="1" height="2" transform="rotate(180 32 52)" fill="#D9D9D9"/>\n<rect x="26" y="40" width="1" height="2" transform="rotate(180 26 40)" fill="#D9D9D9"/>\n<rect x="27" y="42" width="1" height="2" transform="rotate(180 27 42)" fill="#D9D9D9"/>\n<rect x="22" y="32" width="1" height="2" transform="rotate(180 22 32)" fill="#D9D9D9"/>\n<rect x="28" y="44" width="1" height="2" transform="rotate(180 28 44)" fill="#D9D9D9"/>\n<rect x="48" y="34" width="1" height="10" fill="#D9D9D9"/>\n<rect x="31" y="46" width="15" height="1" fill="#D9D9D9"/>\n<rect x="30" y="34" width="18" height="1" fill="#D9D9D9"/>\n<rect x="30" y="34" width="1" height="11" fill="#D9D9D9"/>\n<rect x="28" y="49" width="1" height="1" fill="#D9D9D9"/>\n<rect x="48" y="49" width="3" height="1" fill="#D9D9D9"/>\n</svg>\n';
function Outline($$payload, $$props) {
  const {
    fullWidth = false,
    flatLeft = false,
    flatTop = false,
    flatBottom = true
  } = $$props;
  $$payload.out += `<div${attr_class("wrapper svelte-1s8zezk", void 0, { "full-width": fullWidth })}><div${attr_style("", { display: "flex" })}>`;
  if (!flatTop) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr_style("", { width: "2px", height: "2px" })}></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="cmd-horizontal svelte-1s8zezk"></div> `;
  if (!flatTop) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr_style("", { width: "2px", height: "2px" })}></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="cmd-center svelte-1s8zezk"><div class="cmd-vertical svelte-1s8zezk"></div> <div class="inner-box svelte-1s8zezk"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div> <div class="cmd-vertical svelte-1s8zezk"></div></div> <div${attr_style("", { display: "flex" })}>`;
  if (!flatBottom) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr_style("", { width: "2px", height: "2px" })}></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="cmd-horizontal svelte-1s8zezk"></div> `;
  if (!flatBottom) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr_style("", { width: "2px", height: "2px" })}></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
}
function AboutRadicle($$payload, $$props) {
  push();
  let features = [
    {
      title: "Install the Radicle Desktop App",
      description: "Install the radicle desktop app on your computer. Find your package or build it from source.",
      svgId: "svg1"
    },
    {
      title: "Create your identity",
      description: "This identity is how you will be known on the network. It's yours and yours only, stored safely on your computer.",
      svgId: "svg2"
    },
    {
      title: "Install and start your node",
      description: "Your node is on your computer. Together with your identity they allow you to interact with the network.",
      svgId: "svg3"
    },
    {
      title: "Fetch from or push to the network",
      description: "Once connected to the network, share your contributions or access the work of others. ",
      svgId: "svg4"
    }
  ];
  let selectedFeatureIndex = 0;
  $$payload.out += `<div class="container svelte-10e1vol"><div class="outline-wrapper svelte-10e1vol">`;
  Outline($$payload, {
    fullWidth: true,
    children: ($$payload2) => {
      const each_array = ensure_array_like(features);
      $$payload2.out += `<div class="float-background svelte-10e1vol"><div class="title-block svelte-10e1vol"><span class="h2">Getting started</span> <span class="subtitle">Get on the network in 4 easy steps.</span></div> <div class="widget-container svelte-10e1vol"><div class="blocks-container svelte-10e1vol"><!--[-->`;
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let feature = each_array[index];
        $$payload2.out += `<div${attr_class("feature-box svelte-10e1vol", void 0, { "expanded": selectedFeatureIndex === index })}><div class="feature-title svelte-10e1vol">${escape_html(feature.title)}</div> `;
        if (selectedFeatureIndex === index) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<div class="feature-description svelte-10e1vol">${html(feature.description)} `;
          if (index === 0) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<a href="#" class="download-link svelte-10e1vol">Download instructions →</a>`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--></div>`;
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]--></div>`;
      }
      $$payload2.out += `<!--]--></div> <div class="image-container svelte-10e1vol">`;
      if (features[selectedFeatureIndex].svgId === "svg1") {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `${html(svgOne)}`;
      } else if (features[selectedFeatureIndex].svgId === "svg2") {
        $$payload2.out += "<!--[1-->";
        $$payload2.out += `${html(svgTwo)}`;
      } else if (features[selectedFeatureIndex].svgId === "svg3") {
        $$payload2.out += "<!--[2-->";
        $$payload2.out += `${html(svgThree)}`;
      } else {
        $$payload2.out += "<!--[!-->";
        $$payload2.out += `${html(svgFour)}`;
      }
      $$payload2.out += `<!--]--></div></div></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
  pop();
}
function QR($$payload) {
  $$payload.out += `<svg width="296" height="296" viewBox="0 0 296 296" xmlns="http://www.w3.org/2000/svg" class="svelte-1mkg3a8"><defs><rect id="p" width="8" height="8"></rect></defs><g fill="currentColor"><use xlink:href="#p" x="32" y="32"></use><use xlink:href="#p" x="32" y="40"></use><use xlink:href="#p" x="32" y="48"></use><use xlink:href="#p" x="32" y="56"></use><use xlink:href="#p" x="32" y="64"></use><use xlink:href="#p" x="32" y="72"></use><use xlink:href="#p" x="32" y="80"></use><use xlink:href="#p" x="32" y="96"></use><use xlink:href="#p" x="32" y="120"></use><use xlink:href="#p" x="32" y="128"></use><use xlink:href="#p" x="32" y="160"></use><use xlink:href="#p" x="32" y="208"></use><use xlink:href="#p" x="32" y="216"></use><use xlink:href="#p" x="32" y="224"></use><use xlink:href="#p" x="32" y="232"></use><use xlink:href="#p" x="32" y="240"></use><use xlink:href="#p" x="32" y="248"></use><use xlink:href="#p" x="32" y="256"></use><use xlink:href="#p" x="40" y="32"></use><use xlink:href="#p" x="40" y="80"></use><use xlink:href="#p" x="40" y="96"></use><use xlink:href="#p" x="40" y="104"></use><use xlink:href="#p" x="40" y="120"></use><use xlink:href="#p" x="40" y="144"></use><use xlink:href="#p" x="40" y="168"></use><use xlink:href="#p" x="40" y="208"></use><use xlink:href="#p" x="40" y="256"></use><use xlink:href="#p" x="48" y="32"></use><use xlink:href="#p" x="48" y="48"></use><use xlink:href="#p" x="48" y="56"></use><use xlink:href="#p" x="48" y="64"></use><use xlink:href="#p" x="48" y="80"></use><use xlink:href="#p" x="48" y="104"></use><use xlink:href="#p" x="48" y="160"></use><use xlink:href="#p" x="48" y="168"></use><use xlink:href="#p" x="48" y="176"></use><use xlink:href="#p" x="48" y="184"></use><use xlink:href="#p" x="48" y="192"></use><use xlink:href="#p" x="48" y="208"></use><use xlink:href="#p" x="48" y="224"></use><use xlink:href="#p" x="48" y="232"></use><use xlink:href="#p" x="48" y="240"></use><use xlink:href="#p" x="48" y="256"></use><use xlink:href="#p" x="56" y="32"></use><use xlink:href="#p" x="56" y="48"></use><use xlink:href="#p" x="56" y="56"></use><use xlink:href="#p" x="56" y="64"></use><use xlink:href="#p" x="56" y="80"></use><use xlink:href="#p" x="56" y="96"></use><use xlink:href="#p" x="56" y="120"></use><use xlink:href="#p" x="56" y="160"></use><use xlink:href="#p" x="56" y="176"></use><use xlink:href="#p" x="56" y="208"></use><use xlink:href="#p" x="56" y="224"></use><use xlink:href="#p" x="56" y="232"></use><use xlink:href="#p" x="56" y="240"></use><use xlink:href="#p" x="56" y="256"></use><use xlink:href="#p" x="64" y="32"></use><use xlink:href="#p" x="64" y="48"></use><use xlink:href="#p" x="64" y="56"></use><use xlink:href="#p" x="64" y="64"></use><use xlink:href="#p" x="64" y="80"></use><use xlink:href="#p" x="64" y="96"></use><use xlink:href="#p" x="64" y="104"></use><use xlink:href="#p" x="64" y="120"></use><use xlink:href="#p" x="64" y="144"></use><use xlink:href="#p" x="64" y="152"></use><use xlink:href="#p" x="64" y="176"></use><use xlink:href="#p" x="64" y="184"></use><use xlink:href="#p" x="64" y="208"></use><use xlink:href="#p" x="64" y="224"></use><use xlink:href="#p" x="64" y="232"></use><use xlink:href="#p" x="64" y="240"></use><use xlink:href="#p" x="64" y="256"></use><use xlink:href="#p" x="72" y="32"></use><use xlink:href="#p" x="72" y="80"></use><use xlink:href="#p" x="72" y="112"></use><use xlink:href="#p" x="72" y="136"></use><use xlink:href="#p" x="72" y="144"></use><use xlink:href="#p" x="72" y="152"></use><use xlink:href="#p" x="72" y="168"></use><use xlink:href="#p" x="72" y="184"></use><use xlink:href="#p" x="72" y="192"></use><use xlink:href="#p" x="72" y="208"></use><use xlink:href="#p" x="72" y="256"></use><use xlink:href="#p" x="80" y="32"></use><use xlink:href="#p" x="80" y="40"></use><use xlink:href="#p" x="80" y="48"></use><use xlink:href="#p" x="80" y="56"></use><use xlink:href="#p" x="80" y="64"></use><use xlink:href="#p" x="80" y="72"></use><use xlink:href="#p" x="80" y="80"></use><use xlink:href="#p" x="80" y="96"></use><use xlink:href="#p" x="80" y="112"></use><use xlink:href="#p" x="80" y="128"></use><use xlink:href="#p" x="80" y="144"></use><use xlink:href="#p" x="80" y="160"></use><use xlink:href="#p" x="80" y="176"></use><use xlink:href="#p" x="80" y="192"></use><use xlink:href="#p" x="80" y="208"></use><use xlink:href="#p" x="80" y="216"></use><use xlink:href="#p" x="80" y="224"></use><use xlink:href="#p" x="80" y="232"></use><use xlink:href="#p" x="80" y="240"></use><use xlink:href="#p" x="80" y="248"></use><use xlink:href="#p" x="80" y="256"></use><use xlink:href="#p" x="88" y="112"></use><use xlink:href="#p" x="88" y="128"></use><use xlink:href="#p" x="88" y="136"></use><use xlink:href="#p" x="88" y="144"></use><use xlink:href="#p" x="88" y="152"></use><use xlink:href="#p" x="88" y="184"></use><use xlink:href="#p" x="88" y="192"></use><use xlink:href="#p" x="96" y="32"></use><use xlink:href="#p" x="96" y="80"></use><use xlink:href="#p" x="96" y="88"></use><use xlink:href="#p" x="96" y="176"></use><use xlink:href="#p" x="96" y="200"></use><use xlink:href="#p" x="96" y="224"></use><use xlink:href="#p" x="96" y="232"></use><use xlink:href="#p" x="96" y="248"></use><use xlink:href="#p" x="96" y="256"></use><use xlink:href="#p" x="104" y="32"></use><use xlink:href="#p" x="104" y="48"></use><use xlink:href="#p" x="104" y="72"></use><use xlink:href="#p" x="104" y="88"></use><use xlink:href="#p" x="104" y="96"></use><use xlink:href="#p" x="104" y="112"></use><use xlink:href="#p" x="104" y="128"></use><use xlink:href="#p" x="104" y="136"></use><use xlink:href="#p" x="104" y="200"></use><use xlink:href="#p" x="104" y="208"></use><use xlink:href="#p" x="104" y="216"></use><use xlink:href="#p" x="104" y="224"></use><use xlink:href="#p" x="104" y="232"></use><use xlink:href="#p" x="104" y="248"></use><use xlink:href="#p" x="104" y="256"></use><use xlink:href="#p" x="112" y="32"></use><use xlink:href="#p" x="112" y="56"></use><use xlink:href="#p" x="112" y="64"></use><use xlink:href="#p" x="112" y="80"></use><use xlink:href="#p" x="112" y="104"></use><use xlink:href="#p" x="112" y="128"></use><use xlink:href="#p" x="112" y="136"></use><use xlink:href="#p" x="112" y="176"></use><use xlink:href="#p" x="112" y="184"></use><use xlink:href="#p" x="112" y="192"></use><use xlink:href="#p" x="112" y="224"></use><use xlink:href="#p" x="112" y="240"></use><use xlink:href="#p" x="112" y="248"></use><use xlink:href="#p" x="112" y="256"></use><use xlink:href="#p" x="120" y="32"></use><use xlink:href="#p" x="120" y="40"></use><use xlink:href="#p" x="120" y="48"></use><use xlink:href="#p" x="120" y="56"></use><use xlink:href="#p" x="120" y="64"></use><use xlink:href="#p" x="120" y="72"></use><use xlink:href="#p" x="120" y="160"></use><use xlink:href="#p" x="120" y="176"></use><use xlink:href="#p" x="120" y="184"></use><use xlink:href="#p" x="120" y="200"></use><use xlink:href="#p" x="120" y="208"></use><use xlink:href="#p" x="120" y="216"></use><use xlink:href="#p" x="120" y="224"></use><use xlink:href="#p" x="120" y="232"></use><use xlink:href="#p" x="120" y="256"></use><use xlink:href="#p" x="128" y="40"></use><use xlink:href="#p" x="128" y="64"></use><use xlink:href="#p" x="128" y="80"></use><use xlink:href="#p" x="128" y="88"></use><use xlink:href="#p" x="128" y="96"></use><use xlink:href="#p" x="128" y="112"></use><use xlink:href="#p" x="128" y="128"></use><use xlink:href="#p" x="128" y="136"></use><use xlink:href="#p" x="128" y="144"></use><use xlink:href="#p" x="128" y="184"></use><use xlink:href="#p" x="128" y="224"></use><use xlink:href="#p" x="128" y="240"></use><use xlink:href="#p" x="136" y="32"></use><use xlink:href="#p" x="136" y="40"></use><use xlink:href="#p" x="136" y="48"></use><use xlink:href="#p" x="136" y="56"></use><use xlink:href="#p" x="136" y="64"></use><use xlink:href="#p" x="136" y="88"></use><use xlink:href="#p" x="136" y="136"></use><use xlink:href="#p" x="136" y="160"></use><use xlink:href="#p" x="136" y="176"></use><use xlink:href="#p" x="136" y="184"></use><use xlink:href="#p" x="136" y="208"></use><use xlink:href="#p" x="136" y="240"></use><use xlink:href="#p" x="136" y="256"></use><use xlink:href="#p" x="144" y="32"></use><use xlink:href="#p" x="144" y="48"></use><use xlink:href="#p" x="144" y="56"></use><use xlink:href="#p" x="144" y="64"></use><use xlink:href="#p" x="144" y="72"></use><use xlink:href="#p" x="144" y="80"></use><use xlink:href="#p" x="144" y="96"></use><use xlink:href="#p" x="144" y="120"></use><use xlink:href="#p" x="144" y="192"></use><use xlink:href="#p" x="144" y="208"></use><use xlink:href="#p" x="144" y="224"></use><use xlink:href="#p" x="144" y="232"></use><use xlink:href="#p" x="144" y="240"></use><use xlink:href="#p" x="152" y="48"></use><use xlink:href="#p" x="152" y="56"></use><use xlink:href="#p" x="152" y="88"></use><use xlink:href="#p" x="152" y="96"></use><use xlink:href="#p" x="152" y="104"></use><use xlink:href="#p" x="152" y="112"></use><use xlink:href="#p" x="152" y="136"></use><use xlink:href="#p" x="152" y="144"></use><use xlink:href="#p" x="152" y="160"></use><use xlink:href="#p" x="152" y="168"></use><use xlink:href="#p" x="152" y="176"></use><use xlink:href="#p" x="152" y="192"></use><use xlink:href="#p" x="152" y="200"></use><use xlink:href="#p" x="152" y="208"></use><use xlink:href="#p" x="152" y="216"></use><use xlink:href="#p" x="152" y="224"></use><use xlink:href="#p" x="152" y="232"></use><use xlink:href="#p" x="152" y="240"></use><use xlink:href="#p" x="152" y="248"></use><use xlink:href="#p" x="160" y="56"></use><use xlink:href="#p" x="160" y="64"></use><use xlink:href="#p" x="160" y="80"></use><use xlink:href="#p" x="160" y="96"></use><use xlink:href="#p" x="160" y="112"></use><use xlink:href="#p" x="160" y="120"></use><use xlink:href="#p" x="160" y="128"></use><use xlink:href="#p" x="160" y="136"></use><use xlink:href="#p" x="160" y="144"></use><use xlink:href="#p" x="160" y="192"></use><use xlink:href="#p" x="160" y="216"></use><use xlink:href="#p" x="160" y="232"></use><use xlink:href="#p" x="168" y="40"></use><use xlink:href="#p" x="168" y="56"></use><use xlink:href="#p" x="168" y="72"></use><use xlink:href="#p" x="168" y="96"></use><use xlink:href="#p" x="168" y="104"></use><use xlink:href="#p" x="168" y="112"></use><use xlink:href="#p" x="168" y="120"></use><use xlink:href="#p" x="168" y="136"></use><use xlink:href="#p" x="168" y="144"></use><use xlink:href="#p" x="168" y="176"></use><use xlink:href="#p" x="168" y="192"></use><use xlink:href="#p" x="168" y="200"></use><use xlink:href="#p" x="168" y="208"></use><use xlink:href="#p" x="168" y="216"></use><use xlink:href="#p" x="168" y="232"></use><use xlink:href="#p" x="168" y="240"></use><use xlink:href="#p" x="176" y="32"></use><use xlink:href="#p" x="176" y="48"></use><use xlink:href="#p" x="176" y="64"></use><use xlink:href="#p" x="176" y="80"></use><use xlink:href="#p" x="176" y="88"></use><use xlink:href="#p" x="176" y="96"></use><use xlink:href="#p" x="176" y="104"></use><use xlink:href="#p" x="176" y="136"></use><use xlink:href="#p" x="176" y="144"></use><use xlink:href="#p" x="176" y="168"></use><use xlink:href="#p" x="176" y="184"></use><use xlink:href="#p" x="176" y="200"></use><use xlink:href="#p" x="176" y="232"></use><use xlink:href="#p" x="176" y="248"></use><use xlink:href="#p" x="176" y="256"></use><use xlink:href="#p" x="184" y="40"></use><use xlink:href="#p" x="184" y="48"></use><use xlink:href="#p" x="184" y="64"></use><use xlink:href="#p" x="184" y="104"></use><use xlink:href="#p" x="184" y="144"></use><use xlink:href="#p" x="184" y="152"></use><use xlink:href="#p" x="184" y="160"></use><use xlink:href="#p" x="184" y="168"></use><use xlink:href="#p" x="184" y="176"></use><use xlink:href="#p" x="184" y="192"></use><use xlink:href="#p" x="184" y="208"></use><use xlink:href="#p" x="184" y="216"></use><use xlink:href="#p" x="184" y="224"></use><use xlink:href="#p" x="184" y="232"></use><use xlink:href="#p" x="192" y="40"></use><use xlink:href="#p" x="192" y="48"></use><use xlink:href="#p" x="192" y="56"></use><use xlink:href="#p" x="192" y="72"></use><use xlink:href="#p" x="192" y="80"></use><use xlink:href="#p" x="192" y="104"></use><use xlink:href="#p" x="192" y="120"></use><use xlink:href="#p" x="192" y="128"></use><use xlink:href="#p" x="192" y="144"></use><use xlink:href="#p" x="192" y="160"></use><use xlink:href="#p" x="192" y="168"></use><use xlink:href="#p" x="192" y="184"></use><use xlink:href="#p" x="192" y="192"></use><use xlink:href="#p" x="192" y="200"></use><use xlink:href="#p" x="192" y="208"></use><use xlink:href="#p" x="192" y="216"></use><use xlink:href="#p" x="192" y="224"></use><use xlink:href="#p" x="192" y="240"></use><use xlink:href="#p" x="192" y="256"></use><use xlink:href="#p" x="200" y="192"></use><use xlink:href="#p" x="200" y="224"></use><use xlink:href="#p" x="200" y="232"></use><use xlink:href="#p" x="208" y="32"></use><use xlink:href="#p" x="208" y="40"></use><use xlink:href="#p" x="208" y="48"></use><use xlink:href="#p" x="208" y="56"></use><use xlink:href="#p" x="208" y="64"></use><use xlink:href="#p" x="208" y="72"></use><use xlink:href="#p" x="208" y="80"></use><use xlink:href="#p" x="208" y="96"></use><use xlink:href="#p" x="208" y="112"></use><use xlink:href="#p" x="208" y="128"></use><use xlink:href="#p" x="208" y="136"></use><use xlink:href="#p" x="208" y="144"></use><use xlink:href="#p" x="208" y="152"></use><use xlink:href="#p" x="208" y="192"></use><use xlink:href="#p" x="208" y="208"></use><use xlink:href="#p" x="208" y="224"></use><use xlink:href="#p" x="216" y="32"></use><use xlink:href="#p" x="216" y="80"></use><use xlink:href="#p" x="216" y="104"></use><use xlink:href="#p" x="216" y="128"></use><use xlink:href="#p" x="216" y="136"></use><use xlink:href="#p" x="216" y="152"></use><use xlink:href="#p" x="216" y="160"></use><use xlink:href="#p" x="216" y="192"></use><use xlink:href="#p" x="216" y="224"></use><use xlink:href="#p" x="216" y="240"></use><use xlink:href="#p" x="216" y="248"></use><use xlink:href="#p" x="216" y="256"></use><use xlink:href="#p" x="224" y="32"></use><use xlink:href="#p" x="224" y="48"></use><use xlink:href="#p" x="224" y="56"></use><use xlink:href="#p" x="224" y="64"></use><use xlink:href="#p" x="224" y="80"></use><use xlink:href="#p" x="224" y="104"></use><use xlink:href="#p" x="224" y="112"></use><use xlink:href="#p" x="224" y="120"></use><use xlink:href="#p" x="224" y="136"></use><use xlink:href="#p" x="224" y="144"></use><use xlink:href="#p" x="224" y="168"></use><use xlink:href="#p" x="224" y="176"></use><use xlink:href="#p" x="224" y="184"></use><use xlink:href="#p" x="224" y="192"></use><use xlink:href="#p" x="224" y="200"></use><use xlink:href="#p" x="224" y="208"></use><use xlink:href="#p" x="224" y="216"></use><use xlink:href="#p" x="224" y="224"></use><use xlink:href="#p" x="224" y="240"></use><use xlink:href="#p" x="224" y="256"></use><use xlink:href="#p" x="232" y="32"></use><use xlink:href="#p" x="232" y="48"></use><use xlink:href="#p" x="232" y="56"></use><use xlink:href="#p" x="232" y="64"></use><use xlink:href="#p" x="232" y="80"></use><use xlink:href="#p" x="232" y="120"></use><use xlink:href="#p" x="232" y="136"></use><use xlink:href="#p" x="232" y="160"></use><use xlink:href="#p" x="232" y="176"></use><use xlink:href="#p" x="232" y="184"></use><use xlink:href="#p" x="232" y="192"></use><use xlink:href="#p" x="232" y="200"></use><use xlink:href="#p" x="232" y="208"></use><use xlink:href="#p" x="232" y="224"></use><use xlink:href="#p" x="232" y="248"></use><use xlink:href="#p" x="240" y="32"></use><use xlink:href="#p" x="240" y="48"></use><use xlink:href="#p" x="240" y="56"></use><use xlink:href="#p" x="240" y="64"></use><use xlink:href="#p" x="240" y="80"></use><use xlink:href="#p" x="240" y="104"></use><use xlink:href="#p" x="240" y="112"></use><use xlink:href="#p" x="240" y="136"></use><use xlink:href="#p" x="240" y="144"></use><use xlink:href="#p" x="240" y="152"></use><use xlink:href="#p" x="240" y="168"></use><use xlink:href="#p" x="240" y="184"></use><use xlink:href="#p" x="240" y="192"></use><use xlink:href="#p" x="240" y="240"></use><use xlink:href="#p" x="240" y="248"></use><use xlink:href="#p" x="248" y="32"></use><use xlink:href="#p" x="248" y="80"></use><use xlink:href="#p" x="248" y="104"></use><use xlink:href="#p" x="248" y="136"></use><use xlink:href="#p" x="248" y="168"></use><use xlink:href="#p" x="248" y="192"></use><use xlink:href="#p" x="248" y="216"></use><use xlink:href="#p" x="248" y="240"></use><use xlink:href="#p" x="256" y="32"></use><use xlink:href="#p" x="256" y="40"></use><use xlink:href="#p" x="256" y="48"></use><use xlink:href="#p" x="256" y="56"></use><use xlink:href="#p" x="256" y="64"></use><use xlink:href="#p" x="256" y="72"></use><use xlink:href="#p" x="256" y="80"></use><use xlink:href="#p" x="256" y="96"></use><use xlink:href="#p" x="256" y="120"></use><use xlink:href="#p" x="256" y="128"></use><use xlink:href="#p" x="256" y="136"></use><use xlink:href="#p" x="256" y="144"></use><use xlink:href="#p" x="256" y="152"></use><use xlink:href="#p" x="256" y="176"></use><use xlink:href="#p" x="256" y="232"></use><use xlink:href="#p" x="256" y="240"></use><use xlink:href="#p" x="256" y="248"></use></g><g></g></svg>`;
}
function UserTest($$payload) {
  $$payload.out += `<div class="container svelte-1ouffmp">`;
  QR($$payload);
  $$payload.out += `<!----> <div class="txt-small" style="display: flex; flex-direction: column; gap: 0.25rem;"><span class="txt-semibold">Help Shape Our App's Future!</span> <span>Join our user tests and share your insights.</span> <a style="width:100%" href="https://calendly.com/dnl-klmn/radicle-user-test" target="_blank" rel="noopener">Sign Up Now!</a></div></div>`;
}
function _page($$payload) {
  let qrcodeVisible = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Hero($$payload2, {
      get qrcodeVisible() {
        return qrcodeVisible;
      },
      set qrcodeVisible($$value) {
        qrcodeVisible = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> `;
    AboutRadicle($$payload2);
    $$payload2.out += `<!----> `;
    Features($$payload2);
    $$payload2.out += `<!----> `;
    if (qrcodeVisible) {
      $$payload2.out += "<!--[-->";
      UserTest($$payload2);
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
export {
  _page as default
};
