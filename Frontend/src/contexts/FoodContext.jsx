import { createContext, useState } from "react";

const FoodContext=createContext();
const FooContextProvider=({children})=>{

const [foodFilteredCategory,setFoodFilteredCategory]=useState('All')




    return <FoodContext.Provider value={{
        foodFilteredCategory,
        setFoodFilteredCategory
    }}>
        {children}
    </FoodContext.Provider>

}

export {FooContextProvider,FoodContext}