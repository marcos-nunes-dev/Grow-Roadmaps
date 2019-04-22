import React, { useState } from 'react';
import styled from 'styled-components';
import HelpIcon from '../../../static/icons/information.svg';
let _ = require('lodash');
import { AvaliablesRoadmaps } from '../../../libs/avaliable-roadmaps';
import { GreenButton } from '../../Common/Button';

const NewRoadmapWrapper = styled.div``;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 35px;
`;

const TitleNewRoadmap = styled.div`
  pointer-events: none;
  h1 {
    font-size: 17px;
    color: #fff;
    margin: 0;
    line-height: 13px;
  }
  h2 {
    font-size: 12px;
    color: #8297ff;
    margin: 0;
  }
`;

const HelpIconWrapper = styled.div`
  width: 25px;
  height: 25px;
  svg {
    fill: #8297ff;
    transition: fill 0.3s ease;
    :hover {
      fill: #fff;
      cursor: pointer;
    }
  }
`;

const ContentWrapper = styled.div``;

const AutoCompleteWrapper = styled.div`
  position: relative;
  span {
    font-size: 13px;
    font-weight: 500;
  }
  input {
    margin-top: 5px;
    display: block;
    width: -webkit-fill-available;
    background: #3915d9;
    border: none;
    border-radius: 3px;
    min-height: 40px;
    padding-left: 15px;
  }
`;

const AutoCompleteShadow = styled.div`
  position: absolute;
  bottom: 10px;
  left: 15px;
  color: #ffffff47;
  pointer-events: none;
`;

const AvaliableRoadmapsWrapper = styled.div`
  padding-top: 35px;
  span {
    font-size: 13px;
    font-weight: 500;
  }
  hr {
    border: none;
    border-bottom: 2px solid #6745f9;
  }
`;

const AvaliableList = styled.div`
  height: 50vh;
  overflow-y: scroll;
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #3915d9;
  }

  ::-webkit-scrollbar {
    width: 9px;
    background-color: #3915d9;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #2f10b9;
  }
`;

const ItemListRoadmap = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  padding: 10px 5px;
  transition: all 0.3s ease;
  background: ${props => (props.selected ? '#3e24da' : 'transparent')};
  svg {
    fill: #5371f3;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    path {
      fill: #5371f3;
    }
  }
  :hover {
    background: #3e24da;
    cursor: pointer;
  }
`;

const NewRoadmapButtonWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  width: 17vw;
`;

export default function NewRoadmap() {
  const [AutoCompleteInput, setAutoCompleteInput] = useState('');
  const [AvaliableRoadmapList, setAvaliableRoadmapList] = useState(
    AvaliablesRoadmaps
  );

  function verifyDisponibilityResult() {
    if (AutoCompleteInput) {
      const LanguagueFind = _.find(AvaliableRoadmapList, o => {
        return _.includes(o.name, AutoCompleteInput);
      });
      return LanguagueFind ? LanguagueFind.name : '';
    }
  }

  function handleUpdateInputValue(value) {
    setAutoCompleteInput(value);
    if (value) {
      const ListFind = _.filter(AvaliableRoadmapList, o => {
        return _.includes(o.name, AutoCompleteInput);
      });
      setAvaliableRoadmapList(ListFind);
    } else {
      setAvaliableRoadmapList(AvaliablesRoadmaps);
    }
  }

  function handleAutoCompleteSelection(key) {
    key === 'Enter' && setAutoCompleteInput(verifyDisponibilityResult());
  }

  function handleListRoadmapsAvaliable() {
    return AvaliableRoadmapList.map(roadmap => {
      return (
        <ItemListRoadmap
          key={roadmap.id}
          selected={roadmap.name === AutoCompleteInput}
          onClick={() => setAutoCompleteInput(roadmap.name)}
        >
          {roadmap.iconName} {roadmap.name}
        </ItemListRoadmap>
      );
    });
  }

  return (
    <NewRoadmapWrapper>
      <HeaderWrapper>
        <TitleNewRoadmap>
          <h1>Novo Roadmap</h1>
          <h2>Adicione um novo roadmap</h2>
        </TitleNewRoadmap>
        <HelpIconWrapper>
          <HelpIcon />
        </HelpIconWrapper>
      </HeaderWrapper>
      <ContentWrapper>
        <AutoCompleteWrapper>
          <span>Nome da Linguagem?</span>
          <input
            value={AutoCompleteInput}
            onChange={e => handleUpdateInputValue(e.target.value)}
            onKeyPress={e => handleAutoCompleteSelection(e.key)}
          />
          <AutoCompleteShadow>{verifyDisponibilityResult()}</AutoCompleteShadow>
        </AutoCompleteWrapper>
        <AvaliableRoadmapsWrapper>
          <span>Roadmaps Disponíveis</span>
          <hr />
          <AvaliableList>{handleListRoadmapsAvaliable()}</AvaliableList>
        </AvaliableRoadmapsWrapper>
        <NewRoadmapButtonWrapper>
          <GreenButton text="Novo Roadmap" />
        </NewRoadmapButtonWrapper>
      </ContentWrapper>
    </NewRoadmapWrapper>
  );
}
