import { IndexProps } from '@futbol-pro/types';
import { request, gql } from 'graphql-request'
import { Ui } from '@futbol-pro/ui';
import Countries from '../app/countries/countries';
import Link from 'next/Link';
import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

const query = gql`
query {
  countries {
      code
      name
      emoji
      emojiU
  }
}
`

export async function getStaticProps() {
  const data = await request('https://countries.trevorblades.com/', query);
  const { countries } = data

  return {
    props: {
      countries
    },
  }
}



export function Index(props: IndexProps) {
  const { countries } = props;
  return (
    <StyledPage>
      <Ui title="Uninorte 2021" showTitle />

      <Link href="/namePlusFlag">NamePlusFlag</Link>
      <Countries countries={countries} />
    </StyledPage>
  );
}

export default Index;
