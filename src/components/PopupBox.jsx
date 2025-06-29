import React from "react";
import { ChevronRight, Search } from "lucide-react";

const PopupBox = ({ idPopup, children }) => {
  return (
    <div
      id={idPopup}
      className="w-64 hidden font-medium text-white bg-[#1e1e1e] rounded-xl shadow-lg shadow-neutral-900 inset-shadow-xs inset-shadow-gray-600 translate-x-2.5 translate-y-0 p-2.5 z-[5]"
    >
      <ul className="text-[15px]" aria-labelledby={idPopup + "-button"}>
        {children}
      </ul>
    </div>
  );
};

export default PopupBox;
