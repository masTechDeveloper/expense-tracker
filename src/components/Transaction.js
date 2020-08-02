import React, { useContext } from 'react';
import { GlobalContext } from '../contextAPI/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTrans } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}{' '}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTrans(transaction.id)}
        className='delete-btn'
      >
        x
      </button>
    </li>
  );
};
