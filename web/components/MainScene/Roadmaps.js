import React from 'react';
import styled from 'styled-components';
import RoadmapsList from './RoadmapsList';
import SearchField from '../Common/SearchField';
import { DefaultButton } from '../Common/Button';

//JUST TEST PURPOSE
import { listRoadmaps } from '../../libs/demo-data';

const MainWrapper = styled.div`
  background: #ecedef;
  width: 16vw;
  position: relative;
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

export default function Roadmaps() {
  return (
    <MainWrapper>
      <SearchFieldWrapper>
        <SearchField />
      </SearchFieldWrapper>
      <RoadmapsList roadlist={listRoadmaps} />
      <FloatButtonWrapper>
        <DefaultButton text="New Roadmap"/>
      </FloatButtonWrapper>
    </MainWrapper>
  );
}
