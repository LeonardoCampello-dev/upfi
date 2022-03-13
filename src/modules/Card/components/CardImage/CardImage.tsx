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
      height="100%"
      objectFit="cover"
      width="100%"
      borderTopRadius="md"
      cursor="pointer"
    />
  );
};
