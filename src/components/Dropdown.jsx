import { ChevronDown } from "lucide-react";

const Dropdown = ({
  content,
  className,
  classNameContent,
  dataTooltip,
  idDropdown,
}) => {
  return (
    <>
      <button
        id={idDropdown + "-button"}
        data-dropdown-toggle={idDropdown}
        className={`text-white font-medium rounded-lg text-sm text-center flex items-center hover:bg-[#373737] ${className}`}
        type="button"
        {...(dataTooltip && {
          "data-tooltip-target": dataTooltip.target,
          "data-tooltip-placement": dataTooltip.position,
        })}
      >
        <div className="flex items-center justify-between w-full">
          <div className={classNameContent}>{content}</div>
          <ChevronDown className="size-3 ml-0.5" />
        </div>
      </button>
    </>
  );
};

export default Dropdown;
