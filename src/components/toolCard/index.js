import React from 'react';
import {Button} from '../index';

import './style.css';

const ToolCard = ({title, description, link, onClick, tags='#tag'}) => {

  return(
    <div className="toolCardContainer">
      <div className="titleRow">
        <a href={link}>{title}</a>
        <Button title="remove" className="quartiaryDanger" icon="fa-closeicon fa-xs"  onClick={onClick} />
      </div>
      <div className="toolDescription">{description}</div>
      <div className="toolTags">
      { 
        tags.map((tag)=> 
         <span key={tag}>#{tag} </span>
        )
      }
      </div>
    </div>
  );
};

export {ToolCard}