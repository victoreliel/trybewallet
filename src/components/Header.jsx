import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">{`Email: ${email}`}</p>
        <span>Despesa Total:</span>
        <p data-testid="total-field">
          {expenses.length === 0 ? '0.00' : (
            expenses.reduce((acc, curr) => (
              acc + Number(curr.value) * Number(curr.exchangeRates[curr.currency]
                .ask)), 0).toFixed(2))}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  wallet: state.wallet,
});

export default connect(mapStateToProps)(Header);
