import { createGlobalStyle } from 'styled-components';
import { CountryProps } from '@futbol-pro/types';
import { request, gql } from 'graphql-request'
import { Ui } from '@futbol-pro/ui';
import Countries from '../app/countries/countries';
//import FontFaceObserver from "./fontfaceobserver.standalone";
  
import Link from 'next/Link';
import Navbar from '../components/navbar/navbar';
import styled from 'styled-components';
//import useFontFaceObserver from "./fontfaceobserver.standalone";


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



export function Index(props: CountryProps) {
  const { countries } = props;

  

  return (
    <>
    <GlobalStyle />  
    <Navbar/>    
    <Ui title="Uninorte 2021" showTitle />
    <Link href="/namePlusFlag">NamePlusFlag</Link>


    </>

  );
} 


export default Index;
