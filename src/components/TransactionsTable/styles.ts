import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  &.dark table th {
    color: var(--blue-second-color);
  }

  &.dark table td {
    background: var(--blue-second-color);
  }

  &.dark table td:first-child {
    color: var(--text-title-dark);
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
        border-radius: 0.5rem 0 0 0.5rem;
      }

      &:last-child {
        border-radius: 0 0.5rem 0.5rem 0;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;