import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;

  input {
    width: 100%;
    padding: 10px;
    border: none;

    &:focus {
      outline: none;
    }
  }

  svg > path {
    stroke: ${props => props.theme.colors.gray200};
  }
`;
