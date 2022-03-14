import { FormControl as ChakraFormControl } from '@chakra-ui/react';
import { ComponentType } from 'react';
import { FormControlProps } from './Types';

export const FormControl: ComponentType<FormControlProps> = ({
  children,
  isInvalid,
}) => {
  return (
    <ChakraFormControl
      display="flex"
      flexDirection="row"
      alignItems="center"
      isInvalid={isInvalid}
    >
      {children}
    </ChakraFormControl>
  );
};
