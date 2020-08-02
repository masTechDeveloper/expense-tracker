import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import Web3 from 'web3';

// Initial state
const initialState = {
  transactions: [
    // { id: 1, text: 'Flower', amount: -20 },
    // { id: 2, text: 'Salary', amount: 400 },
    // { id: 3, text: 'Book', amount: -100 },
    // { id: 4, text: 'Camera', amount: 150 },
    // { id: 5, text: 'Testing', amount: 1000 },
  ],
  web3: null,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    loadBlockchain();
  }, []);

  async function loadBlockchain() {
    const web3 = new Web3(Web3.givenProvider);
    await Web3.givenProvider.enable();
    setWeb3(web3);
  }

  function setWeb3(web3) {
    dispatch({
      type: 'SET_WEB3',
      payload: web3,
    });
  }

  // Action to Delete Transaction
  function deleteTrans(id) {
    dispatch({
      type: 'DELETE_TRANS',
      payload: id,
    });
  }

  // Action to Add Transaction
  function addTrans(transaction) {
    dispatch({
      type: 'ADD_TRANS',
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTrans,
        addTrans,
        web3: state.web3,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
