import React from 'react'
import Hotel from '../Utils/Hotle.json'
const ListRndr = Hotel.map((val, ind) => {
  return (
    <div key={ind} className="flex hover:cursor-pointer transition-all duration-200 hover:scale-[1.01] hover:shadow-lg hover:bg-red-200/20 justify-between p-2 rounded-md border">
      <div className="flex flex-col">
        <h1 className='text-xl uppercase font-bold'>{val.title}</h1>
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

      <div className='flex flex-col justify-between'>
      <p className="font-medium text-neutral-600"><span className="text-xl font-bold text-green-500">{val.price} </span>/person</p>
      <p className='text-green-500 font-semibold'>View Details</p>
      </div>
    </div>
  );
});

const ListComponent = ()=>{
  return(
    <div className='w-full mt-10 h-full flex flex-col  flex-wrap gap-4'>
      {ListRndr}
    </div>
  )
}

export default ListComponent;