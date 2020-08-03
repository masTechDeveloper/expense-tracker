import React from 'react';
import { Navbar } from './components/Navbar';
import { BlockchainDetails } from './components/BlockchainDetails';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './contextAPI/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Navbar />

      <div className='container-fluid '>
        <div className='row'>
          <div className='col-lg-3 col-md-4 col-sm-12 col-12'>
            <BlockchainDetails />
          </div>
          <div className='col-lg-3 col-md-4 col-sm-12 col-12'>
            <Header />
            <Balance />
            <IncomeExpense />
            <AddTransaction />
          </div>
          <div className='col-lg-6 col-md-4 col-sm-12 col-12 '>
            <h3>Transaction History</h3>
            <div className='scroll'>
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
