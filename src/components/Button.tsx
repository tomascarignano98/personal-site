import React from 'react';

import { clsxm } from '@/lib/clsxm';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}
export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      onMouseDown={(e) => e.preventDefault()}
      className={clsxm(
        'whitespace-nowrap rounded border-none bg-primary py-3 px-12 font-semibold text-white hover:bg-primaryHover focus:outline-offset-4 disabled:cursor-not-allowed',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
