import React from 'react';
import './style.css';
import Icon from  '../../assets/Icon-Search-2px.svg';

const SearchBar = ({}) => {
  const style = {
    backgroundImage: `url(${Icon})`,
    backgroundRepeat: 'no-repeat'
  };

  return(
    <div className="searchContainer">
      <input placeholder="Digite o que você está procurando ..." style={style} />
    </div>
  );
};

export {SearchBar};
