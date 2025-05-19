/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  return resolve(event);
}

/** @type {import('@sveltejs/kit').HandleServerError} */
export function handleError({ error, event }) {
  return {
    message: error instanceof Error ? error.message : 'Unknown error',
    code: error instanceof Error ? error.name : 'UNKNOWN'
  };
}

/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ request, fetch }) {
  return fetch(request);
}