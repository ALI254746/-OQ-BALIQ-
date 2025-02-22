import { createContext, useState } from "react";

export const DataContext = createContext(); // Context yaratish

export function DataProvider({ children }) {
  const [orders, setOrders] = useState([]); // `orders` boshlang‘ich qiymati []
  const [contacts, setContacts] = useState([]); // Murojaatlar
  
  const addData = (newOrder) => {
    console.log("Yangi buyurtma:", newOrder);
    setOrders((prevOrders) => [...prevOrders, newOrder]); // Yangi buyurtma qo‘shish
  };
 // Murojaat qo'shish funksiyasi
 const addContact = (contact) => {
  setContacts((prev) => [...prev, contact]);
};
  return (
    <DataContext.Provider value={{ orders,contacts,addData,addContact}}>
      {children}
    </DataContext.Provider>
  );
}
