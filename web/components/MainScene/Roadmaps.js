import React from 'react';
import styled from 'styled-components';
import RoadmapsList from './RoadmapsList';
import SearchField from '../Common/SearchField';
import SearchFieldCollapsed from '../Common/SearchFieldCollapsed';
import { DefaultButton } from '../Common/Button';
import { connect } from 'react-redux';

//JUST TEST PURPOSE
import { listRoadmaps } from '../../libs/demo-data';

const MainWrapper = styled.div`
  background: #ecedef;
  width: ${props => props.collapsed ? '4vw' : '16vw'};
  position: relative;
  transition: all .3s ease;
`;

const SearchFieldWrapper = styled.div`
  padding: 25px 15px;
  height: 5vh;
`;

const FloatButtonWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 75%;
`;

function Roadmaps(props) {
  return (
    <MainWrapper collapsed={props.roadmapCollapsed}>
      <SearchFieldWrapper>
        {props.roadmapCollapsed ? <SearchFieldCollapsed /> : <SearchField />}
      </SearchFieldWrapper>
      <RoadmapsList roadlist={listRoadmaps} />
      <FloatButtonWrapper>
        <DefaultButton text="New Roadmap"/>
      </FloatButtonWrapper>
    </MainWrapper>
  );
}

function mapStateToProps(state) {
  return {
    roadmapCollapsed: state.growBoardReducer.roadmapCollapsed
  };
}

export default connect(mapStateToProps)(Roadmaps);