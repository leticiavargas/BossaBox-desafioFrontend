import React from 'react';
import {Button} from '../index';

import './style.css';

const ToolCard = ({title, key, description, link, onClick, tags='#tag'}) => {

  return(
    <div key={key} className="toolCardContainer">
      <div className="titleRow">
        <a href={link}>{title}</a>
        <Button title="remove" className="quartiaryDanger"  onClick={onClick} />
      </div>
      <div className="toolDescription">{description}</div>
      <div className="toolTags">
      { 
        tags.map((tag)=> 
         <span>#{tag} </span>
        )
      }
      </div>
    </div>
  );
};

export {ToolCard}