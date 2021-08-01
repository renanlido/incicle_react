import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.89rem;
  width: 100%;
  color: ${props => props.theme.colors.gray300};
`;
