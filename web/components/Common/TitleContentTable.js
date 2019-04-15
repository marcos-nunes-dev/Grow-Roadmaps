import React from 'react';
import styled from 'styled-components';
import { Tooltip } from 'antd';

const TitleContentWrapper = styled.div`
  p{
    font-size: 14px;
    margin-bottom: 0px;
    margin-top: 0px;
    line-height: 5px;
  }
  span{
    font-size: 10px;
    color: #bbb;
  }
`;

export default function TitleContentTable(props) {
  
  let title = props.title;
  if(props.title.length > 24){
    title = `${props.title.substring(0, 21)}...`;
  }

  return (
    <TitleContentWrapper>
      <Tooltip title={props.title}>
        <p>{title}</p>
      </Tooltip>
      <span>{props.user}</span>
    </TitleContentWrapper>
  )
}
