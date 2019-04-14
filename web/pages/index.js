import React, { Component } from 'react';
import Wrapper from '../components/Common/DefaultWrapper';
import Roadmaps from '../components/MainScene/Roadmaps';
import Modules from '../components/MainScene/Modules';

class index extends Component {
  render() {
    return (
      <Wrapper>
        <Roadmaps />
        <Modules />
      </Wrapper>
    );
  }
}

export default index;
