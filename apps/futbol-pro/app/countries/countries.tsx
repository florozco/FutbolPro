import { CountryProps } from '@futbol-pro/types';
import { useCountries } from '../useCountries';
import {createGlobalStyle} from "styled-components"
import FontFaceObserver from "../../pages/fontfaceobserver.standalone";
import styled from 'styled-components';
import UnicodeFlag from '../unicode-flag/unicode-flag';
import Image from 'next/image'

export function Countries(props: CountryProps) {
  const [countriesArray] = useCountries();
  const countries = props.countries ? props.countries : countriesArray;

//convert emoji U to 2 strings with the U+ and add it to src 
// https://stackoverflow.com/questions/64909447/got-an-error-invalid-src-prop-here-is-a-link-on-next-image-hostname-loca
  
   return (
    <>
      <h1>Countries</h1>
      {
        countries && countries.length > 0
          ?
          countries.map(
            ({ code, name, emoji, emojiU }) =>
              <li key={code}>          
                 <UnicodeFlag unicode={emoji} ></UnicodeFlag> - {name}
              </li>
            )
          :
          <p>no data</p>
      }
    </>
  );
}

export default Countries;

