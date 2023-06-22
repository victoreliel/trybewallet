import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../redux/actions';

class Table extends Component {
  handleDeleteBtn = ({ target: { id } }) => {
    const { dispatch } = this.props;
    dispatch(removeExpense(Number(id)));
  };

  render() {
    const { expenses } = this.props;
    const expensesTable = expenses.map((expense) => {
      const { id, value, currency, method, tag, description, exchangeRates } = expense;
      const coinsData = exchangeRates[currency];
      const { name, ask } = coinsData;
      const convertedValue = ask * value;
      return (
        <tr key={ id }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{Number(value).toFixed(2)}</td>
          <td>{name}</td>
          <td>{Number(ask).toFixed(2)}</td>
          <td>{convertedValue.toFixed(2)}</td>
          <td>BRL</td>
          <td>
            <button type="button">Editar</button>
            <button
              type="button"
              data-testid="delete-btn"
              id={ id }
              onClick={ this.handleDeleteBtn }
            >
              Excluir
            </button>
          </td>
        </tr>
      );
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expensesTable}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses });

export default connect(mapStateToProps)(Table);
