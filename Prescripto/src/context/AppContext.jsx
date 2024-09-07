import { createContext } from "react";
import { doctors } from "../../public/assets.js";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const value = {
    doctors
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
