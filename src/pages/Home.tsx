import React, { useState } from "react";
import { Search, List, Square, Table, ArrowDownUp, Filter } from "lucide-react";
import kanbanRender from "../components/Kanban";
import tableRnder from "../components/Table";
function Home() {
  const [trackHomeViewChoice, setTrackHomeViewChoice] =
    useState<String>("kanban");

  return (
    <div className="w-[90%] mb-10 mx-auto h-full">
      <div className="flex justify-between p-4 border-b">
        <div className="flex gap-2 items-center">
          <h1 className="self-center font-bold text-2xl">Sites</h1>

          <div
            onClick={() => setTrackHomeViewChoice("List")}
            className={`flex border cursor-pointer px-4 rounded-md h-10 ${
              trackHomeViewChoice === "List" ? "bg-purple-600 text-white font-medium" : "bg-white"
            }`}
          >
            <List className="self-center h-4" />
            <button className={`self-center text-sm `}>List</button>
          </div>

          <div
            onClick={() => setTrackHomeViewChoice("kanban")}
            className={`flex border cursor-pointer px-4 rounded-md h-10 ${
              trackHomeViewChoice === "kanban" ? "bg-purple-600 text-white font-medium" : "bg-white"
            }`}
          >
            <Square className="self-center h-4" />
            <button name="kanban w-full">Kanban</button>
          </div>
          <div
            onClick={() => setTrackHomeViewChoice("table")}
            className={`flex border cursor-pointer px-4 rounded-md h-10 ${
              trackHomeViewChoice === "table" ? "bg-purple-600 text-white font-medium" : "bg-white"
            }`}
          >
            <Table className="fitlerIconStyle" />
            <button name="table">Table</button>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="filterButton">
            <ArrowDownUp className="fitlerIconStyle" />
            <button>Sort By</button>
          </div>
          <div className="filterButton bg-purple-700 text-white font-medium rounded-md">
            <Filter className="fitlerIconStyle" />
            <button>Filter</button>
          </div>
          <div className="filterButton bg-purple-700 text-white font-medium rounded-md">
            {/* add durpin */}
            <Search className="fitlerIconStyle" />
            <button>Find Menu</button>
          </div>
        </div>
      </div>

      {/* lets start for the down one. */}
      {/* lets render kanban */}

      <div className="w-full mt-10 h-full flex justify-center items-center flex-wrap gap-4">
        {kanbanRender}
    </div>
    </div>
  );
}

export default Home;
