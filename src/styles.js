// src/styles.js
import styled from 'styled-components';

export const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
`;

export const TableContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none; /* Remove the default input focus outline */
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff; /* Change border color on focus */
  }
`;

export const FilterLabel = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

export const FilterSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const TableHead = styled.thead`
  background-color: #333;
  color: white;
`;

export const TableHeadCell = styled.th`
  padding: 10px;
`;

export const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export const AbstractContainer = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
