import React from "react";

interface FindModelProps {
  onClose: () => void;
  findModel: boolean;
}

function FindModel({ onClose, findModel }: FindModelProps) {
  function handleModelClose(e: React.MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLElement).classList.contains("FindModel")) {
      onClose();
    }
  }
  if (!findModel) return null;
  return (
    <div
      onClick={handleModelClose}
      className="fixed inset-0 bg-black/80 z-20 flex flex-col justify-center items-center FindModel"
    >
      <div className="border flex flex-col  p-6 rounded-md bg-white sm:w-[25%] w-[95%]  gap-2">
        <h1 className="text-lg font-medium text-neutral-800">Search Menu</h1>
        <div className="flex w-full sm:flex-row flex-col gap-2">
          <input
            type="text"
            placeholder="Search for menu"
            className="outline-none p-2 rounded-md text-sm border w-full border-purple-500"
          />
          <button className="bg-purple-600 rounded-md px-3 self-center py-1 text-white font-medium">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default FindModel;
