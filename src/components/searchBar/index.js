import React from 'react';
import {SearchIcon} from '../index';
import './style.css';

const SearchBar = ({onSearchChange, search}) => {

  return(
    <div className="searchContainer">
      <SearchIcon />
      <input placeholder="Digite o que você está procurando ..." onChange={onSearchChange} value={search}/>
    </div>
  );
};

export {SearchBar};
