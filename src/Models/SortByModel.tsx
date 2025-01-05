import React from "react";
import { dataContext } from "../Context/DataContext";

interface modelPositionInterface {
  top: number;
  left: number;
}

interface SortByModelProps {
  onClose: () => void;
  sortByModel: boolean;
  modalPosition: modelPositionInterface;
}


function SortByModel({ onClose, sortByModel, modalPosition }: SortByModelProps) {
  const { setHotelData, HotelData }  = dataContext();

  function handleModelClose(e: React.MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLElement).classList.contains("sortModel")) {
      onClose();
    }
  }

  if (!sortByModel) return null;

  const handleSort = (option: string) => {
    let sortedItems;
    switch (option) {
      case "priceLowToHigh":
        sortedItems = [...HotelData].sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        sortedItems = [...HotelData].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sortedItems = [...HotelData].sort((a, b) => b.rating - a.rating);
        break;
      case "duration":
        sortedItems = [...HotelData].sort((a, b) => a.duration - b.duration);
        break;
      default:
        sortedItems = HotelData;
    }
    setHotelData(sortedItems);
    onClose();
  };

  return (
    <div onClick={handleModelClose} className="fixed inset-0 sortModel bg-black/40 top-0 min-h-screen min-w-screen right-0 left-0 z-20">
      <div
        style={{
          position: "absolute",
          top: modalPosition.top,
          left: modalPosition.left,
        }}
        className=" bg-white flex flex-col  py-4 rounded-md border"
      >
        <p onClick={()=>handleSort("priceLowToHigh")} className="hover:bg-black/10 px-2 py-1 w-full cursor-pointer">
          Price(Low to High)
        </p>
        <p onClick={()=>handleSort("priceHighToLow")} className="hover:bg-black/10 py-1 px-2 w-full cursor-pointer">
          Price(High to Low)
        </p>
        <p onClick={()=>handleSort("rating")} className="hover:bg-black/10 py-1 px-2 w-full cursor-pointer">
          Rating
        </p>
        <p onClick={()=>handleSort("duration")}  className="hover:bg-black/10 py-1 px-2 w-full cursor-pointer">
          Duration
        </p>
      </div>
    </div>
  );
}

export default SortByModel;
