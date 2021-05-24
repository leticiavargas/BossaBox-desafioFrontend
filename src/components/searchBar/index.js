import React from 'react';
import './style.css';

const SearchBar = ({onSearchChange, search}) => {

  return(
    <div className="searchContainer">
      <i className="fa fa-searchicon" style={{color: "#B1ADB9"}} />
      <input placeholder="Digite o que você está procurando ..." onChange={onSearchChange} value={search}/>
    </div>
  );
};

export {SearchBar};
