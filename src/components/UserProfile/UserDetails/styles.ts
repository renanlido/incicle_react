import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .location {
    display: flex;
    gap: 5px;
  }

  .formation {
    display: flex;
    width: 100%;

    justify-content: space-between;
    align-items: center;
  }
`;
