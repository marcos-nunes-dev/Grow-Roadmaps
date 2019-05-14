export default ({ req, clientOnly }) => {
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const isBrowser = !!process.browser;

  // We return early in two cases:
  // 1. The request is in the server but the req object is undefined
  // 2. The request is in the server but the URL is only for the client
  if ((!clientOnly && !isBrowser && !req) || (clientOnly && !isBrowser)) {
    return '';
  }

  return clientOnly || isBrowser
    ? `${protocol}://${window.location.host}/api`
    : `${protocol}://${req.headers.host}/api`;
};
