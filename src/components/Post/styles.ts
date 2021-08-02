import styled from 'styled-components';
import { Container as Wrapper } from '../fundation/containers/Wrapper';

export const Container = styled(Wrapper)`
  min-width: 585px;

  .postText {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  gap: 20px;

  margin: 5px 0;
`;
