import { useToast } from '@chakra-ui/react';

import { useCallback } from 'react';
import { useIsMutating, useMutation } from 'react-query';

import { api } from '../../../../api';
import { queryClient } from '../../../../../config/query-client';
import { MutationFn, MutationOptions, MutationResult } from './Types';

const mutationKey = 'create-image';

export const useCreateImage = (options?: MutationOptions): MutationResult => {
  const toast = useToast();

  const mutationFn = useCallback<MutationFn>(async image => {
    const { data } = await api.post('/api/images', image);

    return data;
  }, []);

  const mutation = useMutation(mutationKey, mutationFn, {
    ...options,
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);

      toast({ title: 'Error', status: 'error' });
    },
    onSuccess: (data, variables, context) => {
      options?.onSuccess?.(data, variables, context);

      queryClient.invalidateQueries('images');

      toast({ title: 'Success', status: 'success' });
    },
  });

  return mutation;
};

export const useIsCreatingImage = (): boolean => {
  return Boolean(useIsMutating(mutationKey));
};
