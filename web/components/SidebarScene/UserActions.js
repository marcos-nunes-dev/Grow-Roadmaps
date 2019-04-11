import React from 'react';
import styled from 'styled-components';
import IconSvg from '../../libs/iconsSvg';

const UserActionsWrapper = styled.div``;

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
      <div>asd</div>
      <Arrow>
        <IconSvg icon="arrow" width="30px" height="30px"/>
      </Arrow>
    </UserActionsWrapper>
  );
}
