import { Box, Heading, Flex, Progress } from '@chakra-ui/react';

import { ComponentType } from 'react';

export const Loading: ComponentType = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100vh"
      flexDir="column"
    >
      <Box>
        <Heading>Carregando aplicação...</Heading>
        <Progress
          mt={4}
          size="xs"
          isIndeterminate
          bgColor="transparent"
          colorScheme="orange"
        />
      </Box>
    </Flex>
  );
};
