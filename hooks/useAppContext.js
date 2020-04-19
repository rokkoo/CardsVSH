import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';

// TODO: Localstorage ???
const useAppContext = () => {
   const [state, setState] = useContext(AppContext);

   const setUsername = ({ userName }) => {
      setState({ ...state, userName });
   };

   return { state, setUsername };
};

export default useAppContext;
