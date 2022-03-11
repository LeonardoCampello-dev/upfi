import { Box, Skeleton } from '@chakra-ui/react';
import { ComponentType, useState } from 'react';

import { CardImage, CardText, CardTextSkeleton } from './components';
import { CardProps } from './Types';

export const Card: ComponentType<CardProps> = ({ data, viewImage }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleClick = (): void => {
    viewImage(data.url);
  };

  const handleLoad = (): void => {
    setIsLoading(false);
  };

  return (
    <Box key={data.ts} borderRadius="md" bgColor="pGray.800">
      <Skeleton isLoaded={!isLoading}>
        <CardImage
          handleClick={handleClick}
          handleLoad={handleLoad}
          imageURL={data.url}
          title={data.title}
        />
      </Skeleton>

      <Box pt={5} pb={4} px={6}>
        {isLoading ? (
          <CardTextSkeleton />
        ) : (
          <CardText description={data.description} title={data.title} />
        )}
      </Box>
    </Box>
  );
};
