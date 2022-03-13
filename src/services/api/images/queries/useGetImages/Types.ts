import { UseInfiniteQueryResult } from 'react-query';

import { Card } from '../../../../../types/domain/Card';

export type InfiniteQueryResult = UseInfiniteQueryResult<{
  data: Card[];
  after: string;
}>;
