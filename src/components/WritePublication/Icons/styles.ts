import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 10px;

  > svg {
    &:hover {
      color: ${props => props.theme.colors.blue100};
      cursor: pointer;
    }
  }
`;
