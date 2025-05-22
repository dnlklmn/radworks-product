import { A as setContext, M as slot, G as store_get, J as unsubscribe_stores, B as pop, z as push } from "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index2.js";
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  const showMobileSidebar = writable(false);
  setContext("showMobileSidebar", showMobileSidebar);
  $$payload.out += `<!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> <button class="mobile-toggle svelte-2efxqt" aria-label="Toggle sidebar">`;
  if (store_get($$store_subs ??= {}, "$showMobileSidebar", showMobileSidebar)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="close-icon svelte-2efxqt">✕</span>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span class="menu-icon svelte-2efxqt">☰</span>`;
  }
  $$payload.out += `<!--]--></button>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
