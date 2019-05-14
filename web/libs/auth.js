import fetch from 'isomorphic-unfetch';

export const logout = async ({ withRefresh } = {}) => {
  // Make the request to destroy the session and
  // remove the session cookie
  // await fetch(API_URL + '/auth/logout', {
  //   method: 'POST',
  //   credentials: 'include',
  // });
  // withRefresh && window.location.reload();
};
