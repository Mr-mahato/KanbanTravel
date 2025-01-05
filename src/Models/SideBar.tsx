import { useState } from "react";
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
import { dataContext } from "../Context/DataContext";
import Slider from "@mui/material/Slider";
function SideBar() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(true);
  const [showLocationOption, setShowLocationOption] = useState<boolean>(true);
  const [showPriceOption, setShowPriceOption] = useState<boolean>(true);
  const [showDurationOption, setShowDurationOption] = useState<boolean>(true);
  const [showServicesOption, setShowServicesOption] = useState<boolean>(true);
  const {
    selectedLocations,
    setSelectedDuration,
    selectedServices,
    setSelectedServices,
    setSelectedLocations,
    selectedDuration,
    priceRange,
    setPriceRange
  } = dataContext();

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };
  const handlePriceChange = (event: any, newValue: number | number[]) => {
    console.log(event);
    setPriceRange(newValue as number[]);
  };
  const handleLocationChange = (location: string, isChecked: boolean) => {
    let dummyLocation = selectedLocations;
    if (isChecked) {
      dummyLocation = [...dummyLocation, location];
    } else {
      dummyLocation = dummyLocation.filter((loc: string) => loc !== location);
    }
    setSelectedLocations(dummyLocation);
  };

  const handleDurationChange = (durn: string) => {
    const duration = parseInt(durn);
    setSelectedDuration((prev: any) => {
      if (prev.includes(duration)) {
        return prev.filter((dur: number) => dur !== duration);
      } else {
        return [...prev, duration];
      }
    });
  };

  const handleServicesChange = (services: string) => {
    setSelectedServices((prev: string[]) => {
      if (prev.includes(services)) {
        return prev.filter((servi) => servi !== services);
      } else {
        return [...prev, services];
      }
    });
  };

  return (
    <aside
      className={`flex flex-col pt-1 sm:relative h-full shadow-md transition-all duration-600 ease-in-out ${
        isSidebarExpanded ? "sm:w-[18rem] w-full" : "w-16"
      } bg-neutral-100  min-h-fit `}
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
              <button
                onClick={() => {
                  setSelectedLocations([]);
                  setSelectedDuration([]);
                  setSelectedServices([]);
                }}
                className="text-purple-500"
              >
                Reset All
              </button>
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
                  {["London", "Tokyo", "Bali", "Nepal"].map((location) => (
                    <div key={location}>
                      <input
                        type="checkbox"
                        checked={selectedLocations.includes(location)}
                        onChange={(e) =>
                          handleLocationChange(location, e.target.checked)
                        } // Pass the checked state
                      />
                      <label className="text-neutral-800 font-medium ml-2">
                        {location}
                      </label>
                    </div>
                  ))}
                </div>
              )}

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
                    
                    <Slider
                      value={priceRange}
                      onChange={handlePriceChange}
                      valueLabelDisplay="auto"
                      min={0}
                      max={1000}
                    />
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
                    {["1", "2", "3", "4"].map((duration) => (
                      <div key={duration}>
                        <input
                          type="checkbox"
                          checked={selectedDuration.includes(+duration)}
                          onChange={() => handleDurationChange(duration)}
                        />
                        <label className="text-neutral-800 font-medium ml-2">
                          {duration}h
                        </label>
                      </div>
                    ))}
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
                    {["Rent", "Tour", "Hotel", "Accommodation"].map(
                      (services) => (
                        <div key={services}>
                          <input
                            type="checkbox"
                            checked={selectedServices.includes(services)}
                            onChange={() => handleServicesChange(services)}
                          />
                          <label className="text-neutral-800 font-medium ml-2">
                            {services}
                          </label>
                        </div>
                      )
                    )}

                    {/* start here */}
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
                <h1 className="self-center text-lg font-medium">
                  Travel Team's
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}

export default SideBar;
