import { ReactElement, FC } from 'react';
import Link from 'next/link';
import { gql } from "@apollo/client";
import client from "../lib/apollo-client";
import { HeaderLabel, SubHeaderLabel } from '../Styles';

export interface LandingPageProps {
  name: string;
}

const LandingPage: FC<LandingPageProps> = ({ name }): ReactElement => (
  <>
    <HeaderLabel variant='h4'>
      Welcome, {name} !
    </HeaderLabel>
    <SubHeaderLabel variant='h6'>
      Please browse through the application
    </SubHeaderLabel>
  </>
)

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Name {
        name
      }
    `,
  });

  return {
    props: {
      name: data.name,
    },
  };
}

export default LandingPage;
