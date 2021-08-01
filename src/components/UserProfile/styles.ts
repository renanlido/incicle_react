import styled from 'styled-components';

type ContainerProps = {
  src?: string;
};

type BoxBgTopProps = ContainerProps;

export const Container = styled.aside<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props =>
    props.src ? `url(${props.src} cover no-repeat center)` : '#009FC3'};
  width: 240px;
  height: 355px;
  z-index: 0;
  border-radius: 15px;
  padding: 30px 20px;
  justify-content: flex-end;
`;

export const BoxBackgroundTop = styled.div<BoxBgTopProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
  height: 145px; //Tornar este campo dinâmico
  background: ${props => `url(${props.src}) no-repeat center`};
  background-size: cover;
  border-radius: 14px 14px 0 0;
  z-index: -1;
`;

export const BoxBackgroundBottom = styled(BoxBackgroundTop)`
  position: absolute;
  top: revert;
  bottom: 0;
  background: ${props => props.theme.colors.white};
  height: 225px; //Tornar este campo dinâmico
  border-radius: 15px 0 14px 14px;
`;
