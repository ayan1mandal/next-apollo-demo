import { ReactElement, FC, useState } from 'react';
import { gql, useQuery } from "@apollo/client";
import client from "../lib/apollo-client";
import { UserInfoCard } from '../components';
import LoadMore from '../components/LoadMore/LoadMore';
import Grid from '@mui/material/Grid';

const RECORD_PER_PAGE = 20;

export interface UserPageProps {
  users: {
    name: string
    address: string;
    email: string;
    phone: string;
  }[],
}

export interface IUser {
  name: string
  address: string
}

const GET_USERS = gql`
  query Users($offset: Int!, $limit: Int!) {
    users(offset: $offset, limit: $limit) {
      email
      name
      address
      phone
    }
  }
`;

const UserPage: FC<UserPageProps> = ({ users }): ReactElement => {

  const [pageNumber, setPageNumber] = useState<number>(0);

  const { data, fetchMore, loading } = useQuery(GET_USERS, {
    variables: {
      offset: 0,
      limit: 0
    },
  });

  const performFetchMore = async () => {
    await fetchMore({
      variables: {
        offset: (pageNumber + 1) * RECORD_PER_PAGE,
        limit: RECORD_PER_PAGE,
      },
    });
    setPageNumber(pageNumber + 1);
  }

  return (
    <>
      <Grid container spacing={2} mt={4}>
        {users && users.map((user) =>
          <Grid item xs={12} md={6} lg={3} key={user.email}>
            <UserInfoCard user={user} />
          </Grid>
        )}
        {data && data.users.map((user) =>
          <Grid item xs={12} md={6} lg={3} key={user.email}>
            <UserInfoCard user={user} />
          </Grid>
        )}
      </Grid>
      <LoadMore performFetchMore={performFetchMore} loading={loading}/>
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_USERS,
    variables: {
      offset: 0,
      limit: RECORD_PER_PAGE,
    },
  });

  return {
    props: {
      users: data.users,
    },
  };
}

export default UserPage;
