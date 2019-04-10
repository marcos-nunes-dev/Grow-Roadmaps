import React from 'react';
import styled from 'styled-components';
import Logo from '../Common/Logo';
import UserActions from '../SidebarScene/UserActions';

const LogoWrapper = styled.div`
  margin-top: 15px;
`
const UserActionsWrapper = styled.div`
  margin-bottom: 15px;
`
const MainWrapper = styled.div`
  display: flex;
`
const RightBar = styled.div`
  background: #4427f1;
  width: 4vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

function DefaultWrapper(props) {
  return (
    <MainWrapper>
      <RightBar>
        <LogoWrapper>
          <Logo type="icon"/>
        </LogoWrapper>
        <UserActionsWrapper>
          <UserActions/>
        </UserActionsWrapper>
      </RightBar> 
      {props.children}
    </MainWrapper>
  )
}

export default DefaultWrapper
