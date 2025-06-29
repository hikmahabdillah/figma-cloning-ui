import { CircleQuestionMark } from "lucide-react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Toolbar from "../components/Toolbar";
import Tooltips from "../components/Tooltips";

const UntitledPage = () => {
  return (
    <div className="min-h-screen flex w-full font-inter">
      {/* Left Sidebar */}
      <LeftSidebar />
      {/* Canvas */}
      <div className="w-full min-h-screen bg-[#1E1E1E]"></div>
      {/* Toolbar */}
      <Toolbar />
      {/* Right Sidebar */}
      <RightSidebar />
      {/* Help Button */}
      <button
        className="bg-[#1e1e1e] rounded-full size-11 flex items-center justify-center fixed bottom-7 right-7"
        data-tooltip-target="help-resources"
        data-tooltip-placement="top"
      >
        <CircleQuestionMark className="size-7 text-white" />
      </button>
      <Tooltips
        idTooltip={"help-resources"}
        dataTooltip={"Help and resources"}
      />
    </div>
  );
};

export default UntitledPage;
