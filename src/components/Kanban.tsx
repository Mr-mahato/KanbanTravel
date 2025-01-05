import { useState } from "react";
import HomeContentView from "../Models/HomeContentView";
import { dataContext } from "../Context/DataContext";

const Kanban = () => {
  const [contentModel, setContentModel] = useState<boolean>(false);
  const [particularHotel, setParticularHotel] = useState<any>({});
  const { HotelData } = dataContext();

  const kanbanRender = HotelData.map((val:any, ind:number) => {
    return (
      <div
        onClick={() => {
          setContentModel(true);
          setParticularHotel(val);
        }}
        key={ind}
        className="w-[300px] shadow-md bg-neutral-100 hover:border-blue-600 hover:border-2 cursor-pointer transition duration-300 ease-in-out hover:scale-105 hover:scale-x-100 rounded-md flex flex-col gap-4"
      >
        <img className="rounded-t-md object-cover" src={val.image} alt="view of hotel" />
        <div className="p-2">
          <h1 className="font-bold text-lg uppercase text-neutral-950">{val.title}</h1>
          <div className="flex gap-1 text-neutral-400 font-medium">
            <h1>{val.location}</h1>
            <h1>•{val.duration}h</h1>
            <h1>•{val.type}</h1>
          </div>
          <div className="">
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="">{val.rating}</span>
          </div>
          <p className="font-medium text-neutral-600">
            <span className="text-xl font-bold text-green-500">${val.price}</span>
            /person
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="w-[98%] transition-all duration-300 flex flex-wrap gap-y-4 gap-x-2">
      {kanbanRender}
      {contentModel && (
        <HomeContentView
          contentModel={contentModel}
          particularHotel={particularHotel}
          onClose={() => setContentModel(false)}
        />
      )}
    </div>
  );
};

export default Kanban;
