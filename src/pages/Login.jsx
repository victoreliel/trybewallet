import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveUser } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isButtonDisabled: true,
  };

  formValidation = () => {
    const { email, password } = this.state;
    const minPasswordLength = 6;
    const verifyEmail = /\S+@\S+\.\S+/.test(email);
    return verifyEmail && password.length >= minPasswordLength;
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => (
      this.setState({ isButtonDisabled: !this.formValidation() })
    ));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email } = this.state;
    const userEmail = { email };
    dispatch(saveUser(userEmail));
    history.push('/carteira');
  };

  render() {
    const { isButtonDisabled } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="email-input">
          Email:
          <input
            type="email"
            name="email"
            id="email-input"
            placeholder="Digite seu email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="password"
            name="password"
            id="password-input"
            placeholder="Digite sua senha"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          disabled={ isButtonDisabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect()(Login);
