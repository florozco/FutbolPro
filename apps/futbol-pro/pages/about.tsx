import { createGlobalStyle } from 'styled-components';
import { IndexProps } from '@futbol-pro/types';
import { request, gql } from 'graphql-request'
import { Ui } from '@futbol-pro/ui';
import Countries from '../app/countries/countries';
import Link from 'next/Link';
import Navbar from '../components/navbar/navbar';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "noto-color-emoji";
    src: url("../public/NotoColorEmoji.ttf") format("ttf");
  }
  *{
    color: blue;
    font-family: "noto-color-emoji";
  }
`;

export function About() {

  return (
    <>
    <GlobalStyle />  
      <Navbar/>
      <Ui title='about' showTitle={true} />
      <p>Thank you for using and showing some ♥ for Nx.</p>
  </>
  );
}

export default About;
