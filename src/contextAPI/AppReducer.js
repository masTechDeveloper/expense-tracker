export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANS':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case 'ADD_TRANS':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case 'SET_WEB3':
      return {
        ...state,
        web3: action.payload,
      };
    default:
      return state;
  }
};
