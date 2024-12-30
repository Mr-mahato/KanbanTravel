import React from "react";
import { CircleHelp, ChevronDown } from "lucide-react";
function Headers() {
  return (
    <div className="flex justify-between p-6 border-b ">
      {/* left side */}

      <div className="left flex flex-row gap-2 justify-center items-center">
      <button className="hdr_btn">Location</button>
      <button className="hdr_btn">Accomodation</button>
      <button className="hdr_btn">Rent</button>
      <button className="hdr_btn">Tour</button>
      </div>

      <div className="flex gap-2">
        <div className="flex gap-2 hover:bg-neutral-200 p-2 rounded-md">
          <CircleHelp />
          <button className="text-neutral-600 ">Help Center</button>
        </div>

        <div className="flex gap-2 hover:bg-neutral-200 p-2 rounded-md">
         <img src="https://randomuser.me/api/portraits/men/85.jpg" className="w-6 h-6 rounded-full self-center" alt="A" />
          <button className="text-neutral-600 font-semibold">Johny</button>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

export default Headers;
