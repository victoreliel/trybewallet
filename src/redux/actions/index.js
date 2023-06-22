import {
  SAVE_USER, REQUEST_API, GET_CURRENCIES, GET_ERROR, GET_EXPENSES, REMOVE_EXPENSE,
} from './actionsTypes';

export const saveUser = (value) => ({ type: SAVE_USER, value });
export const requestApi = () => ({ type: REQUEST_API });
export const getCurrencies = (value) => ({ type: GET_CURRENCIES, value });
export const getExpenses = (value) => ({ type: GET_EXPENSES, value });
export const getError = (error) => ({ type: GET_ERROR, error });
export const removeExpense = (expenseId) => ({ type: REMOVE_EXPENSE, expenseId });
