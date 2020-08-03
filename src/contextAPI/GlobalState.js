import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import {
  CONTRACT_ADDRESS,
  CONTRACT_ABI,
} from '../SmartContract/ContractConfig';
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
  contract: null,
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
    try {
      const web3 = new Web3(Web3.givenProvider);
      await Web3.givenProvider.enable();
      setWeb3(web3);

      const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

      setContract(contract);

      let transCount = await contract.methods.transactionCount().call();

      for (var i = 0; i < transCount; i++) {
        const {
          amount,
          transactionDescription,
          transactionOwner,
        } = await contract.methods.transaction(i).call();
        let transObj = {
          amount: parseInt(amount),
          transactionDescription,
          transactionOwner,
        };

        addTrans(transObj);
      }
    } catch (error) {
      alert('Error in loading Web3.... Please Connect Metamask Wallet', error);
    }
  }

  // Action to Setup web3
  function setWeb3(web3) {
    dispatch({
      type: 'SET_WEB3',
      payload: web3,
    });
  }

  function setContract(contract) {
    dispatch({
      type: 'SET_CONTRACT',
      payload: contract,
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
        contract: state.contract,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
