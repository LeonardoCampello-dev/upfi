import { SkeletonText } from '@chakra-ui/react';

import { FC } from 'react';

export const CardTextSkeleton: FC = () => {
  return (
    <>
      <SkeletonText fontSize="2xl" mt={2} noOfLines={1} />
      <SkeletonText fontSize="md" mt={7} noOfLines={1} />
    </>
  );
};
