import { createContext, useContext, useState } from "react";
import Hotel from '../Utils/Hotle.json'
export const DataContext = createContext();

export const DataContextProvider = ({children})=>{
    const [HotelData , setHotelData] = useState(Hotel);
    return(
        <DataContext.Provider value={{HotelData , setHotelData}}>
            {children}
        </DataContext.Provider>
    )
}

export const dataContext = ()=>{
    return useContext(DataContext);
}