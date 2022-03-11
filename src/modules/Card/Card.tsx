import {
  Box,
  Heading,
  Text,
  Image,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';

import { ComponentType, useState } from 'react';

import { CardProps } from './Types';

export const Card: ComponentType<CardProps> = ({ data, viewImage }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Box key={data.ts} borderRadius="md" bgColor="pGray.800">
      <Skeleton isLoaded={!isLoading}>
        <Image
          src={data.url}
          alt={data.title}
          onClick={() => viewImage(data.url)}
          onLoad={() => setIsLoading(false)}
          objectFit="cover"
          width="max"
          height={48}
          borderTopRadius="md"
          cursor="pointer"
        />
      </Skeleton>

      <Box pt={5} pb={4} px={6}>
        {isLoading ? (
          <>
            <SkeletonText fontSize="2xl" mt={2} noOfLines={1} />
            <SkeletonText fontSize="md" mt={7} noOfLines={1} />
          </>
        ) : (
          <>
            <Heading fontSize="2xl">{data.title}</Heading>

            <Text mt={2.5} fontSize="md">
              {data.description}
            </Text>
          </>
        )}
      </Box>
    </Box>
  );
};
