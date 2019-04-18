import React from 'react';
import styled from 'styled-components';

const LevelLabelWrapper = styled.div``;

const EasyWrapper = styled.div`
  width: fit-content;
  background: #ececec;
  border-radius: 2px;
  border-left: 2px solid #bcc4cf;
  padding: 7px 15px 7px 7px;
  font-size: 11px !important;
  display: flex;
  align-items: center;
  span {
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: #0bd70b;
    margin-right: 5px;
  }
`;
const MediumWrapper = styled.div`
  width: fit-content;
  background: #ececec;
  border-radius: 2px;
  border-left: 2px solid #bcc4cf;
  padding: 7px 15px 7px 7px;
  font-size: 11px !important;
  display: flex;
  align-items: center;
  span {
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: #f5d700;
    margin-right: 5px;
  }
`;
const HardWrapper = styled.div`
  width: fit-content;
  background: #ececec;
  border-radius: 2px;
  border-left: 2px solid #bcc4cf;
  padding: 7px 15px 7px 7px;
  font-size: 11px !important;
  display: flex;
  align-items: center;
  span {
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: #ef8f00;
    margin-right: 5px;
  }
`;
const HotWrapper = styled.div`
  width: fit-content;
  background: #ececec;
  border-radius: 2px;
  border-left: 2px solid #bcc4cf;
  padding: 7px 15px 7px 7px;
  font-size: 11px !important;
  display: flex;
  align-items: center;
  span {
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: #ec0404;
    margin-right: 5px;
  }
`;

export function LevelLabel(props) {
  function returnByLevel(level) {
    switch (level) {
      case 'Easy':
        return (
          <EasyWrapper>
            <span />
            {level}
          </EasyWrapper>
        );
      case 'Medium':
        return (
          <MediumWrapper>
            <span />
            {level}
          </MediumWrapper>
        );
      case 'Hard':
        return (
          <HardWrapper>
            <span />
            {level}
          </HardWrapper>
        );
      case 'Hot':
        return (
          <HotWrapper>
            <span />
            {level}
          </HotWrapper>
        );
    }
  }

  return <LevelLabelWrapper>{returnByLevel(props.level)}</LevelLabelWrapper>;
}
