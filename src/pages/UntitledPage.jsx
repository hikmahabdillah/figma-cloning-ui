import {
  Figma,
  PanelLeft,
  Plus,
  Search,
  ChevronDown,
  ChevronRight,
  Square,
} from "lucide-react";
import Dropdown from "../components/Dropdown";
import FlexBetween from "../components/FlexBetween";
import Badge from "../components/Badge";
import { useState } from "react";

const UntitledPage = () => {
  const [isOpen, setIsOpen] = useState(false); // toggle visibility
  const [activePage, setActivePage] = useState("Page 1");
  const [isLayersOpen, setIsLayersOpen] = useState(true);
  const [selectedLayer, setSelectedLayer] = useState(null);

  return (
    <div className="min-h-screen flex justify-between w-full font-inter">
      {/* Left Sidebar */}
      <div className="w-[300px] sm:w-full min-h-screen max-w-[300px] border-r border-[#424242] bg-[#2C2C2C]">
        <FlexBetween className={"pt-2.5 pb-1.5"}>
          <Dropdown
            content={<Figma className="size-6" />}
            className={"px-2.5 py-2"}
          />
          <PanelLeft
            className={
              "text-white size-10 hover:bg-[#383838] px-2.5 py-2 rounded-lg"
            }
          />
        </FlexBetween>
        <div className="border-b border-[#424242] pb-3.5">
          <FlexBetween className={"py-0"}>
            <Dropdown
              content={"Untitled"}
              classNameContent={"mr-4 font-semibold text-[17px]"}
              className={"px-2 py-0.5"}
            />
          </FlexBetween>
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
          <Search
            className={
              "text-white size-10 hover:bg-[#383838] px-2.5 py-2 rounded-lg"
            }
          />
        </FlexBetween>
        <div className="border-b border-[#424242] cursor-pointer">
          <FlexBetween className={"py-1.5"}>
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
            <Plus className="text-white size-10 hover:bg-[#424242] px-2.5 py-2 rounded-lg" />
          </FlexBetween>
          {isOpen && (
            <div className="space-y-1 text-sm pb-3.5 p-2.5 pt-0">
              {["Page 1", "Page 2"].map((page) => (
                <div
                  key={page}
                  className={`px-3 py-1.5 rounded-md cursor-pointer ${
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
        <div className="border-b border-[#424242] cursor-pointer">
          <FlexBetween className="py-4 group">
            <div
              className="flex items-center gap-1.5 -ml-1"
              onClick={() => setIsLayersOpen(!isLayersOpen)}
            >
              {isLayersOpen ? (
                <ChevronDown
                  size={12}
                  className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <ChevronRight
                  size={12}
                  className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              )}
              <span className="text-sm font-bold text-white">Layers</span>
            </div>
          </FlexBetween>

          {isLayersOpen && (
            <div className="space-y-1 text-sm pb-3.5 p-2.5 pt-0">
              {["Rectangle 4", "Rectangle 3", "Rectangle 2", "Rectangle 1"].map(
                (layer) => (
                  <div
                    key={layer}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md cursor-pointer ${
                      selectedLayer === layer
                        ? "bg-[#383838] text-white"
                        : "hover:bg-[#383838] hover:text-white"
                    }`}
                    onClick={() => setSelectedLayer(layer)}
                  >
                    <Square className="text-white font-thin size-4" />
                    <span className="text-white text-sm">{layer}</span>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
      {/* Canvas */}
      <div className="w-full min-h-screen bg-[#1E1E1E]"></div>
      {/* Right Sidebar */}
      <div className="w-[300px] sm:w-full min-h-screen max-w-[300px] border-l border-[#424242] bg-[#2C2C2C]">
        a
      </div>
    </div>
  );
};

export default UntitledPage;
