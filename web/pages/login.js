import React from 'react';
import Wrapper from '../components/Common/DefaultWrapper';
import SliderAbout from '../components/LoginScene/SliderAbout';
import LoginForm from '../components/LoginScene/LoginForm';

export default function index() {
  return (
    <Wrapper>
      <SliderAbout/>
      <LoginForm/>
    </Wrapper>
  );
}
