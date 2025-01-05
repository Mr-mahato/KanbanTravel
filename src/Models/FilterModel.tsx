import React from "react";
import { dataContext } from "../Context/DataContext";

interface FilterModelProps {
  onClose: () => void;
  filterBy: boolean;
}

function FilterModel({ onClose, filterBy }: FilterModelProps) {
  const {
    selectedLocations,
    setSelectedLocations,
    selectedDuration,
    setSelectedDuration,
    selectedServices,
    setSelectedServices,
  } = dataContext();

  function handleModelClose(e: React.MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLElement).classList.contains("filterModel")) {
      onClose();
    }
  }

  const handleLocationChange = (location: string, isChecked: boolean) => {
    let dummyLocation = selectedLocations;
    if (isChecked) {
      dummyLocation = [...dummyLocation, location];
    } else {
      dummyLocation = dummyLocation.filter((loc:string) => loc !== location);
    }
    setSelectedLocations(dummyLocation);
  };

  const handleDurationChange = (durn: string) => {
    const duration = parseInt(durn);
    setSelectedDuration((prev:any) => {
      if (prev.includes(duration)) {
        return prev.filter((dur:number) => dur !== duration);
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

  if (!filterBy) return null;
  return (
    <div
      onClick={handleModelClose}
      className="fixed inset-0 bg-black/80 z-20 flex justify-center items-center filterModel"
    >
      <div className="border  p-4 rounded-md bg-white">
        <h1 className="font-medium text-center p-2">Filter options</h1>
        <div>
          <h2 className="font-medium text-neutral-800">Price</h2>
          <input
            className="outline-none border mr-2 font-medium text-neutral-800 rounded-md p-1 border-purple-600"
            type="number"
            value={0}
          />
          <input
            className="outline-none border mr-2 font-medium text-neutral-800 rounded-md p-1 border-purple-600"
            type="number"
            value={1000}
          />
        </div>

        <div className="flex flex-col mt-4 gap-2">
          <h3 className="font-medium">Locations</h3>
          <div className="grid grid-cols-2">
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
        </div>

        <div className="flex flex-col mt-4 gap-2">
          <h3 className="font-medium">Durations</h3>
          <div className="grid grid-cols-2">
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
        </div>

        <div className="flex flex-col mt-4 gap-2">
          <h3 className="font-medium">Services</h3>
          <div className="grid grid-cols-2">
          {["Rent", "Tour", "Hotel", "Accommodation"].map((services) => (
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
                    ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterModel;
