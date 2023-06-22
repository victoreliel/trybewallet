import { screen } from '@testing-library/react';
import Header from '../components/Header';
import { STATE_MOCK } from './helpers/mockState';
import { VALID_EMAIL, history } from './constants';
import renderWithRouterAndRedux from './helpers/renderWith';

describe('Testando se o componente "Header" funciona corretamente', () => {
  beforeEach(() => {
    renderWithRouterAndRedux(
      <Header history={ history } />,
      { initialState: STATE_MOCK },
    );
  });

  it('testa se o email digitado pelo usuário no login aparece no componente', () => {
    const emailDisplay = screen.getByTestId('email-field');

    expect(emailDisplay).toBeInTheDocument();
    expect(emailDisplay).toHaveTextContent(VALID_EMAIL);
  });

  it('testa se a soma das despesas aparece no componente', () => {
    const expenseDisplay = screen.getByTestId('total-field');

    expect(expenseDisplay).toBeInTheDocument();
    expect(expenseDisplay).toHaveTextContent('14.26');
  });

  it('testa se a moeda de câmbio "BRL" aparece no componente', () => {
    const currencyDisplay = screen.getByTestId('header-currency-field');

    expect(currencyDisplay).toBeInTheDocument();
    expect(currencyDisplay).toHaveTextContent('BRL');
  });
});
