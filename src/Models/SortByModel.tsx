import React from "react";

interface modelPositionInterface {
  top: number;
  left: number;
}
interface SortByModelProps {
  onClose: () => void;
  sortByModel: boolean;
  modalPosition: modelPositionInterface;
}

function SortByModel({
  onClose,
  sortByModel,
  modalPosition,
}: SortByModelProps) {
  function handleModelClose(e) {
    if (e.target.classList.contains("sortModel")) {
      onClose();
    }
  }
  if (!sortByModel) return null;
  return (
    <div
      onClick={(e) => handleModelClose(e)}
      className="fixed inset-0 sortModel bg-black/40 top-0 min-h-screen min-w-screen right-0 left-0 z-20  "
    >
      <div
        style={{
          position: "absolute",
          top: modalPosition.top,
          left: modalPosition.left,
        }}
        className=" bg-white flex flex-col  py-4 rounded-md border"
      >
        <p className="hover:bg-black/10 px-2 py-1 w-full">Price(Low to High)</p>
        <p className="hover:bg-black/10 py-1 px-2 w-full">Price(High to Low)</p>
        <p className="hover:bg-black/10 py-1 px-2 w-full">Rating</p>
        <p className="hover:bg-black/10 py-1 px-2 w-full">Duration</p> 

      </div>
    </div>
  );
}

export default SortByModel;
