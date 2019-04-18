import React, { Component } from 'react';
import Wrapper from '../components/Common/DefaultWrapper';
import Content from '../components/MainScene/Content';
import Modules from '../components/MainScene/Modules';
import Roadmaps from '../components/MainScene/Roadmaps';

class index extends Component {
  render() {
    return (
      <Wrapper>
        <Roadmaps />
        <Modules />
        <Content />
      </Wrapper>
    );
  }
}

export default index;
