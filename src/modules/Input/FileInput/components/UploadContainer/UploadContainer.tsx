import { Flex } from '@chakra-ui/react';

import { ComponentType } from 'react';
import { UploadContainerProps } from './Types';

export const UploadContainer: ComponentType<UploadContainerProps> = ({
  children,
  isError,
}) => {
  return (
    <Flex
      width="full"
      height="full"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="md"
      bgColor="pGray.800"
      color="pGray.200"
      borderWidth={isError && 2}
      borderColor={isError && 'red.500'}
    >
      {children}
    </Flex>
  );
};
