// src/components/Table.js
import React, { useState } from 'react';
import TableRow from './TableRow';
import {
  Table,
  TableHead,
  TableHeadCell,
  TableRow as StyledRow,
  AbstractContainer,
} from '../styles';

const TableComponent = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  return (
    <div>
      <Table>
        <TableHead>
          <tr>
            <TableHeadCell>IDN</TableHeadCell>
            <TableHeadCell>Cluster</TableHeadCell>
            <TableHeadCell>CIT</TableHeadCell>
            <TableHeadCell>Title</TableHeadCell>
            <TableHeadCell>Author</TableHeadCell>
          </tr>
        </TableHead>
        <tbody>
          {data.map((item) => (
            <TableRow
              key={item.idn}
              item={item}
              onClick={() => handleRowClick(item)}
            />
          ))}
        </tbody>
      </Table>
      {selectedRow && (
        <AbstractContainer>
          <div>Abstract: {selectedRow.abstract}</div>
        </AbstractContainer>
      )}
    </div>
  );
};

export default TableComponent;
