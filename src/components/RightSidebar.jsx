import Badge from "./Badge";
import ButtonToolbar from "./ButtonToolbar";
import Dropdown from "./Dropdown";
import FlexBetween from "./FlexBetween";
import Tooltips from "./Tooltips";
import {
  ChevronDown,
  ChevronRight,
  Ellipsis,
  Eye,
  Minus,
  Play,
  Plus,
  Settings2,
} from "lucide-react";

const RightSidebar = () => {
  return (
    <div className="min-w-[300px] absolute right-0 min-h-screen max-w-[300px] border-l border-[#424242] bg-[#2C2C2C]">
      <FlexBetween className={"pt-2.5 pb-1.5"}>
        <Dropdown
          content={
            <img
              src="./myLogo.jpeg"
              width={"30px"}
              className="rounded-full object-cover mr-1"
            />
          }
          className={"!rounded-full pr-1.5"}
          dataTooltip={{ target: "multiplayer-tools", position: "bottom" }}
          idDropdown={"multiplayer-dropdown"}
        />
        <Tooltips
          idTooltip={"multiplayer-tools"}
          dataTooltip={"Multiplayer tools"}
        />
        <div className="flex items-center gap-1">
          <div className="flex hover:backdrop-brightness-125 rounded-lg p-0.5">
            <ButtonToolbar
              dataTooltip={{
                target: "present-tab",
                position: "bottom",
                content: (
                  <div className="flex items-center gap-4">
                    <p className="text-white font-medium">Present</p>
                    <p className="text-[#BCBCBC]">Ctrl+Alt+Enter</p>
                  </div>
                ),
              }}
              icon={<Play className="text-white" strokeWidth={1} size={25} />}
            />
            <button
              className="p-1 text-white h-auto hover:backdrop-brightness-125 rounded-sm flex items-center justify-center"
              data-tooltip-target="prototype-view"
              data-tooltip-placement="bottom"
            >
              <ChevronDown size={12} />
            </button>
          </div>
          <Tooltips
            idTooltip={"prototype-view"}
            dataTooltip={"Prototype view"}
          />
          <button className="bg-[#0C8CE9] text-white px-4 py-2 rounded-md focus:ring focus:ring-blue-300">
            Share
          </button>
        </div>
      </FlexBetween>
      <FlexBetween className={"px-2.5 pt-0 pb-2.5 border-b border-[#424242]"}>
        <div className="flex items-center gap-1.5">
          <Badge text={"Design"} className={" "} isActive={true} />
          <Badge text={"Prototype"} className={" "} />
        </div>
        <div className="flex hover:backdrop-brightness-125 rounded-lg p-0.5">
          <Dropdown
            content={"10%"}
            className={
              "pl-6.5 pr-1.5 py-1 text-[#fff] focus:bg-[#4A5878] focus:text-[#7cc4f8]"
            }
            dataTooltip={{ target: "zoom-view", position: "bottom" }}
            idDropdown={"zoom-view-dropdown"}
            classNameContent={"mr-2.5"}
          />
          <Tooltips idTooltip={"zoom-view"} dataTooltip={"Zoom/view options"} />
        </div>
      </FlexBetween>
      <div className="p-3 pl-5 border-b border-[#424242]">
        <span className="text-sm mb-3 font-bold text-white">Page</span>
        <div className="mt-3 flex gap-2.5 h-max">
          <div className="flex bg-[#383838] rounded-lg w-full">
            <div className="flex items-center text-white text-sm font-medium flex-1 px-2 py-1.5 h-auto">
              <span className="size-4 bg-[#1e1e1e] mr-2"></span>
              <p>1E1E1E</p>
            </div>
            <div className="flex items-center text-white text-sm font-medium w-max px-2 py-1.5 h-auto border-l border-l-neutral-800">
              <p className="pr-2">100</p>
              <p>%</p>
            </div>
          </div>
          <ButtonToolbar
            dataTooltip={{
              target: "hide-tab",
              position: "bottom",
              content: "Hide",
            }}
            icon={<Eye className="text-white" strokeWidth={1} size={20} />}
          />
        </div>
        <label className="inline-flex items-center gap-2 mt-3.5 mb-4 cursor-pointer text-white">
          <input
            type="checkbox"
            defaultChecked
            className="w-5 h-5 rounded-md appearance-none border bg-[#383838] border-[#424242] checked:!bg-transparent checked:border-white focus:ring-0"
            checked={false}
          />
          <span className="text-sm">Show in exports</span>
        </label>
      </div>
      <FlexBetween className={"pl-5 border-b border-[#424242]"}>
        <span className="text-sm font-medium text-white">Variables</span>
        <ButtonToolbar
          dataTooltip={{
            target: "variable-tab",
            position: "bottom",
            content: "Open Variables",
          }}
          icon={
            <Settings2
              className="text-white rotate-90"
              strokeWidth={1}
              size={20}
            />
          }
        />
      </FlexBetween>
      <FlexBetween className={"pl-5 border-b border-[#424242]"}>
        <span className="text-sm font-medium text-white">Styles</span>
        <ButtonToolbar
          dataTooltip={{
            target: "style-tab",
            position: "bottom",
            content: "Create Style",
          }}
          icon={
            <Plus className="text-white rotate-90" strokeWidth={1} size={20} />
          }
        />
      </FlexBetween>
      <div className="p-3 pl-5 border-b border-[#424242]">
        <FlexBetween className={"!p-0"}>
          <span className="text-sm font-medium text-white">Export</span>
          <ButtonToolbar
            dataTooltip={{
              target: "add-export-tab",
              position: "bottom",
              content: "Add export setting",
            }}
            icon={
              <Plus
                className="text-white rotate-90"
                strokeWidth={1}
                size={20}
              />
            }
          />
        </FlexBetween>
        <div className="mt-2 flex items-center gap-2">
          <Dropdown
            content={"1x"}
            classNameContent={"mr-4"}
            className={"px-3 py-1.5 w-full bg-[#373737] justify-between"}
            idDropdown={"scale-dropdown"}
          />
          <Dropdown
            content={"PNG"}
            classNameContent={"mr-4"}
            className={
              "px-3 py-1.5 w-full border border-neutral-700 justify-between"
            }
            idDropdown={"format-image-dropdown"}
          />
          <ButtonToolbar
            dataTooltip={{
              target: "advance-export-tab",
              position: "bottom",
              content: "Advance export settings",
            }}
            icon={<Ellipsis className="text-white" strokeWidth={1} size={25} />}
          />
          <ButtonToolbar
            dataTooltip={{
              target: "remove-tab",
              position: "bottom",
              content: "Remove",
            }}
            icon={<Minus className="text-white" strokeWidth={1} size={20} />}
          />
        </div>
        <button className="my-2  text-sm rounded-md text-white w-full p-1 border border-neutral-700">
          Export Untitled
        </button>
        <div className="flex items-center gap-1 -ml-1 mt-1.5 mb-3">
          <ChevronRight
            size={12}
            className="text-gray-400 opacity-100 transition-opacity"
          />
          <span className="text-sm font-medium text-neutral-400">Preview</span>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
