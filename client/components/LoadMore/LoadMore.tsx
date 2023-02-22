import { FC, ReactElement } from 'react';
import { Button } from '@mui/material';
import { CardContainer } from './Styles';

export interface LoadMoreProps {
  performFetchMore: () => {},
  loading: boolean,
}

const LoadMore: FC<LoadMoreProps> = ({ performFetchMore, loading = false }): ReactElement => (
  <CardContainer>
    <Button variant='contained' onClick={performFetchMore} disabled={loading}>LOAD MORE</Button>
  </CardContainer>
);

export default LoadMore;
