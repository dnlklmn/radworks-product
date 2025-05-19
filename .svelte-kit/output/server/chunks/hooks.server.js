async function handle({ event, resolve }) {
  return resolve(event);
}
function handleError({ error, event }) {
  return {
    message: error instanceof Error ? error.message : "Unknown error",
    code: error instanceof Error ? error.name : "UNKNOWN"
  };
}
async function handleFetch({ request, fetch }) {
  return fetch(request);
}
export {
  handle,
  handleError,
  handleFetch
};
