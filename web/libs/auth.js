import Cookie from 'js-cookie';
import Router from 'next/router';
import axios from 'axios';
import config from './config';

class Auth {
  constructor() {
    this.localStorage = this.getLocalStorage();
  }

  getLocalStorageSession = () => {
    if (this.localStorage) {
      try {
        return JSON.parse(window.localStorage.getItem('session'));
      } catch (err) {
        Router.push('/');
        return null;
      }
    }
    return null;
  };

  getToken = () => {
    if (this.localStorage) {
      const session = this.localStorage.getItem('session');
      if (session) {
        const sessionObj = JSON.parse(session);
        const { token } = sessionObj;
        if (token) {
          return token;
        }
      } else {
        Router.push('/');
      }
    }
    return Cookie.get('token');
  };

  loginRequest = (cpf, password) => {
    const url = config.api_url + '/auth/login';
    return axios.post(url, {
      cpf,
      password,
    });
  };

  login = (session, apolloClient, redirectUrl) => {
    if (!process.browser) return;

    if (this.localStorage) {
      this.localStorage.setItem('session', JSON.stringify(session));
    }

    Cookie.set('token', session.token, { secure: false });

    apolloClient && apolloClient.resetStore();

    if (redirectUrl) {
      Router.push(redirectUrl);
    } else {
      Router.push('/');
    }
  };

  logout = (apolloClient, redirectUrl) => {
    if (!process.browser) return;

    if (this.localStorage) {
      this.localStorage.removeItem('session');
    }
    Cookie.remove('token');

    apolloClient && apolloClient.resetStore();

    if (redirectUrl) {
      Router.push(redirectUrl);
    }
  };
  
  getLocalStorage = () => {
    let uid = new Date();
    let storage;
    let result;
    try {
      (storage = window.localStorage).setItem(uid, uid);
      result = storage.getItem(uid) == uid;
      storage.removeItem(uid);
      return result && storage;
    } catch (exception) {}
  };
}

export default new Auth();