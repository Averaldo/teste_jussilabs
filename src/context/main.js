import React, { createContext, useState } from "react";

const AppContext = createContext();
const AppContextProvider = ({ children }) => {
  let [state, setState] = useState({
    productList: []
  });
  const setProductList = (products) => {
    setState(products);
  };

  return (
    <AppContext.Provider value={{ state, setProductList }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };


