import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [
    // { id: 1, text: 'Flower', amount: -20 },
    // { id: 2, text: 'Salary', amount: 400 },
    // { id: 3, text: 'Book', amount: -100 },
    // { id: 4, text: 'Camera', amount: 150 },
    // { id: 5, text: 'Testing', amount: 1000 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
