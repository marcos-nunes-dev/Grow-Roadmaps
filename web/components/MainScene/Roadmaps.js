import React, { useState } from 'react';
import styled from 'styled-components';
import RoadmapsList from './RoadmapsList';
import RoadmapsListCollapsed from './RoadmapsListCollapsed';
import SearchField from '../Common/SearchField';
import SearchFieldCollapsed from '../Common/SearchFieldCollapsed';
import { DefaultButton } from '../Common/Button';
import { connect } from 'react-redux';
import { Drawer } from 'antd';
import NewRoadmap from './Drawers/NewRoadmap';

//JUST TEST PURPOSE
import { listRoadmaps } from '../../libs/demo-data';

const MainWrapper = styled.div`
  background: #ecedef;
  width: ${props => (props.collapsed ? '4vw' : '16vw')};
  position: relative;
  transition: all 0.3s;
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
  const [NewRoadmapDrawer, SetNewRoadmapDrawer] = useState(false);

  function RoadmapsExpanded() {
    return (
      <>
        <SearchFieldWrapper>
          <SearchField />
        </SearchFieldWrapper>
        <RoadmapsList roadlist={listRoadmaps} />
        <FloatButtonWrapper onClick={() => SetNewRoadmapDrawer(true)}>
          <DefaultButton text="New Roadmap" />
        </FloatButtonWrapper>
      </>
    );
  }

  function RoadmapsCollapsed() {
    return (
      <>
        <SearchFieldWrapper>
          <SearchFieldCollapsed />
        </SearchFieldWrapper>
        <RoadmapsListCollapsed roadlist={listRoadmaps} />
        <FloatButtonWrapper>
          <DefaultButton text="New Roadmap" />
        </FloatButtonWrapper>
      </>
    );
  }

  return (
    <MainWrapper collapsed={props.roadmapCollapsed}>
      <Drawer
        placement="left"
        closable={false}
        width="20%"
        onClose={() => SetNewRoadmapDrawer(false)}
        visible={NewRoadmapDrawer}
      >
        <NewRoadmap />
      </Drawer>
      {props.roadmapCollapsed ? RoadmapsCollapsed() : RoadmapsExpanded()}
    </MainWrapper>
  );
}

function mapStateToProps(state) {
  return {
    roadmapCollapsed: state.growBoardReducer.roadmapCollapsed,
  };
}

export default connect(mapStateToProps)(Roadmaps);
