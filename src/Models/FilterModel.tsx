import React, { useEffect } from "react";
interface FilterModelProps {
  onClose: () => void;
  filterBy: boolean;
}

function FilterModel({ onClose, filterBy }: FilterModelProps) {
  function handleModelClose(e) {
    if (e.target.classList.contains("filterModel")) {
      onClose();
    }
  }
  if (!filterBy) return null;
  return (
    <div
      onClick={(e) => handleModelClose(e)}
      className="fixed inset-0 bg-black/80 z-20 flex justify-center items-center filterModel"
    >
      <div className="border  p-4 rounded-md bg-white">
        <h1 className="font-medium text-center p-2">Filter options</h1>
        <div>
          <h2 className="font-medium text-neutral-800">Price</h2>
          <input className="outline-none border mr-2 font-medium text-neutral-800 rounded-md p-1 border-purple-600" type="number" value={0} />
          <input className="outline-none border mr-2 font-medium text-neutral-800 rounded-md p-1 border-purple-600" type="number" value={1000} />
        </div>

        <div className="flex flex-col mt-4 gap-2">
          <h3 className="font-medium">Locations</h3>
          <div className="flex justify-between">

          <div className=" flex-1">
            <div>
              <input className="mr-2" type="checkbox" value={"dhaka"} />
              <label htmlFor="dhaka">Dhaka</label>
            </div>
            <div>
              <input className="mr-2 cursor-pointer" type="checkbox" value={"dhaka"} />
              <label htmlFor="dhaka">Delhi</label>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <input className="mr-2 cursor-pointer" type="checkbox" value={"dhaka"} />
              <label htmlFor="dhaka">Italy</label>
            </div>
            <div>
              <input className="mr-2 cursor-pointer" type="checkbox" value={"dhaka"} />
              <label htmlFor="dhaka">Iceland</label>
            </div>
          </div>
          </div>
        </div>

        <div className="flex flex-col mt-4 gap-2">
          <h3 className="font-medium">Durations</h3>
          <div className="flex justify-between">

          <div className=" flex-1">
            <div>
              <input className="mr-2" type="checkbox" value={"dhaka"} />
              <label htmlFor="dhaka">Dhaka</label>
            </div>
            <div>
              <input className="mr-2 cursor-pointer" type="checkbox" value={"dhaka"} />
              <label htmlFor="dhaka">Delhi</label>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <input className="mr-2 cursor-pointer" type="checkbox" value={"dhaka"} />
              <label htmlFor="dhaka">Italy</label>
            </div>
            <div>
              <input className="mr-2 cursor-pointer" type="checkbox" value={"dhaka"} />
              <label htmlFor="dhaka">Iceland</label>
            </div>
          </div>
          </div>
        </div>

        <div className="flex flex-col mt-4 gap-2">
          <h3 className="font-medium">Services</h3>
          <div className="flex justify-between">

          <div className=" flex-1">
            <div>
              <input className="mr-2" type="checkbox" value={"dhaka"} />
              <label htmlFor="dhaka">Dhaka</label>
            </div>
            <div>
              <input className="mr-2 cursor-pointer" type="checkbox" value={"dhaka"} />
              <label htmlFor="dhaka">Delhi</label>
            </div>
          </div>
          <div className="flex-1">
            <div>
              <input className="mr-2 cursor-pointer" type="checkbox" value={"dhaka"} />
              <label htmlFor="dhaka">Italy</label>
            </div>
            <div>
              <input className="mr-2 cursor-pointer" type="checkbox" value={"dhaka"} />
              <label htmlFor="dhaka">Iceland</label>
            </div>
          </div>
          </div>
        </div>

        

       
      </div>
    </div>
  );
}

export default FilterModel;
