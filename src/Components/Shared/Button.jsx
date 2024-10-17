import React from 'react';
import cn from 'classnames';

const Button = ({ children, className }) => {
  return (
    <button className={cn('bg-orange text-white text-xs font-onest px-[25px] py-2', className)}>
      {children}
    </button>
  );
};

export default Button;
