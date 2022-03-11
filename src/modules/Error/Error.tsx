import { Button, Heading, Flex } from '@chakra-ui/react';

import { ComponentType } from 'react';

export const Error: ComponentType = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100vh"
      flexDir="column"
    >
      <Heading>Infelizmente ocorreu um erro =(</Heading>

      <Button py={6} onClick={() => window.location.reload()} mt={4}>
        Clique aqui para tentar novamente
      </Button>
    </Flex>
  );
};
