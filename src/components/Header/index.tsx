import logoImg from '../../assets/logo.svg';
import { useDarkMode } from '../../hooks/useDarkMode';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  const {darkMode, handleToggleDarkMode} = useDarkMode();

  return (
    <Container className={darkMode ? 'dark': ''}>
      <Content className={darkMode ? 'dark': ''}>
        <img src={logoImg} alt="dt money" />

        <div>
          <button 
            className="toggle-theme"
            onClick={handleToggleDarkMode}
          >
            {darkMode ? '🌞' : '🌚' }
          </button>
          <button onClick={onOpenNewTransactionModal}>
            Nova transação
          </button>
        </div>
      </Content>
    </Container>
  );
}