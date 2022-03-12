import { Button } from '@chakra-ui/react';
import { ComponentType } from 'react';
import { SendButtonProps } from './Types';

export const SendButton: ComponentType<SendButtonProps> = ({
  isSubmitting,
}) => {
  return (
    <Button
      my={6}
      py={6}
      isLoading={isSubmitting}
      isDisabled={isSubmitting}
      type="submit"
      width="100%"
    >
      Enviar
    </Button>
  );
};
