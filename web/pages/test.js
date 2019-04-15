import React, { Component } from 'react';
import styled from 'styled-components';
import { UpvoteButton } from '../components/Common/Button';

const WrapperTestComponent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      voted: false,
      count: 44
    };
  }

  render() {
    return (
      <WrapperTestComponent>
        <UpvoteButton voted={this.state.voted} voteCount={this.state.count} />
        <button onClick={() => this.setState({ voted: !this.state.voted, count: this.state.count + 1 })}>Aumentar</button>
      </WrapperTestComponent>
    );
  }
}

export default test;
