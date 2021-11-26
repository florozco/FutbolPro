import { IndexProps } from '@futbol-pro/types';
import { useCountries } from '../useCountries';
import FontFaceObserver from "../../pages/fontfaceobserver.standalone";
import UnicodeFlag from '../unicode-flag/unicode-flag';
import Link from 'next/Link';

export function Countries(props: IndexProps) {
  const [countriesArray] = useCountries();
  const countries = props.countries ? props.countries : countriesArray;

   return (
    <>
      <h1>Countries</h1>
      {
        countries && countries.length > 0
          ?
          countries.map(
            ({ code, name, emoji, emojiU }) =>  
            <Link key={code} href={{
              pathname: "/footballTeam",
              query: {
                 country: name
              }
          }} >
              <li >   
                 <UnicodeFlag unicode={emoji} ></UnicodeFlag> - {name}                 
              </li>
            </Link>
            )
          :
          <p>no data</p>
      }
    </>
  );
}

export default Countries;

