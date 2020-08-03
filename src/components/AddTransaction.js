import React, { useState, useContext } from 'react';
import { GlobalContext } from '../contextAPI/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransToBlockchain } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTrans = {
      transactionDescription: text,
      amount: +amount,
    };

    // addTrans(newTrans);
    addTransToBlockchain(newTrans);
  };

  return (
    <div>
      <h3>Add a New Transaction</h3>

      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </div>
  );
};
