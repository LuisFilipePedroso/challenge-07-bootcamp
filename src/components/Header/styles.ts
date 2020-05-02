import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: ${props =>
    props.theme.title === 'light'
      ? props.theme.colors.primary
      : props.theme.colors.black};
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;
      align-items: center;

      a {
        color: ${props => props.theme.colors.white};
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        margin-right: 8px;

        & + a {
          margin-left: 24px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
