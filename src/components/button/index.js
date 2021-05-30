import React, {useMemo} from 'react';

import './style.css';

const Button = React.memo(({ title, disabled, className, icon, ...otherProps }) => {
  const buttonClassName = useMemo(() => (
    `buttonPrimary ${className ? className : ''}`
  ), [className]);
  
 

  return (
    <button className={buttonClassName} disabled={disabled}  { ...otherProps }>
      { icon && <i className={`fa ${icon}`} />} {title}
    </button>
  );
});


export {Button};