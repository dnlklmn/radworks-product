import { G as store_get, I as unsubscribe_stores, B as pop, z as push } from "../../../../chunks/index.js";
import _page$1 from "../_page.svelte.js";
import { p as page } from "../../../../chunks/stores.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const hash = store_get($$store_subs ??= {}, "$page", page).url.hash;
  hash ? hash.substring(1) : null;
  _page$1($$payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
