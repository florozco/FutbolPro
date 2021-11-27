import { createGlobalStyle } from 'styled-components';
import { NamePlusFlagProps } from '@futbol-pro/types';
import { request, gql } from 'graphql-request'
import { Ui } from '@futbol-pro/ui';
import Countries from '../app/countries/countries';
// @ts-ignore  
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



export function NamePlusFlag(props: NamePlusFlagProps) {
    const { countries } = props;
    return (
        <>
        <GlobalStyle />
            <Navbar/>
            <Ui title="Uninorte 2021" showTitle />
            <Countries countries={countries} />
            </>
    );
}

export default NamePlusFlag;
