import React from 'react';
import Router from 'next/router';
import LOGGED_IN_USER_QUERY from '../graphql/queries/loggedInUser';

// Gets the display name of a JSX component for dev tools
const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component';

export default opts => WrappedComponent =>
  class extends React.Component {
    static displayName = `withAuth(${getDisplayName(WrappedComponent)})`;

    static async getInitialProps(ctx) {
      const loggedInUser = await fetchUserAndApplyOpts(ctx, opts);

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, loggedInUser };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

const fetchUserAndApplyOpts = async (
  { apolloClient, res },
  { redirectToIfLoggedIn, isProtected }
) => {
  const loggedInUser = await getLoggedInUser(apolloClient);

  if (loggedInUser && redirectToIfLoggedIn) {
    return redirect(redirectToIfLoggedIn, res);
  }

  if (!loggedInUser && isProtected) {
    return redirect('/login', res);
  }

  return loggedInUser;
};

const getLoggedInUser = async apolloClient => {
  return apolloClient
    .query({
      query: LOGGED_IN_USER_QUERY,
      fetchPolicy: 'no-cache',
    })
    .then(({ data }) => data && data.me)
    .catch(() => null);
};

const redirect = (url, res) => {
  const isBrowser = !!process.browser;

  if (isBrowser) {
    return Router.push(url);
  }

  res.writeHead(302, { Location: url });
  res.end();
};
