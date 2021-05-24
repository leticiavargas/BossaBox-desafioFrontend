import React, {useState} from 'react';
import './style.css';

const TagsInput = ({ title, value = [], onChange }) => {
  const [tagText, setTagText] = useState('');

  const handleTagTextChange = (e) => setTagText(e.target.value);

  const handleTagsChange = (tags) => {
    if (onChange) {
      onChange(tags);
    }
  };

  const addTags = e => {
    if (e.key === "Enter" && e.target.value?.trim().length) {
      setTagText('');
      handleTagsChange([ ...value, e.target.value ]);
    }
  };

  const removeTags = index => {
    handleTagsChange(value.filter(tag => value.indexOf(tag) !== index));
  };

  return (
    <div className="inputContainer">
      {title && (  
        <div className="inputTitle">{title}</div>
      )}
      <div className="tags-input">
        <ul id="tags"> 
          {value.map((tag, index) => (
            <li key={index} className="tag">
              <p className='tag-title'>{tag}</p>
              <p className='tag-close-icon'
                onClick={() => removeTags(index)}
              >
                <i className="fa fa-closeicon fa-xs" />
              </p>
            </li>
          ))}
        </ul>
        <input type="text" value={tagText} onChange={handleTagTextChange} onKeyUp={addTags} />
      </div>
    </div>
  );
};

export {TagsInput};