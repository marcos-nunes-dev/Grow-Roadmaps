import React from 'react';
import styled from 'styled-components';

const DefaultButtonWrapper = styled.div`
  background: #4427f1;
  color: #fff;
  padding: 10px;
  border-radius: 100px;
  text-align: center;
  -webkit-box-shadow: 0px 0px 47px -4px rgba(68, 39, 241, 0.65);
  -moz-box-shadow: 0px 0px 47px -4px rgba(68, 39, 241, 0.65);
  box-shadow: 0px 0px 47px -4px rgba(68, 39, 241, 0.65);
  font-size: 14px;

  :hover{
    cursor: pointer;
  }
`;

export function DefaultButton(props) {
  return (
    <DefaultButtonWrapper>
      {props.text}
    </DefaultButtonWrapper>
  )
}
