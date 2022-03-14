import { Dispatch, ForwardRefRenderFunction, SetStateAction } from 'react';

import {
  FieldError,
  FieldValues,
  UseFormSetError,
  UseFormTrigger,
} from 'react-hook-form';

interface FileInputProps {
  name: string;
  error?: FieldError;
  setImageUrl: Dispatch<SetStateAction<string>>;
  localImageUrl: string;
  setLocalImageUrl: Dispatch<SetStateAction<string>>;
  setError: UseFormSetError<FieldValues>;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<boolean | void>;
  trigger: UseFormTrigger<FieldValues>;
}

export type FileInputComponentType = ForwardRefRenderFunction<
  HTMLInputElement,
  FileInputProps
>;
