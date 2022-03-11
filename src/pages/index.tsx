import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../modules/Header';
import { Card, CardList } from '../modules/CardList';
import { Loading } from '../modules/Loading';
import { Error } from '../modules/Error';
import { api } from '../services/api';

export default function Home(): JSX.Element {
  const getImages = async ({
    pageParam = null,
  }): Promise<{ data: Card[]; after: string | null }> => {
    const params = pageParam ? { params: { after: pageParam } } : null;

    const { data } = await api.get('/api/images', params);

    return data;
  };

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery('images', getImages, {
    getNextPageParam: lastPage => lastPage.after || null,
  });

  const formattedData = useMemo(() => {
    return data?.pages.flatMap(card => card.data).flat();
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />

        {hasNextPage && (
          <Button
            onClick={() => fetchNextPage()}
            isLoading={isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
          </Button>
        )}
      </Box>
    </>
  );
}
