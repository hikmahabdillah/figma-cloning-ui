import React from "react";

const FlexBetween = ({ children, className }) => {
  return (
    <div className={`flex justify-between items-center p-2.5 ${className}`}>
      {children}
    </div>
  );
};

export default FlexBetween;
