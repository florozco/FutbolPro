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

export function About() {

  return (
    <StyledPage>
      <Ui title='about' showTitle={true} />
      <p>Thank you for using and showing some ♥ for Nx.</p>
    </StyledPage>
  );
}

export default About;
