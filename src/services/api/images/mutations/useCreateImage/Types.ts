import { AxiosError } from 'axios';
import { UseMutationOptions, UseMutationResult } from 'react-query';

import { CreateImageRequestDTO } from '../../../../../types/dto/CreateImageRequestDTO';

type TData = CreateImageRequestDTO;
type TError = AxiosError;
type TVariables = CreateImageRequestDTO;

export type MutationFn = (image: TVariables) => Promise<TData>;

export type MutationResult = UseMutationResult<
  TData,
  TError,
  TVariables,
  unknown
>;

export type MutationOptions = UseMutationOptions<
  TData,
  TError,
  TVariables,
  unknown
>;
