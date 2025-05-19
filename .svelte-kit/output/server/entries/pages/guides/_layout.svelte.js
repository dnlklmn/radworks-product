import { A as setContext, J as slot, G as store_get, I as unsubscribe_stores, B as pop, z as push } from "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index2.js";
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  const showMobileSidebar = writable(false);
  setContext("showMobileSidebar", showMobileSidebar);
  $$payload.out += `<!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> <button class="mobile-toggle svelte-1u2xp6z" aria-label="Toggle sidebar">`;
  if (store_get($$store_subs ??= {}, "$showMobileSidebar", showMobileSidebar)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="close-icon">✕</span>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span class="menu-icon">☰</span>`;
  }
  $$payload.out += `<!--]--></button>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
