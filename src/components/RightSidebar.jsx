import Badge from "./Badge";
import ButtonToolbar from "./ButtonToolbar";
import Dropdown from "./Dropdown";
import FlexBetween from "./FlexBetween";
import Tooltips from "./Tooltips";
import { ChevronDown, Play } from "lucide-react";

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
      </div>
    </div>
  );
};

export default RightSidebar;
