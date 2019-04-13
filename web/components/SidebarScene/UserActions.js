import React from 'react';
import styled from 'styled-components';
import Logo from '../../static/icons/arrow.svg';

const UserActionsWrapper = styled.div`  
  display: flex;
  flex-direction: column;
`;

const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  align-self: center;
  img{
    width: 100%;
  }
`;

const Arrow = styled.div`
  width: 100%;
  text-align: center;
  svg {
    transform: rotate(90deg);
    width: 25%;
    fill: #fff;
  }
`;

export default function UserActions(props) {
  return (
    <UserActionsWrapper>
      <AvatarWrapper>
        <img src="https://piktochart.com/wp-content/authors/Wilson-113.jpg" />
      </AvatarWrapper>
      <Arrow>
        <Logo />
      </Arrow>
    </UserActionsWrapper>
  );
}
