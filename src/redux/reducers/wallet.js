import {
  REQUEST_API, GET_CURRENCIES, GET_ERROR, GET_EXPENSES, REMOVE_EXPENSE,
} from '../actions/actionsTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  error: null,
  isLoading: false,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case GET_CURRENCIES:
    return {
      ...state,
      isLoading: false,
      currencies: action.value.map(({ code }) => code),
    };
  case GET_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.error,
    };
  case GET_EXPENSES:
    return {
      ...state,
      isLoading: false,
      expenses: [...state.expenses, action.value],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      isLoading: false,
      expenses: state.expenses.filter(({ id }) => id !== action.expenseId),
    };
  default:
    return state;
  }
};

export default walletReducer;
