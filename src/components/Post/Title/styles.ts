import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  transition: color 0.2 ease;
  svg {
    &:hover {
      color: ${lighten(0.2, '#727172')};
      cursor: pointer;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  margin-left: 10px;
  justify-content: center;
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    svg {
      margin-right: 3px;
    }
  }
`;
