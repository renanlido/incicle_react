import styled from 'styled-components';

type ContainerProps = {
  size: string;
};

type ProfileImageProps = {
  src: string;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${props => props.size};
  height: ${props => props.size};

  border-radius: 50%;
  border: 3px solid #0c3f5f;
  padding: 1px;

  background: #fff;

  img {
    border-radius: 50%;
  }
`;

export const ProfileImage = styled.div<ProfileImageProps>`
  background: url(${props => props.src}) #f0f0 center no-repeat;
  background-size: cover;
  border-radius: 50%;
  width: inherit;
  height: 100%;
`;
