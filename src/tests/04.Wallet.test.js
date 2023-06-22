import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Wallet from '../pages/Wallet';
import mockData from './helpers/mockData';
import { STATE_MOCK } from './helpers/mockState';
import renderWithRouterAndRedux from './helpers/renderWith';

describe('Testando se a página "Wallet" funciona corretamente', () => {
  it('testa se a página está na rota correta', () => {
    const { history } = renderWithRouterAndRedux(<Wallet />, { initialEntries: ['/carteira'] });
    expect(history.location.pathname).toBe('/carteira');
  });

  it('testa se todos os inputs são renderizados', () => {
    renderWithRouterAndRedux(<Wallet />);
    expect(screen.getByTestId('value-input')).toBeInTheDocument();
    expect(screen.getByTestId('currency-input')).toBeInTheDocument();
    expect(screen.getByTestId('method-input')).toBeInTheDocument();
    expect(screen.getByTestId('tag-input')).toBeInTheDocument();
    expect(screen.getByTestId('description-input')).toBeInTheDocument();
  });

  it('testa de existe um botão de excluir a despesa e se ele funciona corretamente', () => {
    const { store } = renderWithRouterAndRedux(<Wallet />, { initialState: STATE_MOCK });
    const deleteBtns = screen.getAllByRole('button', { name: /excluir/i });
    const expense = [
      {
        value: '2',
        description: 'test-two',
        currency: 'USD',
        tag: 'Alimentação',
        method: 'Dinheiro',
        id: 1,
        exchangeRates: mockData,
      },
    ];

    userEvent.click(deleteBtns[0]);

    expect(store.getState().wallet.expenses).toEqual(expense);
  });
});
