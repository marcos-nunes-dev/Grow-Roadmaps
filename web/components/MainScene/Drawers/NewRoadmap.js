import React, { useState } from 'react';
import styled from 'styled-components';
import HelpIcon from '../../../static/icons/information.svg';

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

export default function NewRoadmap() {
  const [ DataSourceRoadmaps, setDataSourceRoadmaps] = useState(['Java', 'Javascript', 'Node.js']); 
  const [AutoCompleteInput, setAutoCompleteInput] = useState(''); 

  function verifyDisponibilityResult(){
    if(AutoCompleteInput){
      return _.find(DataSourceRoadmaps, o => {
        return _.includes(o, AutoCompleteInput);
      });
    }
  }

  function handleAutoCompleteSelection(key){
    key === 'Enter' && setAutoCompleteInput(verifyDisponibilityResult());
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
            onChange={e => setAutoCompleteInput(e.target.value)}
            onKeyPress={e => handleAutoCompleteSelection(e.key)}
          />
          <AutoCompleteShadow>
            {verifyDisponibilityResult()}
          </AutoCompleteShadow>
        </AutoCompleteWrapper>
      </ContentWrapper>
    </NewRoadmapWrapper>
  );
}
