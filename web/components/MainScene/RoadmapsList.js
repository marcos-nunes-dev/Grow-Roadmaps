import React, { Component } from 'react';
import styled from 'styled-components';
import Javascript from '../../static/icons/javascript.svg';

const MainWrapper = styled.div`
  height: 87vh;
  overflow-y: scroll;
  padding: 10px 25px;

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #ebeced;
  }

  ::-webkit-scrollbar {
    width: 9px;
    background-color: #ced5db;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ced5db;
  }
`;

const MainItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  opacity: .33;
  transition: all .3s ease;

  :hover{
    opacity: 1;
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const TitleWrapper = styled.div`
  color: #738393;
  font-size: 15px;
`;

export default class RoadmapsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roadlist: [],
    };
  }

  componentDidMount() {
    this.setState({
      roadlist: this.props.roadlist,
    });
  }

  RoadmapListItem = item => {
    return (
      <MainItemWrapper key={item.key}>
        <IconWrapper>
          <Javascript />
        </IconWrapper>
        <TitleWrapper>{item.name}</TitleWrapper>
      </MainItemWrapper>
    );
  };

  render() {
    console.log('asdasd', this.state.roadlist);
    return (
      <MainWrapper>
        {this.state.roadlist &&
          this.state.roadlist.map(item => <>{this.RoadmapListItem(item)}</>)}
      </MainWrapper>
    );
  }
}
