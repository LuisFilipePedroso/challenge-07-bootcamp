import styled, { StyledProps } from 'styled-components';

interface CardProps {
  total?: boolean;
}

type Props = StyledProps<CardProps>;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
`;

export const Card = styled.div`
  background: ${({ total, theme }: Props): string =>
    total && theme.title === 'light'
      ? theme.colors.secondary
      : total && theme.title === 'dark'
      ? theme.colors.primary
      : theme.title === 'dark'
      ? theme.colors.primary
      : theme.colors.white};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total, theme }: Props): string =>
    (total && theme.title === 'light') || theme.title === 'dark'
      ? theme.colors.white
      : theme.colors.black};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: ${props => props.theme.colors.lightGray};
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: ${props =>
        props.theme.title === 'light'
          ? props.theme.colors.white
          : props.theme.colors.primary};
      font-size: 16px;
      font-weight: normal;
      color: ${props => props.theme.colors.lightGray};

      &.title {
        color: ${props =>
          props.theme.title === 'light'
            ? props.theme.colors.black
            : props.theme.colors.white};
      }

      &.income {
        color: ${props => props.theme.colors.green};
      }

      &.outcome {
        color: ${props => props.theme.colors.red};
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
