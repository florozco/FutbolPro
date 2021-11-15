import Link from 'next/Link'
import styled from 'styled-components';
import { Ui } from '@futbol-pro/ui';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <Ui title='titulo' showTitle={true}/>
      <p>Thank you for using and showing some ♥ for Nx.</p>
      <Link href="/about">About</Link>
       </StyledPage>
  );
}

export default Index;
