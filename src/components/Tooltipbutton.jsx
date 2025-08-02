import React from "react";


const Tooltipbutton = ({position='bottom'}) => {
  const positiconClasses = {
    bottom: {
      tooltip: ' bottom-full left-1/2 transform -translate-x-1/2 mb-3',
      arrow: 'left-1/2 transform -translate-x-1/2 -bottom-2 border-1'
    }
    // Add more positions if needed
  };

  const tooltipClass = positiconClasses[position]?.tooltip || positiconClasses.bottom.tooltip;
  const arrowClass = positiconClasses[position]?.arrow || positiconClasses.bottom.arrow;

  return (
    <div className="relative group">
      <button className="relative p-4 bg-white/25 rounded-full border-1 bg-white text-xl">
        <div className={`hidden absolute p-2 space-x-1 rounded-lg bg-white/25 shadow-md group-hover:flex${tooltipClass}`}>
          <div className="size-3 bg-red-700 border border-white rounded-full" />
          <div className="size-3 bg-green-700 border border-white rounded-full" />
          <div className="size-3 bg-blue-700 border border-white rounded-full" />

          {/* tooltip arrow */}
          <div className={`absolute w-0 h-0 border-1-8 border-1-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35 ${arrowClass}`}></div>
        </div>
      </button>
    </div>
  );
};

export default Tooltipbutton;
