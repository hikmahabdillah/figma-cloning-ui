import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Toolbar from "../components/Toolbar";

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
    </div>
  );
};

export default UntitledPage;
