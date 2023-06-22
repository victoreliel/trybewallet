import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWith';

describe('Testando sa página inicial da aplicação funciona corretamente', () => {
  beforeEach(() => { renderWithRouterAndRedux(<App />); });

  it('testa se existe um campo de login com email e senha', () => {
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/digite seu email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/digite sua senha/i)).toBeInTheDocument();
  });

  it('testa se existe um botão para enviar os dados e entrar na aplicação', () => {
    expect(screen.getByRole('button', { name: /entrar/i }));
  });
});
