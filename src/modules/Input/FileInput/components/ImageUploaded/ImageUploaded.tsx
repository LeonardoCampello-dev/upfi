import { Image } from '@chakra-ui/react';

import { ComponentType, memo } from 'react';
import { ImageUploadedProps } from './Types';

const ImageUploadedComponent: ComponentType<ImageUploadedProps> = ({
  imageURL,
}) => {
  return (
    <Image
      width="full"
      height="full"
      src={imageURL}
      alt="Uploaded photo"
      borderRadius="md"
      objectFit="cover"
    />
  );
};

export const ImageUploaded = memo(
  ImageUploadedComponent,
  (previousProps, nextProps) =>
    previousProps.imageURL.toLowerCase() ===
    nextProps.imageURL.toLocaleLowerCase()
);
