import React, { useState } from 'react';

const AppContext = React.createContext([{}, () => {}]);

const AppProvider = ({ children }) => {
   const [state, setState] = useState({ isLoged: false, userName: '' });

   return (
      <AppContext.Provider value={[state, setState]}>
         {children}
      </AppContext.Provider>
   );
};

export { AppContext, AppProvider };
