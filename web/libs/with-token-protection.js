import React from 'react';
import Router from 'next/router';
import Auth from './auth';
import { notification } from 'antd';

const openNotificationWithIcon = (type, description) => {
  notification[type]({
    message: 'Erro de Autenticação.',
    description: description,
  });
};


export default Page =>
  class WithTokenProtection extends React.Component {
    state = { waitingToken: true };

    static async getInitialProps(context) {
      return Page.getInitialProps ? await Page.getInitialProps(context) : {};
    }

    componentDidMount() {
      const token = Auth.getToken();
      if (!token) {
        // Redirect to login if no token is found
        openNotificationWithIcon('error', 'Faça login para acessar o conteúdo.');
        return Router.push('/');
      }
      this.setState({ waitingToken: false });
    }

    render() {
      return !this.state.waitingToken ? <Page {...this.props} /> : null;
    }
  };