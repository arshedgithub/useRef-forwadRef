import React from "react";

const Input = ({ type, onKeyDown, placeholder }, ref) => {
  return (
    <div>
      <input
        type={type}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
};

const forwardedInput = React.forwardRef(Input);
export default forwardedInput;
