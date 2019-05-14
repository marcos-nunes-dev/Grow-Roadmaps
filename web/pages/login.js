import React from 'react';
import Wrapper from '../components/Common/DefaultWrapper';
import SliderAbout from '../components/LoginScene/SliderAbout';
import LoginForm from '../components/LoginScene/LoginForm';
import withAuth from '../libs/withAuth';

const LoginPage = () => (
  <Wrapper>
    <SliderAbout />
    <LoginForm />
  </Wrapper>
);

export default withAuth({ redirectToIfLoggedIn: '/' })(LoginPage);
