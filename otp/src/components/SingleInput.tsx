import React, { forwardRef } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const SingleInput = forwardRef<HTMLInputElement, Props>(({ className = '', ...props }, ref) => {
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const input = e.target;
    const length = input.value.length;
    requestAnimationFrame(() => {
      input.setSelectionRange(length, length);
    });
    props.onFocus?.(e);
  };

  return (
    <input
      ref={ref}
      maxLength={1}
      inputMode="numeric"
      className={`w-12 h-12 text-center text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg ${className}`}
      {...props}
      onFocus={handleFocus}
    />
  );
});

SingleInput.displayName = 'SingleInput';
export default SingleInput;
