import { InputProps as ChakraInputProps } from '@chakra-ui/react';

import { ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  name: string;
  error?: FieldError;
}

export type TextInputComponentType = ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
>;
