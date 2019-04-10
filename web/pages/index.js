import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
color: red;
background: blue;
`;

export default function index() {
  return (
    <div>
      <Title>Hello World</Title>
    </div>
  )
}
