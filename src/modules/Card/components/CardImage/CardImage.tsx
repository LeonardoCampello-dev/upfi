import { Image } from '@chakra-ui/react';
import { ComponentType } from 'react';
import { CardImageProps } from './Types';

export const CardImage: ComponentType<CardImageProps> = ({
  handleClick,
  handleLoad,
  imageURL,
  title,
}) => {
  return (
    <Image
      src={imageURL}
      alt={title}
      onClick={handleClick}
      onLoad={handleLoad}
      height={48}
      objectFit="cover"
      width="max"
      borderTopRadius="md"
      cursor="pointer"
    />
  );
};
