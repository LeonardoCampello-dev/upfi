import { Box, Flex, Button, useDisclosure } from '@chakra-ui/react';

import { ComponentType } from 'react';

import { Logo } from '../Logo';
import { ModalAddImage } from '../Modal';

export const Header: ComponentType = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bgColor="pGray.800">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          maxW={1120}
          mx="auto"
          px={20}
          py={6}
        >
          <Logo />

          <Button onClick={() => onOpen()}>Adicionar imagem</Button>
        </Flex>
      </Box>

      <ModalAddImage isOpen={isOpen} onClose={onClose} />
    </>
  );
};
