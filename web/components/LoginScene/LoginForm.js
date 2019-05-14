import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';

import getApiUrl from '../../libs/getApiUrl';
import GithubIcon from '../../static/icons/github-sign.svg';
import FacebookIcon from '../../static/icons/facebook-login.svg';
import GoogleIcon from '../../static/icons/google-login.svg';

const LoginFormWrapper = styled.div`
  width: 61vw;
  height: 100vh;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('../../static/img/bglogin.svg') no-repeat center center/ 60%;
`;

const LoginDialog = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  width: 35%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 0px 13px 3px rgba(0, 0, 0, 0.04);
`;

const Title = styled.div`
  margin-bottom: 25px;
  h1 {
    margin-top: 0;
    margin-bottom: 0;
    color: #5b5f64;
    font-weight: bold;
    text-align: center;
  }
  p {
    max-width: 100%;
    margin-top: 5px;
    color: #ababab;
    font-size: 13px;
    line-height: 17px;
    text-align: center;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  margin-bottom: 25px;
`;

const GithubType = styled.div`
  svg {
    width: 25px;
    height: 25px;
    fill: #fff;
    margin-right: 10px;
  }
  background: #2b2b2b;
  padding: 15px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  cursor: pointer;
  margin-bottom: 5px;
`;

const FacebookType = styled.div`
  svg {
    width: 25px;
    height: 25px;
    fill: #fff;
    margin-right: 10px;
  }
  opacity: 0.5;
  background: #104ca5;
  padding: 15px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  margin-bottom: 5px;
  cursor: not-allowed;
`;

const GoogleType = styled.div`
  svg {
    width: 25px;
    height: 25px;
    fill: #fff;
    margin-right: 10px;
  }
  opacity: 0.5;
  background: #f12909;
  padding: 15px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  cursor: not-allowed;
`;

const HelperInfo = styled.div`
  width: 100%;
  text-align: center;
  font-size: 11px;
  color: #ababab;
`;

export default function LoginForm() {
  const apiAuthUrl = getApiUrl({ clientOnly: true }) + '/auth';

  return (
    <LoginFormWrapper>
      <LoginDialog>
        <Title>
          <h1>Speek friend and Enter!</h1>
          <p>
            Seja bem-vindo(a) ao Grow Roadmaps, uma plataforma comunitária de
            roadmaps para estudo nas mais diversas linguagens de programação.
          </p>
        </Title>

        <FormWrapper>
          <GithubType>
            <div onClick={() => Router.push(apiAuthUrl + '/github')}>
              <GithubIcon /> Login com Github
            </div>
          </GithubType>

          <FacebookType>
            <FacebookIcon /> Login com Facebook
          </FacebookType>

          <GoogleType>
            <GoogleIcon /> Login com Google
          </GoogleType>
        </FormWrapper>

        <HelperInfo>
          Esqueceu sua senha? Todos os tipos de acesso em nossa plataforma são
          terceirizados. Utilize a respectiva plataforma para recuperar/alterar
          sua senha.
        </HelperInfo>
      </LoginDialog>
    </LoginFormWrapper>
  );
}
