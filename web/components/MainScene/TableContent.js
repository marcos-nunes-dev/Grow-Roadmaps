/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import { Table } from 'antd';
import {
  ContentColumnsData,
  ContentRowsData,
} from '../../libs/tableHeaders/ContentTable';

const WrapperTableContent = styled.div`
  background: #fff;
  min-height: 80vh;
  margin-top: 30px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.04);
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.04);
  .ant-table-thead > tr > th {
    background: transparent;
    word-break: initial;
    color: #5b5f64;
    font-size: 12px;
    padding: 20px 16px 10px 16px;
    color: #5b5f64;
    font-family: 'Fira Sans', sans-serif !important;
  }
  .ant-table-tbody > tr > td {
    border-bottom: 0;
    color: #5b5f64;
    font-family: 'Fira Sans', sans-serif !important;
    font-size: 14px !important;
  }
`;

export default function TableContent() {
  return (
    <WrapperTableContent>
      <Table
        columns={ContentColumnsData}
        dataSource={ContentRowsData}
        pagination={false}
      />
    </WrapperTableContent>
  );
}
