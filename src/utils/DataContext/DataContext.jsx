import React, { createContext, useState, useContext } from 'react';

const IndexContext = createContext();
export const IndexProvider = ({ children }) => {
  const [ index, setIndex ] = useState(0);
  return (
    <IndexContext.Provider value={{ index, setIndex }}>
      {children}
    </IndexContext.Provider>
  );
};

export const useIndexContext = () => useContext(IndexContext);

const ValContext = createContext();
export const ValProvider = ({ children }) => {
  const [val, setVal] = useState(null);
  return (
    <ValContext.Provider value={{ val, setVal }}>
      {children}
    </ValContext.Provider>
  );
};
export const useValContext = () => useContext(ValContext);
