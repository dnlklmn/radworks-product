const prerender = true;
const ssr = false;
const csr = true;
const trailingSlash = "never";
const load = async ({ url }) => {
  return {
    url: url.pathname
  };
};
export {
  csr,
  load,
  prerender,
  ssr,
  trailingSlash
};
