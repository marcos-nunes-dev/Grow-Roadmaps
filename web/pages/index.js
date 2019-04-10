import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createGrow } from '../ducks/growBoard';

const Title = styled.h1`
color: red;
background: blue;
`;
class index extends Component {
  handleIncrease = () => {
    const { createGrow } = this.props;
    createGrow('dasdsa');
  }

  render() {
    console.log('props', this.props);
    const { counter } = this.props;
    return (
      <div>
        <div>Counter: {counter}</div>
        <button onClick={this.handleIncrease}>Increase</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.growBoardReducer.counter
  }
}

const mapDispatchToProps = {
  createGrow
}

export default connect(mapStateToProps, mapDispatchToProps)(index);