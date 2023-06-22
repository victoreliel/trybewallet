import mockData from './mockData';

export const INITIAL_REDUX = {
  user: {
    email: 'alguem@email.com',
    password: '123456',
  },
  wallet: {
    currencies: [
      'USD',
      'CAD',
      'GBP',
      'ARS',
      'BTC',
      'LTC',
      'EUR',
      'JPY',
      'CHF',
      'AUD',
      'CNY',
      'ILS',
      'ETH',
      'XRP',
      'DOGE',
    ],
    expenses: [],
    editor: false,
    idToEdit: 0,
    error: null,
    isLoading: false,
  },
};

export const STATE_MOCK = {
  user: {
    email: 'alguem@email.com',
    password: '123456',
  },
  wallet: {
    currencies: [
      'USD',
      'CAD',
      'GBP',
      'ARS',
      'BTC',
      'LTC',
      'EUR',
      'JPY',
      'CHF',
      'AUD',
      'CNY',
      'ILS',
      'ETH',
      'XRP',
      'DOGE',
    ],
    expenses: [
      {
        value: '1',
        description: 'test',
        currency: 'USD',
        tag: 'Alimentação',
        method: 'Dinheiro',
        id: 0,
        exchangeRates: mockData,
      },
      {
        value: '2',
        description: 'test-two',
        currency: 'USD',
        tag: 'Alimentação',
        method: 'Dinheiro',
        id: 1,
        exchangeRates: mockData,
      },
    ],
    editor: false,
    idToEdit: 0,
    error: null,
    isLoading: false,
  },
};
