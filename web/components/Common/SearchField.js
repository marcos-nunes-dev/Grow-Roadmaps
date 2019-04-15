import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../static/icons/search.svg';

const SearchWrapper = styled.div`
  max-width: 100%;
  position: relative;
  margin-bottom: 20px;

  input {
    background: #d4dfe5;
    padding: 10px 15px;
    box-shadow: none;
    border: none;
    width: 100%;
    width: -webkit-fill-available;
    border-radius: 100px;
    font-family: 'Fira Sans', sans-serif;
    color: #2e4358;
    font-size: 13px;
  }

  input::placeholder {
    color: #90a5ba;
  }

  input:focus,
  input:active {
    box-shadow: 0;
    border: 0;
    outline: 0;
  }

  .icon {
    position: absolute;
    width: 15px;
    height: 15px;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    cursor-events: none;
    fill: #aab5c0;
  }
`;

export default function SearchField() {
  return (
    <SearchWrapper>
      <SearchIcon className="icon"/>
      <input placeholder="Search Roadmap..." />
    </SearchWrapper>
  )
}
