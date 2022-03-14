import { Flex, Icon, Text } from '@chakra-ui/react';

import { ComponentType, memo } from 'react';
import { FiPlus } from 'react-icons/fi';

const AddYourImageComponent: ComponentType = () => {
  return (
    <Flex
      height="full"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
    >
      <Icon as={FiPlus} width={14} height={14} />

      <Text as="span" pt={2} textAlign="center">
        Adicione sua imagem
      </Text>
    </Flex>
  );
};

export const AddYourImage = memo(AddYourImageComponent);
