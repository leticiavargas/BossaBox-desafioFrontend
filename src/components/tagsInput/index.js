import React, {useState} from 'react';
import {CloseIcon} from '../index';
import './style.css';

const TagsInput = ({selectedTags}) => {
  
  const [tags, setTags] = useState([]);

  const addTags = event => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  const removeTags = index => {
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
  };
  
  return (
    <div className="tags-input">
      <ul id="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            <span className='tag-title'>{tag}</span>
            <span className='tag-close-icon'
              onClick={() => removeTags(index)}
            >
             <CloseIcon />
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={event => addTags(event)}
      />
    </div>
  );
};

export {TagsInput};