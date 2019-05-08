import React, { useEffect } from 'react';
import Wrapper from '../components/Common/DefaultWrapper';
import SliderAbout from '../components/LoginScene/SliderAbout';
import LoginForm from '../components/LoginScene/LoginForm';
import { useQuery } from 'react-apollo-hooks';
import { meQuerie } from '../GraphQL/queries';

export default function index() {
  const {loading, error, data} = useQuery(meQuerie);

  if(loading){
    return <div>Loading...</div>;
  }

  if(Object.entries(data).length !== 0){
    return <div>Já é usuário {JSON.stringify(data)}</div>;
  }

  return (
    <Wrapper>
      <SliderAbout />
      <LoginForm />
    </Wrapper>
  );
}
