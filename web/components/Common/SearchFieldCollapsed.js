import React, {Component} from 'react';
import styled from 'styled-components';
import SearchIcon from '../../static/icons/search.svg';
import { connect } from 'react-redux';
import { updateRoadmapCollapsedState } from '../../ducks/growBoard';

const SearchWrapperCollapsed = styled.div`
  max-width: 100%;
  position: relative;
  margin-bottom: 20px;

  input {
    background: #d4dfe5;
    box-shadow: none;
    border: none;
    width: 100%;
    height: 35px;
    border-radius: 100px;
    font-family: 'Fira Sans', sans-serif;
    color: #2e4358;
    font-size: 13px;
  }

  input::placeholder {
    color: #90a5ba;
  }

  input:focus,
  input:active {
    box-shadow: 0;
    border: 0;
    outline: 0;
  }

  input:hover {
    cursor: pointer;
  }

  .icon {
    position: absolute;
    width: 15px;
    height: 15px;
    right: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(50%);
    cursor-events: none;
    fill: #aab5c0;
  }

  .icon:hover {
    cursor: pointer;
  }
`;


class SearchFieldCollapsed extends Component {
  render() {
    return (
      <SearchWrapperCollapsed onClick={() => this.props.updateRoadmapCollapsedState()}>
        <SearchIcon className="icon"/>
        <input />
      </SearchWrapperCollapsed>
    )
  }
}

function mapStateToProps(state) {
  return {
    roadmapCollapsed: state.growBoardReducer.roadmapCollapsed
  };
}

const mapDispatchToProps = {
  updateRoadmapCollapsedState,
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchFieldCollapsed);