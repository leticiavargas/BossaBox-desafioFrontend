import React from 'react';
import {Button} from '../index';

import './style.css';

import Icon from  '../../assets/Icon-Close-2px.svg';

const ToolCard = ({title, key, description, link, onClick, tags='#tag'}) => {


  return(
    <div key={key} className="toolCardContainer">
      <div className="titleRow">
        <a href={link}>{title}</a>
        <Button title="remove" className="quartiaryDanger" Icon={Icon} onClick={onClick} />
      </div>
      <div className="toolDescription">{description}</div>
      <div className="toolTags">{tags}</div>
    </div>
  );
};

export {ToolCard}