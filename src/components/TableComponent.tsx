import { dataContext } from "../Context/DataContext";

const TableComponent = () => {
  const { HotelData } = dataContext();
  const tableRndr = HotelData.map((val:any, ind:number) => {
    return (
      <tr key={ind} className="border-b">
        <td className="py-2 px-4 border-r w-[30%] uppercase font-semibold">
          {val.title}
        </td>
        <td className="py-2 px-4 border-r">{val.location}</td>
        <td className="py-2 px-4 border-r">{val.duration}</td>
        <td className="py-2 px-4 border-r">
          <span className="text-yellow-400">★</span>
          {val.rating}
        </td>
        <td className="py-2 px-4 font-medium">
          ${val.price} <span className="text-neutral-600"> /person</span>
        </td>
      </tr>
    );
  });

  return (
    <div className="overflow-x-auto">
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
    </div>
  );
};

export default TableComponent;
