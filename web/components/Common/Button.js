import React from 'react';
import styled from 'styled-components';

const  DefaultButtonWrapper = styled.div`
  background: #4427f1;
  color: #fff;
  padding: 10px;
  border-radius: 100px;
  text-align: center;
  -webkit-box-shadow: 0px 0px 47px -4px rgba(68, 39, 241, 0.65);
  -moz-box-shadow: 0px 0px 47px -4px rgba(68, 39, 241, 0.65);
  box-shadow: 0px 0px 47px -4px rgba(68, 39, 241, 0.65);
  font-size: 14px;

  :hover {
    cursor: pointer;
  }
`;

const UpvoteButtonWrapper = styled.div`
  border: 1px solid #4427f1;
  padding: 4px 10px 4px 0;
  border-radius: 20px;
  color: ${props => props.voted ? '#fff' : '#4427f1'};
  font-size: 11px;
  position: relative;
  margin-right: 10px;
  span {
    text-align: center;
    background: #4427f1;
    padding: 6px 15px;
    width: 50%;
    color: #fff;
    border-radius: 20px;
  }
  :hover {
    cursor: pointer;
  }
  :after{
    content: '';
    background: #4427f1;
    width: ${props => props.voted ? '91%' : '0%'};
    height: 100%;
    position: absolute;
    z-index: -1;
    left:10%;
    top:0;
    border-radius: 20px;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;

const StrikeButtonWrapper = styled.div`
  background: transparent;
  color: #ee5252;
  text-align: center;
  font-size: 11px;
  text-decoration: underline;
  :hover {
    cursor: pointer;
  }
`;

const BorderedButtonWrapper = styled.div`
  background: transparent;
  color: #96999d;
  border: 1px solid #96999d;
  padding: 10px 20px;
  border-radius: 100px;
  text-align: center;
  font-size: 12px;
  :hover {
    cursor: pointer;
  }
`;

const  GreenButtonWrapper = styled.div`
  background: #02e04d;
  color: #fff;
  padding: 10px;
  border-radius: 100px;
  text-align: center;
  -webkit-box-shadow: 0px 0px 17px -4px rgba(2, 224, 77, 0.65);
  -moz-box-shadow: 0px 0px 17px -4px rgba(2, 224, 77, 0.65);
  box-shadow: 0px 0px 17px -4px rgba(2, 224, 77, 0.65);
  font-size: 14px;

  :hover {
    cursor: pointer;
  }
`;

export function DefaultButton(props) {
  return <DefaultButtonWrapper>{props.text}</DefaultButtonWrapper>;
}

//Should receive props voted
export function UpvoteButton(props) {
  return (
    <UpvoteButtonWrapper voted={props.voted}>
      <span>+{props.voteCount}</span> {props.voted ? 'Upvoted' : 'Upvote'}
    </UpvoteButtonWrapper>
  );
}

export function StrikeButton() {
  return <StrikeButtonWrapper>Strike</StrikeButtonWrapper>;
}

export function BorderedButton(props) {
  return <BorderedButtonWrapper>{props.text}</BorderedButtonWrapper>;
}

export function GreenButton(props) {
  return <GreenButtonWrapper>{props.text}</GreenButtonWrapper>;
}
