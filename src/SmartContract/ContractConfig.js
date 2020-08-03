export const CONTRACT_ADDRESS = '0x45dcf653b4097A79a5F3f15dF912762F8C3Dacdd';

export const CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
      {
        internalType: 'int64',
        name: 'amount',
        type: 'int64',
      },
    ],
    name: 'addTransaction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'balance',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'transaction',
    outputs: [
      {
        internalType: 'address',
        name: 'transactionOwner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'transactionDescription',
        type: 'string',
      },
      {
        internalType: 'int64',
        name: 'amount',
        type: 'int64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'transactionCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
