import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../contextAPI/GlobalState';

export const BlockchainDetails = () => {
  const { web3 } = useContext(GlobalContext);
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    (async () => {
      if (web3) {
        const account = await web3.eth.getCoinbase();
        setAccount(account);
        const balance = await web3.eth.getBalance(account);
        setBalance(web3.utils.fromWei(balance, 'ether'));
      }
    })();
  }, [web3]);

  function checkWeb3Status() {
    if (account) {
      return (
        <div className='accountDetails'>
          <h1 className='walletHeading'>Your Account Details</h1>

          <h4>
            wallet address: <span className='wallet'> {account}</span>
          </h4>
          <br />
          <h4>
            Balance:
            <span>
              <br /> {balance} ETH
            </span>
          </h4>
        </div>
      );
    } else {
      return (
        <div className='accountDetails'>
          <h1 className='walletHeading'>Your Account Details</h1>
          <h4 className='red'>Loading... Web3 not Connected.</h4>{' '}
        </div>
      );
    }
  }
  return checkWeb3Status();
};
