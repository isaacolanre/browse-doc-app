// src/App.js
import React, { useState } from 'react';
import Table from './components/Table';
import data from './data'; // Replace with your data source
import {
  AppContainer,
  TableContainer,
  SearchInput,
  FilterLabel,
  FilterSelect,
} from './styles';

const App = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCluster, setSelectedCluster] = useState('');

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    filterData(searchTerm, selectedCluster);
  };

  const handleClusterFilter = (cluster) => {
    setSelectedCluster(cluster);
    filterData(searchTerm, cluster);
  };

  const filterData = (searchTerm, cluster) => {
    const filteredData = data.filter((item) => {
      const titleMatch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        searchTerm === '';

      const clusterMatch = cluster === '' || item.cluster === cluster;

      return titleMatch && clusterMatch;
    });

    setFilteredData(filteredData);
  };

  return (
    <AppContainer>
      <h1>React Table App</h1>
      <div>
        <SearchInput
          type="text"
          placeholder="Search by Title"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div>
        <FilterLabel>Filter by Cluster: </FilterLabel>
        <FilterSelect
          value={selectedCluster}
          onChange={(e) => handleClusterFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Cluster 1">Cluster 1</option>
          <option value="Cluster 2">Cluster 2</option>
          <option value="Cluster 3">Cluster 3</option>
          <option value="Cluster 4">Cluster 4</option>
          <option value="Cluster 5">Cluster 5</option>
          <option value="Cluster 6">Cluster 6</option>
        </FilterSelect>
      </div>
      <TableContainer>
        <Table data={filteredData} />
      </TableContainer>
    </AppContainer>
  );
};

export default App;
