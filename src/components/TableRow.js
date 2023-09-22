// src/components/TableRow.js
import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

const TableRow = ({ item, onClick }) => {
  return (
    <StyledRow onClick={onClick}>
      <td>{item.idn}</td>
      <td>{item.cluster}</td>
      <td>{item.cit}</td>
      <td>{item.title}</td>
      <td>{item.author}</td>
    </StyledRow>
  );
};

export default TableRow;
