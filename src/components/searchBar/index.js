import React from 'react';
import {SearchIcon} from '../index';
import './style.css';

const SearchBar = () => {

  return(
    <div className="searchContainer">
      <SearchIcon />
      <input placeholder="Digite o que você está procurando ..."  />
    </div>
  );
};

export {SearchBar};
