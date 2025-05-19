export const prerender = true;
export const ssr = false;
export const csr = true;

export const trailingSlash = 'never';

export const load = async ({ url }) => {
  return {
    url: url.pathname,
  };
};