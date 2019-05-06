import React, { Component } from 'react';
import styled from 'styled-components';
import EditIcon from '../../static/icons/edit.svg';
import { BorderedButton } from '../Common/Button';
import TableContent from '../MainScene/TableContent';
import { connect } from 'react-redux';
import EmptyIcon from '../../static/icons/road-adetour.svg';

const ContentWrapper = styled.div`
  max-height: 100vh;
  width: ${props => props.collapsedRoadmap ? '69vw' : '57vw'} ;
  overflow-y: scroll;
  background: #f3f3f3;
  transition: all .3s ease;
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

const EmptyWrapper = styled.div`
  padding: 0px 25px;
  overflow: hidden;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 15%;
    height: auto;
    opacity: 0.1;
  }
  h1 {
    color: #d6d6d6;
    font-size: 17px;
    font-weight: 400;
    margin-top: 20px;
  }
  p {
    color: #d6d6d6;
    font-size: 14px;
    font-weight: 200;
  }
`;

class Content extends Component {
  handleHasContent = () => {
    return (
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
    );
  }

  handleHasNoContent = () => {
    return (
      <EmptyWrapper>
        <EmptyIcon />
        <h1>Selecione um Módulo</h1>
        <p>Escolha ao lado o Módulo que você deseja</p>
      </EmptyWrapper>
    );
  }

  render() {
    return (
      <ContentWrapper collapsedRoadmap={this.props.roadmapCollapsed}>
        {!this.props.hasContent ? this.handleHasContent() : this.handleHasNoContent()}
      </ContentWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    roadmapCollapsed: state.growBoardReducer.roadmapCollapsed
  };
}

export default connect(mapStateToProps)(Content);