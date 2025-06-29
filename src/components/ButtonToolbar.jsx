import React from "react";
import Tooltips from "./Tooltips";

const ButtonToolbar = ({ isActive = false, dataTooltip, icon }) => {
  return (
    <>
      <button
        className={`p-1.5 hover:backdrop-brightness-125 rounded-md flex items-center justify-center ${
          isActive && "bg-[#0C8CE9]"
        }`}
        {...(dataTooltip && {
          "data-tooltip-target": dataTooltip.target,
          "data-tooltip-placement": dataTooltip.position,
        })}
      >
        {icon}
      </button>
      <Tooltips
        idTooltip={dataTooltip.target}
        dataTooltip={dataTooltip.content}
      />
    </>
  );
};

export default ButtonToolbar;
