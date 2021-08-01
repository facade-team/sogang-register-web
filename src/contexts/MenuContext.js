import { createContext, useState, useContext } from 'react';

const MenuContext = createContext({});

const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState('');

  const menuContextValue = {
    menu,
    setMenu,
  };

  return (
    <MenuContext.Provider value={menuContextValue}>
      {children}
    </MenuContext.Provider>
  );
};

const useMenuContext = () => useContext(MenuContext);

export { MenuProvider, useMenuContext };
