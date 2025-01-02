import React from "react";
import Hotel from "../Utils/Hotle.json";

const tableRndr = Hotel.map((val, ind) => {
  return (
    <tr className="border-b">
      <td className="py-2 px-4 border-r w-[30%] uppercase font-semibold">{val.title}</td>
      <td className="py-2 px-4 border-r">{val.location}</td>
      <td className="py-2 px-4 border-r">{val.duration}</td>
      <td className="py-2 px-4 border-r"> <span className="text-yellow-400">★</span>{val.rating}</td>
      <td className="py-2 px-4 font-medium">{val.price} <span className="text-neutral-600"> /person</span></td>
    </tr>
  );
});

const TableComponent = () => {
  return (
    <table className="w-full text-left mt-10 border border-collapse">
      <thead className="border-b">
        <tr>
          <th className="py-2 px-4 border-r">Title</th>
          <th className="py-2 px-4 border-r">Location</th>
          <th className="py-2 px-4 border-r">Duration</th>
          <th className="py-2 px-4 border-r">Rating</th>
          <th className="py-2 px-4">Price</th>
        </tr>
      </thead>
      <tbody>{tableRndr}</tbody>
    </table>
  );
};

export default TableComponent;