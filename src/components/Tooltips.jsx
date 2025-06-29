const Tooltips = ({ idTooltip, dataTooltip }) => {
  return (
    <div
      id={idTooltip}
      role="tooltip"
      className="absolute z-10 invisible inline-block px-2.5 py-1.5 text-sm font-medium text-white bg-[#1e1e1e] rounded-lg shadow-lg inset-shadow-xs inset-shadow-gray-600 opacity-0 tooltip whitespace-nowrap"
    >
      {dataTooltip}
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
  );
};

export default Tooltips;
