import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../contextAPI/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <ul className='list'>
        {transactions.map((transaction, index) => (
          <Transaction key={index} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
