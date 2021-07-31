import styled from 'styled-components';

type ContainerProps = {
  src?: string;
};

export const Container = styled.aside<ContainerProps>`
  display: flex;
  background: ${props =>
    props.src ? `url(${props.src} cover no-repeat center)` : '#009FC3'};
  width: 240px;
  height: 355px;
`;

export const User = styled.div``;

export const UserInformations = styled.div``;

export const UserDetails = styled.div``;
