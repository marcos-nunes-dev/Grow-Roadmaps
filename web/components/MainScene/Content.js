import React, { Component } from 'react';
import styled from 'styled-components';
import EditIcon from '../../static/icons/edit.svg';
import { BorderedButton } from '../Common/Button';
import TableContent from '../MainScene/TableContent';

const ContentWrapper = styled.div`
  max-height: 100vh;
  width: 57vw;
  overflow-y: scroll;
  background: #f3f3f3;
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

const UtilArea = styled.div`
  padding: 25px;
`;

const ActionArea = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;
  p {
    margin-top: 0;
    margin-bottom: 0;
    color: #a1a1a1;
  }
  h1 {
    margin-top: 0;
    margin-bottom: 0;
    color: #5b5f64;
    font-weight: bold;
  }
`;

const TitleArea = styled.div`
  display: flex;
  align-items: flex-end;
  svg {
    width: 15px;
    height: 15px;
    margin-bottom: 6px;
    margin-left: 10px;
    fill: #696969;
  }
  svg:hover {
    cursor: pointer;
  }
`;

const ButtonsArea = styled.div`
  display: flex;
  align-items: flex-end;
`;

export default class Content extends Component {
  render() {
    return (
      <ContentWrapper>
        <UtilArea>
          <ActionArea>
            <TitleArea>
              <div>
                <p>Javascript Roadmap</p>
                <h1>Basic Concepts</h1>
              </div>
              <EditIcon />
            </TitleArea>
            <ButtonsArea>
              <BorderedButton text="Mark as Learned" />
            </ButtonsArea>
          </ActionArea>
          <TableContent />
        </UtilArea>
      </ContentWrapper>
    );
  }
}
