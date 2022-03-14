import { forwardRef } from 'react';

import { Input as ChakraInput } from '@chakra-ui/react';

import { ErrorFeedback, FormControl } from './components';
import { TextInputComponentType } from './Types';

const TextInputBase: TextInputComponentType = (
  { name, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <ChakraInput
        aria-label={name}
        name={name}
        ref={ref}
        py={6}
        pr={8}
        borderColor="transparent"
        bgColor="pGray.800"
        color="pGray.50"
        _placeholder={{
          color: 'pGray.200',
        }}
        _hover={{
          borderColor: 'orange.400',
        }}
        {...rest}
      />

      {Boolean(error) && <ErrorFeedback message={error.message} />}
    </FormControl>
  );
};

export const TextInput = forwardRef(TextInputBase);
