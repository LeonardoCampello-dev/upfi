import { Box, Heading, Flex, Progress } from '@chakra-ui/react';

import { ComponentType } from 'react';

export const Loading: ComponentType = () => {
  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
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
