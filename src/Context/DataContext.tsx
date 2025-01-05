
import  { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Hotel from "../Utils/Hotle.json";
export const DataContext = createContext<any>(undefined);

export const DataContextProvider = ({ children }:{children:ReactNode}) => {
  const [HotelData, setHotelData] = useState(Hotel); // this work as dummy
  const savedHotelData = Hotel;
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]); // State for selected locations
  const [selectedDuration, setSelectedDuration] = useState<number[]>([]); // state for storing the duration
  const [selectedServices, setSelectedServices] = useState<string[]>([]); // State for selected locations
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  useEffect(() => {
    if (selectedDuration.length == 0 && selectedLocations.length == 0 && selectedServices.length == 0 && priceRange[0] == 0 && priceRange[1] == 1000) {
      setHotelData(savedHotelData);
    } else {
      const mappedData = savedHotelData.filter((val) => {
        if (selectedLocations.includes(val.location) || selectedDuration.includes(val.duration) || selectedServices.includes(val.type) || (val.price >= priceRange[0] && val.price <= priceRange[1])) {
          return val;
        }
      });
      setHotelData(mappedData);
    }
  },[selectedLocations , selectedDuration,selectedServices,priceRange]);

  return (
    <DataContext.Provider
      value={{
        HotelData,
        selectedLocations,
        setSelectedDuration,
        setSelectedLocations,
        selectedServices,
        setSelectedServices,
        priceRange,
        setPriceRange,
        selectedDuration,
        setHotelData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const dataContext = () => {
  return useContext(DataContext);
};
