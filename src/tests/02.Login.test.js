import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import { VALID_EMAIL, INVALID_EMAIL, VALID_PASSWORD, INVALID_PASSWORD, history } from './constants';
import renderWithRouterAndRedux from './helpers/renderWith';

describe('Testando se a página "Login" funciona corretamente', () => {
  beforeEach(() => { renderWithRouterAndRedux(<Login history={ history } />); });

  it('testa se é possível digitar nos inputs', () => {
    const emailInput = screen.getByPlaceholderText(/digite seu email/i);
    const passwordInput = screen.getByPlaceholderText(/digite sua senha/i);

    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, VALID_PASSWORD);

    expect(emailInput).toHaveValue(VALID_EMAIL);
    expect(passwordInput).toHaveValue(VALID_PASSWORD);
  });

  it('testa se o botão inicia desabilitado e só é liberado com email e senha válidos', () => {
    const button = screen.getByRole('button', { name: /entrar/i });
    const emailInput = screen.getByPlaceholderText(/digite seu email/i);
    const passwordInput = screen.getByPlaceholderText(/digite sua senha/i);

    expect(button).toBeDisabled();

    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, VALID_PASSWORD);
    expect(button).not.toBeDisabled();

    userEvent.clear(emailInput);
    userEvent.clear(passwordInput);

    userEvent.type(emailInput, INVALID_EMAIL);
    userEvent.type(passwordInput, INVALID_PASSWORD);
    expect(button).toBeDisabled();
  });

  it('testa se o botão redireciona corretamente', () => {
    const button = screen.getByRole('button', { name: /entrar/i });
    const emailInput = screen.getByPlaceholderText(/digite seu email/i);
    const passwordInput = screen.getByPlaceholderText(/digite sua senha/i);

    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, VALID_PASSWORD);
    userEvent.click(button);

    expect(history.location.pathname).toBe('/carteira');
  });
});
