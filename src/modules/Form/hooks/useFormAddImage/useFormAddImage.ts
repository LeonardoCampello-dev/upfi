import { useForm } from 'react-hook-form';

import {
  useCreateImage,
  useIsCreatingImage,
} from '../../../../services/api/images/mutations';

import { useFormAddImageReturn } from './Types';

export const useFormAddImage = (): useFormAddImageReturn => {
  const { mutateAsync: createImage } = useCreateImage();

  const isCreatingImage = useIsCreatingImage();

  const form = useForm();

  return { createImage, isCreatingImage, form };
};
