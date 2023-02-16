import React from "react";

const Spinner = () => {
  return (
   <div className="flex items-center justify-center">
     <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin bg-[#001134] "></div>
   </div>
  );
};

export default Spinner;
