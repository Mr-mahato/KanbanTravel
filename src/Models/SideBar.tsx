import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Filter,
  Navigation,
  Search,
  ArrowDownUp,
  ChevronDown,
  Settings,
  UserRoundPen,
  Blocks,
  ChevronUp,
} from "lucide-react";
import PriceRangeSlider from "../components/PriceRangeSlider";

function SideBar() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(true);
  const [showLocationOption, setShowLocationOption] = useState<boolean>(true);
  const [showPriceOption, setShowPriceOption] = useState<boolean>(true);
  const [showDurationOption, setShowDurationOption] = useState<boolean>(true);
  const [showServicesOption, setShowServicesOption] = useState<boolean>(true);

  const toggleSidebar = () => {
    console.log("is bar being expanded");
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  return (
    <aside
      className={` flex flex-col pt-1   shadow-md inset-y-0 transition-all ${
        isSidebarExpanded ? "w-[18rem]" : "w-16"
      } bg-neutral-100 min-h-fit`}
    >
      {/* this is for the logo */}
      <div className="py-6 px-4 border-b-2">
        <div className="w-10 h-10 bg-purple-600 rounded-full flex justify-center items-center">
          <Navigation className="h-5 w-5 text-white" />
        </div>
      </div>

      <div className="flex  justify-between  p-4">
        <button onClick={toggleSidebar} className="text-neutral-600">
          {isSidebarExpanded ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>
      {/* this is for the below design for navigating */}
      {!isSidebarExpanded && (
        <div className="flex flex-col items-start p-4">
          <button className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5" />
            {isSidebarExpanded && <span>Filter</span>}
          </button>
          <button className="flex items-center gap-2 mb-4">
            <Search className="h-5 w-5" />
            {isSidebarExpanded && <span>Find</span>}
          </button>
          <button className="flex items-center gap-2 mb-4">
            <ArrowDownUp className="h-5 w-5" />
            {isSidebarExpanded && <span>Sort By</span>}
          </button>
        </div>
      )}

      {isSidebarExpanded && (
        <div className="p-2 flex flex-col h-full gap-4">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex justify-between">
              <h1 className="font-medium text-lg">Filters</h1>
              <button className="text-purple-500">Reset All</button>
            </div>
            {/* showing option based on the location */}
            <div className="border-b-2 border-neutral-200 pb-2">
              <div className="flex justify-between">
                <h1 className="font-medium text-lg">Location</h1>
                {!showLocationOption ? (
                  <ChevronDown
                    onClick={() => setShowLocationOption(true)}
                    className="cursor-pointer"
                  />
                ) : (
                  <ChevronUp
                    onClick={() => setShowLocationOption(false)}
                    className="cursor-pointer"
                  />
                )}
              </div>
              {showLocationOption && (
                <div className="px-2">
                  <div>
                    <input type="checkbox" />
                    <label
                      className="text-neutral-800 font-medium ml-2"
                      htmlFor="Dhaka"
                    >
                      Dhaka
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label
                      className="text-neutral-800 font-medium ml-2"
                      htmlFor="Rangpur"
                    >
                      Rangpur
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label
                      className="text-neutral-800 font-medium ml-2"
                      htmlFor="Cumilla"
                    >
                      Cumilla
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label
                      className="text-neutral-800 font-medium ml-2"
                      htmlFor="Khulna"
                    >
                      Khulna
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* showing optino based on the price */}
            <div className="border-b-2 border-neutral-200 pb-2">
              <div className="flex justify-between">
                <h1 className="font-medium text-lg">Price</h1>
                {!showPriceOption ? (
                  <ChevronDown
                    onClick={() => setShowPriceOption(true)}
                    className="cursor-pointer"
                  />
                ) : (
                  <ChevronUp
                    onClick={() => setShowPriceOption(false)}
                    className="cursor-pointer"
                  />
                )}
              </div>
              {showPriceOption && (
                <div className="px-2">
                  {/* <div className="flex">
                  <input
                    className="w-20 outline-none rounded-md border border-purple-600 p-1"
                    type="number"
                    name="from"
                    id="from"
                  />{" "}
                  -
                  <input type="number" name="to" id="to" />
                </div> */}
                  <PriceRangeSlider />
                </div>
              )}
            </div>
            {/* showing the option based on the Durations */}
            <div className="border-b-2 border-neutral-200 pb-2">
              <div className="flex justify-between">
                <h1 className="text-lg font-medium ">Durations</h1>
                {!showDurationOption ? (
                  <ChevronDown
                    onClick={() => setShowDurationOption(true)}
                    className="cursor-pointer"
                  />
                ) : (
                  <ChevronUp
                    onClick={() => setShowDurationOption(false)}
                    className="cursor-pointer"
                  />
                )}
              </div>
              {showDurationOption && (
                <div className="px-2">
                  <div>
                    <input type="checkbox" value={1} />
                    <label
                      className="text-neutral-800 font-medium ml-2"
                      htmlFor="1-h"
                    >
                      1h
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" value={2} />
                    <label
                      className="text-neutral-800 font-medium ml-2"
                      htmlFor="2-h"
                    >
                      2h
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" value={3} />
                    <label
                      className="text-neutral-800 font-medium ml-2"
                      htmlFor="3-h"
                    >
                      3h
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" value={4} />
                    <label
                      className="text-neutral-800 font-medium ml-2"
                      htmlFor="4-h"
                    >
                      4h
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* showing the option based on the services */}
            <div className="border-b-2 border-neutral-200 pb-2">
              <div className="flex justify-between">
                <h1 className="font-medium text-lg">Services</h1>
                {!showServicesOption ? (
                  <ChevronDown
                    onClick={() => setShowServicesOption(true)}
                    className="cursor-pointer"
                  />
                ) : (
                  <ChevronUp
                    onClick={() => setShowServicesOption(false)}
                    className="cursor-pointer"
                  />
                )}
              </div>
              {showServicesOption && (
                <div className="px-2">
                  <div>
                    <input type="checkbox" value={"Hotels"} />
                    <label
                      className="text-neutral-800 font-medium ml-2"
                      htmlFor="1-h"
                    >
                      Hotels
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" value={"Rent"} />
                    <label
                      className="text-neutral-800 font-medium ml-2"
                      htmlFor="2-h"
                    >
                      Rent
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" value={"Tour"} />
                    <label
                      className="text-neutral-800 font-medium ml-2"
                      htmlFor="3-h"
                    >
                      Tour
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" value={"Accommodation"} />
                    <label
                      className="text-neutral-800 font-medium ml-2"
                      htmlFor="4-h"
                    >
                      Accommodation
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="justify-self-end flex-2 p-2  ">
            <div className="border-t border-b py-4 border-neutral-400 gap-4 flex flex-col">
              <div className="flex gap-4 cursor-pointer text-neutral-600 hover:text-black">
                <Blocks className="w-5 h-5" />
                <h1 className="self-center text-lg  font-medium">
                  Integrations
                </h1>
              </div>
              <div className="flex gap-4 cursor-pointer text-neutral-600 hover:text-black">
                <Settings className="w-5 h-5" />
                <h1 className="self-center text-lg  font-medium">Settings</h1>
              </div>
            </div>
            <div className="flex gap-4  cursor-pointer text-neutral-600 hover:text-black  mt-4">
              <UserRoundPen className="w-5 h-5" />
              <h1 className="self-center text-lg font-medium">Travel Team's</h1>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}

export default SideBar;
