import { Button, Heading, Flex } from '@chakra-ui/react';

import { ComponentType } from 'react';

export const Error: ComponentType = () => {
  const handleReloadPage = (): void => {
    window.location.reload();
  };

  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Heading>Infelizmente ocorreu um erro =(</Heading>

      <Button py={6} onClick={handleReloadPage} mt={4}>
        Clique aqui para tentar novamente
      </Button>
    </Flex>
  );
};
