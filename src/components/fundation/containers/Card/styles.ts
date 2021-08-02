import styled from 'styled-components';

import { Container as Wrapper } from '../Wrapper';

export const Container = styled(Wrapper)`
  max-width: 260px;

  .title {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 20px;
    text-align: center;
  }
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 5px 20px;
  color: ${({ theme }) => theme.colors.gray400};
  background: ${({ theme }) => theme.colors.gray100};
`;
