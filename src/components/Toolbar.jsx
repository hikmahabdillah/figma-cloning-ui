import {
  Blocks,
  ChevronDown,
  CodeXml,
  Frame,
  Grid2x2Plus,
  LineSquiggle,
  MessageCircle,
  MousePointer2,
  PencilRuler,
  PenTool,
  Square,
  Type,
} from "lucide-react";
import ButtonToolbar from "./ButtonToolbar";
import Tooltips from "./Tooltips";

const Toolbar = () => {
  return (
    <div className="w-max h-max absolute translate-x-[-50%] left-[50%] font-medium text-white bg-[#2c2c2c] rounded-xl shadow-lg shadow-neutral-900 inset-shadow-xs inset-shadow-gray-600 flex gap-2.5 bottom-4 px-2.5 z-20">
      <div className="flex items-center gap-1.5 py-2.5 pr-2 border-r border-neutral-700">
        <div className="flex">
          <ButtonToolbar
            dataTooltip={{
              target: "move-toolbar",
              position: "top",
              content: (
                <div className="flex items-center gap-4">
                  <p className="text-white font-medium">Move</p>
                  <p className="text-[#BCBCBC]">V</p>
                </div>
              ),
            }}
            isActive={true}
            icon={<MousePointer2 strokeWidth={1} size={28} />}
          />
          {/* */}
          <button
            className="p-1 h-auto hover:backdrop-brightness-125 rounded-sm flex items-center justify-center"
            data-tooltip-target="chevron-move"
            data-tooltip-placement="top"
          >
            <ChevronDown size={12} />
          </button>
          <Tooltips idTooltip={"chevron-move"} dataTooltip={"Move Tools"} />
        </div>
        <div className="flex">
          <ButtonToolbar
            dataTooltip={{
              target: "frame-toolbar",
              position: "top",
              content: (
                <div className="flex items-center gap-4">
                  <p className="text-white font-medium">Frame</p>
                  <p className="text-[#BCBCBC]">F</p>
                </div>
              ),
            }}
            icon={<Frame strokeWidth={1} size={25} />}
          />
          <button
            className="p-1 h-auto hover:backdrop-brightness-125 rounded-sm flex items-center justify-center"
            data-tooltip-target="chevron-Region"
            data-tooltip-placement="top"
          >
            <ChevronDown size={12} />
          </button>
          <Tooltips idTooltip={"chevron-Region"} dataTooltip={"Region Tools"} />
        </div>
        <div className="flex">
          <ButtonToolbar
            dataTooltip={{
              target: "rectangle-toolbar",
              position: "top",
              content: (
                <div className="flex items-center gap-4">
                  <p className="text-white font-medium">Rectangle</p>
                  <p className="text-[#BCBCBC]">R</p>
                </div>
              ),
            }}
            icon={<Square strokeWidth={1} size={25} />}
          />
          <button
            className="p-1 h-auto hover:backdrop-brightness-125 rounded-sm flex items-center justify-center"
            data-tooltip-target="shape-tools"
            data-tooltip-placement="top"
          >
            <ChevronDown size={12} />
          </button>
          <Tooltips idTooltip={"shape-tools"} dataTooltip={"Shape Tools"} />
        </div>
        <div className="flex">
          <ButtonToolbar
            dataTooltip={{
              target: "pen-toolbar",
              position: "top",
              content: (
                <div className="flex items-center gap-4">
                  <p className="text-white font-medium">Pen</p>
                  <p className="text-[#BCBCBC]">P</p>
                </div>
              ),
            }}
            icon={<PenTool strokeWidth={1} size={25} />}
          />
          <button
            className="p-1 h-auto hover:backdrop-brightness-125 rounded-sm flex items-center justify-center"
            data-tooltip-target="creation-tools"
            data-tooltip-placement="top"
          >
            <ChevronDown size={12} />
          </button>
          <Tooltips
            idTooltip={"creation-tools"}
            dataTooltip={"Creation Tools"}
          />
        </div>
        <ButtonToolbar
          dataTooltip={{
            target: "text-toolbar",
            position: "top",
            content: (
              <div className="flex items-center gap-4">
                <p className="text-white font-medium">Text</p>
                <p className="text-[#BCBCBC]">T</p>
              </div>
            ),
          }}
          icon={<Type strokeWidth={1} size={25} />}
        />
        <ButtonToolbar
          dataTooltip={{
            target: "comment-toolbar",
            position: "top",
            content: (
              <div className="flex items-center gap-4">
                <p className="text-white font-medium">Comment</p>
                <p className="text-[#BCBCBC]">C</p>
              </div>
            ),
          }}
          icon={<MessageCircle strokeWidth={1} size={25} />}
        />
        <ButtonToolbar
          dataTooltip={{
            target: "actions-toolbar",
            position: "top",
            content: (
              <div className="flex items-center gap-4">
                <p className="text-white font-medium">Actions</p>
                <p className="text-[#BCBCBC]">Ctrl+K</p>
              </div>
            ),
          }}
          icon={<Grid2x2Plus strokeWidth={1} size={25} />}
        />
      </div>

      <div className="flex items-center gap-2 py-2">
        <div className="flex gap-1 p-1 h-auto bg-[#424242] rounded-lg">
          <button
            className="p-1.5 hover:backdrop-brightness-125 rounded-md flex items-center justify-center"
            data-tooltip-target="draw-toolbar"
            data-tooltip-placement="top"
          >
            <LineSquiggle size={20} />
          </button>
          <Tooltips idTooltip={"draw-toolbar"} dataTooltip={"Draw"} />
          <button
            className="p-1.5 bg-[#2c2c2c] text-[#7cc4f8] hover:backdrop-brightness-125 rounded-md flex items-center justify-center"
            data-tooltip-target="design-toolbar"
            data-tooltip-placement="top"
          >
            <PencilRuler size={20} />
          </button>
          <Tooltips idTooltip={"design-toolbar"} dataTooltip={"Design"} />
          <button
            className="p-1.5 hover:backdrop-brightness-125 rounded-md flex items-center justify-center"
            data-tooltip-target="devmode-toolbar"
            data-tooltip-placement="top"
          >
            <CodeXml size={20} />
          </button>
          <Tooltips idTooltip={"devmode-toolbar"} dataTooltip={"Dev Mode"} />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
