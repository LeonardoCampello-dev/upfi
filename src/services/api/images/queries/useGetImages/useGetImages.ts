import { useCallback, useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { api } from '../../../../api';
import { Card } from '../../../../../types/domain/Card';
import { InfiniteQueryResult } from './Types';

export const useGetImages = (): InfiniteQueryResult => {
  const endpoint = 'images';

  const getImagesQueryFn = useCallback(
    async ({
      pageParam = null,
    }): Promise<{ data: Card[]; after: string | null }> => {
      const params = pageParam ? { params: { after: pageParam } } : null;

      const { data } = await api.get(`/api/${endpoint}`, params);

      return data;
    },
    []
  );

  const queryKey = useMemo(() => [endpoint], [endpoint]);

  const infiniteQuery = useInfiniteQuery(queryKey, getImagesQueryFn, {
    getNextPageParam: lastPage => lastPage.after || null,
  });

  return infiniteQuery;
};
