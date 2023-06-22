import { requestApi, getCurrencies, getError } from './redux/actions';

const currenciesApi = () => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  dispatch(requestApi());
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const currenciesArray = Object.values(data);
    const result = currenciesArray.filter(({ codein }) => codein !== 'BRLT');
    dispatch(getCurrencies(result));
  } catch (error) {
    dispatch(getError(error));
  }
};

export default currenciesApi;
