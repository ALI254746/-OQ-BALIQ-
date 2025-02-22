import { createContext, useState } from "react";

export const DataContext = createContext(); // Context yaratish

export function DataProvider({ children }) {
  const [orders, setOrders] = useState([]); // `orders` boshlang‘ich qiymati []

  const addData = (newOrder) => {
    console.log("Yangi buyurtma:", newOrder);
    setOrders((prevOrders) => [...prevOrders, newOrder]); // Yangi buyurtma qo‘shish
  };

  return (
    <DataContext.Provider value={{ orders, addData }}>
      {children}
    </DataContext.Provider>
  );
}
