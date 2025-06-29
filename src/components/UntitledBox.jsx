import { ChevronRight } from "lucide-react";
import PopupBox from "./PopupBox";

const UntitledBox = ({ idPopup }) => {
  return (
    <PopupBox idPopup={idPopup}>
      {/* Show version history */}
      <li>
        <a href="#" className="block p-2 py-1 rounded-md hover:bg-[#0C8CE9]">
          Show version history
        </a>
      </li>

      {/* Publish library (disabled-looking item) */}
      <li>
        <span className="block p-2 py-1 rounded-md text-gray-500 cursor-default select-none">
          Publish library...
        </span>
      </li>

      {/* Export... + shortcut */}
      <li>
        <div className="flex items-center justify-between p-2 py-1 rounded-md hover:bg-[#0C8CE9]">
          <span>Export...</span>
          <span className="text-[15px] text-gray-400">Ctrl+Shift+E</span>
        </div>
      </li>

      {/* Divider */}
      <li>
        <hr className="my-2 border-gray-700" />
      </li>

      {/* Add to sidebar > */}
      <li>
        <a
          href="#"
          className="flex justify-between items-center p-2 py-1 rounded-md text-[15px] hover:bg-[#0C8CE9]"
        >
          <span>Add to sidebar</span>
          <ChevronRight size={12} className="text-white" />
        </a>
      </li>

      {/* Create branch... */}
      <li>
        <a href="#" className="block p-2 py-1 rounded-md hover:bg-[#0C8CE9]">
          Create branch...
        </a>
      </li>

      {/* File color profile > */}
      <li>
        <a
          href="#"
          className="flex justify-between items-center p-2 py-1 rounded-md text-[15px] hover:bg-[#0C8CE9]"
        >
          <span>File color profile</span>
          <ChevronRight size={12} className="text-white" />
        </a>
      </li>

      {/* Divider */}
      <li>
        <hr className="my-2 border-gray-700" />
      </li>

      {/* Bottom menus */}
      {["Duplicate", "Rename", "Move file...", "Move to trash"].map(
        (item, index) => (
          <li key={index}>
            <a
              href="#"
              className="block p-2 py-1 rounded-md hover:bg-[#0C8CE9]"
            >
              {item}
            </a>
          </li>
        )
      )}
    </PopupBox>
  );
};

export default UntitledBox;
