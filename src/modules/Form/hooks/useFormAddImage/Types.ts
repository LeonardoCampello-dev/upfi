import { AxiosError } from 'axios';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { UseMutateAsyncFunction } from 'react-query';

import { CreateImageRequestDTO } from '../../../../types/dto/CreateImageRequestDTO';

type CreateImage = UseMutateAsyncFunction<
  CreateImageRequestDTO,
  AxiosError,
  CreateImageRequestDTO,
  unknown
>;

export interface useFormAddImageReturn {
  createImage: CreateImage;
  isCreatingImage: boolean;
  form: UseFormReturn<FieldValues, unknown>;
}
