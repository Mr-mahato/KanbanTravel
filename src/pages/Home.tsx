import React from "react";
import { Search, List, Square, Table, ArrowDownUp, Filter } from "lucide-react";
function Home() {
  return (
    <div className="w-[90%]  mx-auto h-full">
      <div className="flex justify-between p-4 border-b">
        <div className="flex gap-2 items-center">
          <h1 className="self-center font-bold text-2xl ">Sites</h1>

          <div className="flex border cursor-pointer px-4 h-10 ">
            <List className="self-center h-4" />
            <button className="self-center text-sm">List</button>
          </div>

          <div className="flex  border cursor-pointer px-4 h-10">
            <Square className="self-center h-4" />
            <button>Kanban</button>
          </div>
          <div className="flex border cursor-pointer px-4 h-10">
            <Table className="fitlerIconStyle" />
            <button>Table</button>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="filterButton">
            <ArrowDownUp className="fitlerIconStyle"/>
            <button>Sort By</button>
          </div>
          <div className="filterButton">
            <Filter className="fitlerIconStyle"/>
            <button>Filter</button>
          </div>
          <div className="filterButton">
            {/* add durpin */}
            <Search className="fitlerIconStyle"/>
            <button>Find Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
