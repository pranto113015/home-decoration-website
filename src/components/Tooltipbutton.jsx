import React from "react";

const Tooltipbutton = ({ position = 'bottom', colors = ['bg-red-700', 'bg-green-700', 'bg-blue-700'] }) => {
  const positionClasses = {
    bottom: {
      tooltip: 'bottom-full left-1/2 transform -translate-x-1/2 mb-3',
      arrow: 'left-1/2 transform -translate-x-1/2 -bottom-2'
    },
    top: {
      tooltip: 'top-full left-1/2 transform -translate-x-1/2 mt-3',
      arrow: 'left-1/2 transform -translate-x-1/2 -top-2'
    }
  };

  const tooltipClass = positionClasses[position]?.tooltip || positionClasses.bottom.tooltip;
  const arrowClass = positionClasses[position]?.arrow || positionClasses.bottom.arrow;

  return (
    <div className="relative group">
      <button className="relative p-4 bg-white/25 rounded-full border text-xl">
        <div className={`hidden absolute p-2 space-x-1 rounded-lg bg-white/25 shadow-md group-hover:flex ${tooltipClass}`}>
          {colors.map((color, index) => (
            <div key={index} className={`size-3 ${color} border border-white rounded-full`}></div>
          ))}

          {/* tooltip arrow */}
          <div className={`absolute w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent 
            ${position === 'bottom' ? 'border-t-8 border-t-white/35' : 'border-b-8 border-b-white/35'} 
            ${arrowClass}`}>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Tooltipbutton;
