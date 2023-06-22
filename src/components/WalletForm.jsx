import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExpenses } from '../redux/actions';
import currenciesApi from '../currenciesApi';
import fetchApi from '../fetchApi';

class WalletForm extends Component {
  state = {
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(currenciesApi());
  }

  handleChange = ({ target: { value, name } }) => {
    const { expenses } = this.props;
    this.setState({ [name]: value, id: expenses.length });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    this.setState({}, async () => {
      const data = await fetchApi();
      this.setState({ exchangeRates: data }, () => {
        dispatch(getExpenses(this.state));
      });
      this.setState({
        value: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        description: '',
      });
    });
  };

  render() {
    const { currencies } = this.props;
    const { value, currency, method, tag, description } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="value-input">
          Valor:
          <input
            type="number"
            name="value"
            id="value-input"
            value={ value }
            data-testid="value-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="currency-input">
          Moeda:
          <select
            name="currency"
            id="currency-input"
            value={ currency }
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            {currencies.map((item, index) => (
              <option key={ index }>
                { item }
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="method-input">
          Método de pagamento:
          <select
            name="method"
            id="method-input"
            value={ method }
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Categoria:
          <select
            name="tag"
            id="tag-input"
            value={ tag }
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input
            type="text"
            name="description"
            id="description-input"
            value={ description }
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>

        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func,
  currencies: PropTypes.arrayOf(PropTypes.string),
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);
