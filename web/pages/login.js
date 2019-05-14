import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import Wrapper from '../components/Common/DefaultWrapper';
import SliderAbout from '../components/LoginScene/SliderAbout';
import LoginForm from '../components/LoginScene/LoginForm';
import { meQuerie } from '../GraphQL/queries';

const LoginPage = () => {
  const { loading, error, data } = useQuery(meQuerie);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data.me) {
    return <div>Já é usuário {JSON.stringify(data)}</div>;
  }

  return (
    <Wrapper>
      <SliderAbout />
      <LoginForm />
    </Wrapper>
  );
};

export default LoginPage;
