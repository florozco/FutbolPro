import { createGlobalStyle } from 'styled-components';
import { NamePlusFlagProps } from '@futbol-pro/types';
import { request, gql } from 'graphql-request'
import { Ui } from '@futbol-pro/ui';
import Countries from '../app/countries/countries';
import Navbar from '../components/navbar/navbar';
import UseFootball  from "../app/football/useFootball";
import Football from '../app/football/football';

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

export function FootballPage() {
  
    return (
        <>
        <GlobalStyle />
            <Navbar/>
            <Ui title="Uninorte 2021" showTitle />
            <Football />
            </>
    );
}

export default FootballPage;
