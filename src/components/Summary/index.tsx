import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";
import { useTransactions } from '../../hooks/useTransactions';
import { useDarkMode } from '../../hooks/useDarkMode';

export function Summary() {   
  const { transactions } = useTransactions();
  const { darkMode } = useDarkMode();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposit += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposit: 0,
    withdraw: 0,
    total: 0
  })

  return (
    <Container className={darkMode ? 'dark': ''}>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-Ao', {
            style: 'currency',
            currency: 'AOA'
          }).format(summary.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>-
        {new Intl.NumberFormat('pt-Ao', {
            style: 'currency',
            currency: 'AOA'
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div className={darkMode ? 'dark': 'highlight-background'}>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-Ao', {
            style: 'currency',
            currency: 'AOA'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}