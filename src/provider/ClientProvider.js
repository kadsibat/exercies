import {useState} from "react";
import {createContext} from "react"
export const ClientContext = createContext({
    currentData:{},
    setCurrentData:()=>{},
});
const ClientProvider = ({children}) => {
    const [currentData, setCurrentData] = useState(0);
    return (
      <ClientContext.Provider value={{
        currentData,
        setCurrentData,
        }}>
        {children}
      </ClientContext.Provider>
    );
  };
  export default ClientProvider;