import React from 'react';

import { Container, ProfileImage } from './styles';

type SizeOfAvatar = 'sm' | 'md' | 'lg' | number;

type AvatarProps = {
  size?: SizeOfAvatar;
  src: string;
  title: string;
};

const Avatar: React.FC<AvatarProps> = ({ size = 'sm', src, title }) => {
  const getSizeOfAvatar = (sizeOfAvatar: SizeOfAvatar) => {
    const avatarSizes = {
      sm: 120,
      md: 144,
      lg: 168
    };

    if (typeof size === 'number') {
      return `${sizeOfAvatar}px`;
    }

    return `${avatarSizes}.${size}px`;
  };

  const avatarSize = getSizeOfAvatar(size);

  return (
    <Container size={avatarSize}>
      <ProfileImage src={src} title={title} />
    </Container>
  );
};

export { Avatar };
