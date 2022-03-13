import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';

import { Header } from '../modules/Header';
import { CardList } from '../modules/CardList';
import { Loading } from '../modules/Loading';
import { Error } from '../modules/Error';
import { useGetImages } from '../services/api/images/queries';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetImages();

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
