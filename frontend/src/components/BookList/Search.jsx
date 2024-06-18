import React from 'react';
import { Input } from 'antd';
const { Search } = Input;
const SearchQ = ({ searchQuery, handleSearch}) => (
  <>
    <Search placeholder="Search here..." value={searchQuery} onChange={handleSearch} />
  </>
);
export default SearchQ;