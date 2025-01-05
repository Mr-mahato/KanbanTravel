import { useState } from "react";
import { Search, List, Square, Table, ArrowDownUp, Filter } from "lucide-react";
import Kanban from "../components/Kanban";
import ListComponent from "../components/ListComponent";
import TableComponent from "../components/TableComponent";
import SortByModel from "../Models/SortByModel";
import FilterModel from "../Models/FilterModel";
import FindModel from "../Models/FindModel";
function Home() {
  const [trackHomeViewChoice, setTrackHomeViewChoice] =
    useState<String>("kanban");

  interface modelPositionInterface {
    top: number;
    left: number;
  }

  const [sortByModel, setSortByModel] = useState<boolean>(false);
  const [filterBy, setFilterByModel] = useState<boolean>(false);
  const [findModel, setFindModel] = useState<boolean>(false);
  const [modalPosition, setModalPosition] = useState<modelPositionInterface>({
    top: 0,
    left: 0,
  });

  // #TODO: think of freezing the screen when the models get open.

  // useEffect(() => {
  //   if (filterBy || sortByModel || findModel) {
  //     // Disable scroll
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     // Enable scroll
  //     document.body.style.overflow = "";
  //   }

  //   return () => {
  //     // Ensure scroll is re-enabled when component unmounts
  //     document.body.style.overflow = "";
  //   };
  // }, [filterBy , sortByModel , findModel]);

  const handleSortBy = (e: any) => {
    const rect = e.target.getBoundingClientRect(); // Get button's position
    setModalPosition({
      top: rect.bottom + window.scrollY, // Button's bottom edge
      left: rect.left + window.scrollX, // Button's left edge
    });

    setSortByModel(true);
  };
  return (
    <div className="sm:w-[98%]  mx-auto  h-full">
      <div className="flex md:flex-row flex-col mt-10 gap-2 justify-between p-4 border-b">
        {/* left side */}
        <div className="flex  gap-2 ">
        <h1 className=" font-bold text-2xl">Sites</h1>
          <div
            onClick={() => setTrackHomeViewChoice("List")}
            className={`flex border  cursor-pointer px-4 rounded-md h-10 ${
              trackHomeViewChoice === "List"
                ? "bg-purple-600 text-white font-medium"
                : "bg-white"
            }`}
          >
            <List className="self-center h-4" />
            <button className={`text-sm sm:flex hidden self-center`}>List</button>
          </div>

          <div
            onClick={() => setTrackHomeViewChoice("kanban")}
            className={`flex border cursor-pointer px-4 rounded-md h-10 ${
              trackHomeViewChoice === "kanban"
                ? "bg-purple-600 text-white font-medium"
                : "bg-white"
            }`}
          >
            <Square className="self-center h-4" />
            <button className={`text-sm sm:flex  hidden self-center`}>Kanban</button>
          </div>
          <div
            onClick={() => setTrackHomeViewChoice("table")}
            className={`flex border cursor-pointer px-4 rounded-md h-10 ${
              trackHomeViewChoice === "table"
                ? "bg-purple-600 text-white font-medium"
                : "bg-white"
            }`}
          >
            <Table className="fitlerIconStyle" />
            <button className=" sm:flex hidden self-center">Table</button>
          </div>
        </div>
        {/* right side for the feature */}
        <div className="flex gap-2">
          <div onClick={handleSortBy} className="filterButton">
            <ArrowDownUp className="fitlerIconStyle" />
            <button className="sm:flex hidden self-center">Sort By</button>
          </div>
          <div
            onClick={() => setFilterByModel(true)}
            className="filterButton bg-purple-700 text-white font-medium rounded-md"
          >
            <Filter className="fitlerIconStyle" />
            <button>Filter</button>
          </div>

          {/* search menu */}
          <div
            onClick={() => setFindModel(true)}
            className="filterButton bg-purple-700  text-white font-medium rounded-lg"
          >
            {/* add durpin */}
            <Search className="fitlerIconStyle" />
            <button className="text-sm sm:text-md w-full">Find Menu</button>
          </div>

          <SortByModel
            sortByModel={sortByModel}
            modalPosition={modalPosition}
            onClose={() => setSortByModel(false)}
          />
          <FilterModel
            filterBy={filterBy}
            onClose={() => setFilterByModel(false)}
          />
          <FindModel
            findModel={findModel}
            onClose={() => setFindModel(false)}
          />
        </div>
      </div>

      {/* lets start for the down one. */}
      {/* lets render kanban */}

      {trackHomeViewChoice === "kanban" && <Kanban />}
      {trackHomeViewChoice === "table" && <TableComponent />}
      {trackHomeViewChoice === "List" && <ListComponent />}
    </div>
  );
}

export default Home;
