import React from 'react';
import './style.css';

const CloseIcon = ({onClick}) => {
  return (
    <span  onClick={onClick}>
      <svg id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.414 61.42">
        <g transform="translate(-568.793 -714.793)">
          <path class="a" d="M80,20.005l-60,60m60,0L20,20" transform="translate(549.501 695.5)"/>
        </g>
      </svg>
    </span>
  );
};

const SearchIcon = () => {
  return (
    <svg id="search" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 47.707 47.707">
      <g transform="translate(-1272 -1799)">
        <path class="a" d="M39.049,39.049,56,56" transform="translate(1263 1790)"/>
        <circle class="a" cx="17" cy="17" r="17" transform="translate(1273 1800)"/>
      </g>
    </svg>
  );
};


export {CloseIcon, SearchIcon};
