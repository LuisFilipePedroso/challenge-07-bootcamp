import React, { useContext, useMemo } from 'react';
import { ThemeContext as StyledThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Link } from 'react-router-dom';

import Switch from 'react-switch';
import { ThemeContext } from '../../context/Theme';
import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const { title, colors } = useContext(StyledThemeContext);
  const ctx = useContext(ThemeContext);

  const color = useMemo(
    () =>
      title === 'light'
        ? shade(0.15, colors.primary)
        : shade(0.15, colors.backgroundColor),
    [colors.backgroundColor, colors.primary, title],
  );

  const handleSwitch = (): void => {
    return ctx?.toggleTheme();
  };

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="import">Importar</Link>

          <Switch
            onChange={handleSwitch}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={15}
            width={40}
            handleDiameter={20}
            offColor={color}
            onColor={color}
          />
        </nav>
      </header>
    </Container>
  );
};

export default Header;
