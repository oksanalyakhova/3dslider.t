import React, { createContext, useState } from 'react';

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [darkHeader, setDarkHeader] = useState(false);

  return (
    <HeaderContext.Provider
      value={{
        darkHeader,
        setDarkHeader,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContext;
