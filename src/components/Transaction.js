import React from 'react';
// import { GlobalContext } from '../contextAPI/GlobalState';

export const Transaction = ({ transaction }) => {
  // const { deleteTrans } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      <p>
        <strong>Discription: </strong>{' '}
        <span>{transaction.transactionDescription}</span>
      </p>
      <p>
        <strong>Amount: </strong>
        <span className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {sign}${Math.abs(transaction.amount)}
        </span>
      </p>

      <p>
        <strong>Transaction Owner:</strong>{' '}
        <span className='txOwner'>{transaction.transactionOwner}</span>
      </p>

      {/* <button
        onClick={() => deleteTrans(transaction.id)}
        className='delete-btn'
      >
        x
      </button> */}
    </li>
  );
};
