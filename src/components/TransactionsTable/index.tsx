import { useDarkMode } from "../../hooks/useDarkMode";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionTable() {
  const { transactions } = useTransactions();
  const { darkMode } = useDarkMode();

  return (
    <Container className={darkMode ? 'dark': ''}>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
         {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.title}</td>

            <td className={transaction.type}>
              {transaction.type === 'withdraw' ? '-' : ''}

              {new Intl.NumberFormat('pt-Ao', {
                style: 'currency',
                currency: 'AOA'
              }).format(transaction.amount)}
            </td>

            <td>{transaction.category}</td>
            <td>
            {new Intl.DateTimeFormat('pt-BR').format(
              new Date(transaction.createdAt)
            )}
            </td>
          </tr>
         ) )}
        </tbody>
      </table>
    </Container>
  );
}