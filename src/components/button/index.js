import React, {useMemo} from 'react';

import './style.css';

const Button = React.memo(({ title, disabled, className, ...otherProps }) => {
  const buttonClassName = useMemo(() => (
    `buttonPrimary ${className ? className : ''}`
  ), [className]);


  return (
    <button className={buttonClassName} disabled={disabled}  { ...otherProps }>
    {title}
    </button>
  );
});


export {Button};