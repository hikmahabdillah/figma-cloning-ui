import { ChevronRight, Search } from "lucide-react";
import PopupBox from "./PopupBox";

const MainMenuBox = ({ idPopup }) => {
  return (
    <PopupBox idPopup={idPopup}>
      {/* Back to files */}
      <li>
        <a
          href="#"
          className="block pl-8 pr-2 py-1 rounded-md hover:bg-[#0C8CE9]"
        >
          Back to files
        </a>
      </li>

      {/* Divider */}
      <li>
        <hr className="my-2 border-gray-700" />
      </li>

      {/* Actions with search and shortcut */}
      <li>
        <div className="flex items-center justify-between pl-2 pr-2 py-1 rounded-md hover:bg-[#0C8CE9]">
          <div className="flex items-center gap-2 text-[15px] text-white">
            <Search size={14} />
            <span>Actions...</span>
          </div>
          <span className="text-[15px] text-gray-400">Ctrl+K</span>
        </div>
      </li>

      {/* Divider */}
      <li>
        <hr className="my-2 border-gray-700" />
      </li>

      {/* Main menus with chevron */}
      {["File", "Edit", "View", "Object", "Text", "Arrange", "Vector"].map(
        (item, index) => (
          <li key={index}>
            <a
              href="#"
              className="flex justify-between items-center pl-8 pr-2 py-1 rounded-md text-[15px] hover:bg-[#0C8CE9]"
            >
              <span>{item}</span>
              <ChevronRight size={12} className="text-white" />
            </a>
          </li>
        )
      )}

      {/* Divider */}
      <li>
        <hr className="my-2 border-gray-700" />
      </li>

      {/* Main menus with chevron */}
      {["Plugins", "Widgets", "Preferences", "Libraries"].map((item, index) => (
        <li key={index}>
          <a
            href="#"
            className="flex justify-between items-center pl-8 pr-2 py-1 rounded-md text-[15px] hover:bg-[#0C8CE9]"
          >
            <span>{item}</span>
            <ChevronRight size={12} className="text-white" />
          </a>
        </li>
      ))}

      {/* Divider */}
      <li>
        <hr className="my-2 border-gray-700" />
      </li>

      {/* Footer menu */}
      <li>
        <a
          href="#"
          className="block pl-8 pr-2 py-1 rounded-md hover:bg-[#0C8CE9]"
        >
          Get desktop app
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex justify-between items-center pl-8 pr-2 py-1 rounded-md hover:bg-[#0C8CE9]"
        >
          <span>Help and account</span>
          <ChevronRight size={12} className="text-white" />
        </a>
      </li>
    </PopupBox>
  );
};

export default MainMenuBox;
