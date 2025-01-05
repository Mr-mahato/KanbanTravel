export type HotelTypes = {
    title: string;
    location: string;
    duration: number;
    type: string;
    rating: number;
    price: number;
}[];

export interface DataContextType {
    HotelData: HotelTypes;
    setHotelData: (data: HotelTypes[]) => void;
    savedHotelData: HotelTypes[];
    setSavedHotelData: (data: HotelTypes[]) => void;
    selectedLocations: string[];
    setSelectedLocations: (locations: string[]) => void;
    selectedDuration: number[];
    setSelectedDuration: (duration: number[]) => void;
    selectedServices: string[];
    setSelectedServices: (services: string[]) => void;
  }