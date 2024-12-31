import React from "react";
import Hotel from "../Utils/Hotle.json";
  const tableRnder = Hotel.map((val, ind) => {
    return (
      <div key={ind} className="flex justify-between p-2 rounded-md border">
        <div className="flex flex-col">
          <h1>{val.title}</h1>
          <div className="flex gap-1 text-neutral-400 font-medium ">
            <h1>{val.location}</h1>
            <h1>•{val.duration}h</h1>
            <h1>•{val.type}</h1>
          </div>
          <p>
            <span className="text-yellow-400">★</span>
            <span className="">{val.rating}</span>
          </p>
        </div>

        <div>
        <p className="font-medium text-neutral-600"><span className="text-xl font-bold text-green-500">{val.price} </span>/person</p>
        <p>View Details</p>
        </div>
      </div>
    );
  });

export default tableRnder;