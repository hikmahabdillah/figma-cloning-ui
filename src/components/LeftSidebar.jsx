import {
  Figma,
  PanelLeft,
  Plus,
  Search,
  ChevronDown,
  ChevronRight,
  Square,
  LockOpen,
  Eye,
} from "lucide-react";
import Dropdown from "../components/Dropdown";
import FlexBetween from "../components/FlexBetween";
import Badge from "../components/Badge";
import { useState } from "react";
import Tooltips from "../components/Tooltips";
import PopupBox from "./PopupBox";
import MainMenuBox from "./MainMenuBox";
import UntitledBox from "./UntitledBox";

const LeftSidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // toggle visibility
  const [activePage, setActivePage] = useState("Page 1");
  const [isLayersOpen, setIsLayersOpen] = useState(true);
  const [selectedLayer, setSelectedLayer] = useState(null);

  return (
    <div className="min-w-[300px] absolute left-0 z-10 min-h-screen max-w-[300px] border-r border-[#424242] bg-[#2C2C2C]">
      {/* header menu */}
      <FlexBetween className={"pt-2.5 pb-1.5"}>
        <Dropdown
          content={<Figma strokeWidth={1.2} size={22} />}
          className={
            "px-2.5 py-2 text-[#fff] focus:bg-[#4A5878] focus:text-[#7cc4f8]"
          }
          dataTooltip={{ target: "main-menu", position: "right" }}
          idDropdown={"main-menu-dropdown"}
        />
        <MainMenuBox idPopup="main-menu-dropdown" />
        <Tooltips idTooltip={"main-menu"} dataTooltip={"Main menu"} />
        <div
          className="relative group text-white size-10 hover:bg-[#383838] px-2.5 py-2 rounded-lg flex items-center justify-center"
          data-tooltip-target="minimize-ui"
          data-tooltip-placement="bottom"
        >
          <PanelLeft strokeWidth={1.25} className="w-5 h-5" />
        </div>
        <Tooltips
          idTooltip={"minimize-ui"}
          dataTooltip={
            <div className="flex items-center gap-4">
              <p className="text-white font-medium">Minimize UI</p>
              <p className="text-[#BCBCBC]">Shift+\</p>
            </div>
          }
        />
      </FlexBetween>
      {/* header */}
      <div className="border-b border-[#424242] pb-3.5">
        <FlexBetween className={"py-0"}>
          <Dropdown
            content={"Untitled"}
            classNameContent={"mr-4 font-semibold text-[17px]"}
            className={"px-2 py-1"}
            idDropdown={"untitled-dropdown"}
          />
        </FlexBetween>
        <UntitledBox idPopup={"untitled-dropdown"} />
        <div className="flex items-center pl-3 gap-1.5 pt-0.5">
          <Badge
            text={
              <a href="/" className="cursor-default">
                Drafts
              </a>
            }
            badgeType="small"
            className={"hover:bg-[#383838] text-[#BCBCBC] hover:text-white"}
          />
          <Badge
            text={"Free"}
            badgeType="small"
            className={"bg-[#394360] text-[#7cc4f8]"}
          />
        </div>
      </div>
      <FlexBetween className={"py-1.5 border-b border-[#424242]"}>
        <div className="flex items-center gap-1.5">
          <Badge text={"File"} className={" "} isActive={true} />
          <Badge text={"Assets"} className={" "} />
        </div>
        <div
          className="relative group text-white size-10 hover:bg-[#383838] px-2.5 py-2 rounded-lg flex items-center justify-center"
          data-tooltip-target="search"
          data-tooltip-placement="bottom"
        >
          <Search className={"text-white w-5 h-5"} />
        </div>
        <Tooltips
          idTooltip={"search"}
          dataTooltip={
            <div className="flex items-center gap-4">
              <p className="text-white font-medium">Find</p>
              <p className="text-[#BCBCBC]">Ctrl+F</p>
            </div>
          }
        />
      </FlexBetween>
      {/* pages */}
      <div className="border-b border-[#424242] cursor-default">
        <FlexBetween className={`py-1.5 ${isOpen && "group"}`}>
          <div
            className="flex items-center gap-1 -ml-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <ChevronDown
                size={12}
                className={`text-gray-400 ${
                  isOpen && "opacity-0"
                } group-hover:opacity-100 transition-opacity`}
              />
            ) : (
              <ChevronRight
                size={12}
                className={`text-gray-400 ${
                  isOpen && "opacity-0"
                } group-hover:opacity-100 transition-opacity`}
              />
            )}
            <span className="text-sm font-bold text-white">Pages</span>
          </div>
          <div
            className="relative group text-white size-10 hover:bg-[#383838] px-2.5 py-2 rounded-lg flex items-center justify-center"
            data-tooltip-target="add-page"
            data-tooltip-placement="top"
          >
            <Plus className="text-white w-5 h-5" />
          </div>
          <Tooltips idTooltip={"add-page"} dataTooltip={"Add New Page"} />
        </FlexBetween>
        {isOpen && (
          <div className="space-y-2.5 text-sm pb-3.5 p-2.5 pt-0 overflow-y-auto h-[85px] custom-scrollbar">
            {["Page 1", "Page 2", "Page 3"].map((page) => (
              <div
                key={page}
                className={`px-3 py-1.5 rounded-md cursor-default ${
                  activePage === page
                    ? "bg-[#383838] text-white"
                    : "hover:bg-[#383838] hover:text-white"
                }`}
                onClick={() => setActivePage(page)}
              >
                <span className="text-white">{page}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* layers */}
      <div className="cursor-default">
        <FlexBetween className={`py-4 ${isLayersOpen && "group"}`}>
          <div
            className="flex items-center gap-1.5 -ml-1"
            onClick={() => setIsLayersOpen(!isLayersOpen)}
          >
            {isLayersOpen ? (
              <ChevronDown
                size={12}
                className={`text-gray-400 ${
                  isLayersOpen && "opacity-0"
                } group-hover:opacity-100 transition-opacity`}
              />
            ) : (
              <ChevronRight
                size={12}
                className={`text-gray-400 ${
                  isLayersOpen && "opacity-0"
                } group-hover:opacity-100 transition-opacity`}
              />
            )}
            <span className="text-sm font-bold text-white">Layers</span>
          </div>
        </FlexBetween>

        {isLayersOpen && (
          <div className="space-y-3 text-sm pb-3.5 p-2.5 pt-0">
            {["Rectangle 4", "Rectangle 3", "Rectangle 2", "Rectangle 1"].map(
              (layer) => (
                <div
                  className={`flex items-center justify-between rounded-md group ${
                    selectedLayer === layer
                      ? "bg-[#4A5878] text-white"
                      : "hover:bg-[#383838] hover:text-white"
                  }`}
                  onClick={() => setSelectedLayer(layer)}
                >
                  <div
                    key={layer}
                    className={"flex items-center gap-3 px-3 py-1.5"}
                  >
                    <Square className="text-white font-thin size-4" />
                    <span className="text-white text-sm">{layer}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="p-2 hover:backdrop-brightness-110 rounded-lg flex items-center justify-center">
                      <LockOpen
                        strokeWidth={1.25}
                        className="scale-x-[-1] w-3.5 h-3.5 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <div className="p-2 hover:backdrop-brightness-110 rounded-lg flex items-center justify-center">
                      <Eye
                        strokeWidth={1.25}
                        className="scale-x-[-1] w-3.5 h-3.5 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LeftSidebar;
