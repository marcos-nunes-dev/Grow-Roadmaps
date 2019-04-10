import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const AvatarWrapper = styled.div`
  background: red;
  width: 50px;
  height: 50px;
`;
export default class Avatar extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <>
      <AvatarWrapper>
        asd
      </AvatarWrapper>
      </>
    );
  }
}
