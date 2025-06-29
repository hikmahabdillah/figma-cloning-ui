const Badge = ({ text, className, badgeType = "medium", isActive = false }) => {
  const badgeTypeClass = () => {
    switch (badgeType) {
      case "small":
        return "py-1 px-1";
      case "medium":
        return "py-2 px-2.5 hover:bg-[#383838] text-[#BCBCBC]";
      default:
        return "";
    }
  };

  return (
    <span
      className={`text-sm font-medium rounded-md transition-all duration-200 leading-none cursor-default ${className} ${badgeTypeClass()} ${
        isActive && "bg-[#383838] text-white"
      }`}
    >
      {text}
    </span>
  );
};

export default Badge;
