import styled from 'styled-components';
import { useCountries } from '../useCountries';
import { IndexProps } from '@futbol-pro/types';

const StyledCountries = styled.div`
  color: pink;
`;

export function Countries(props: IndexProps) {
  const [countriesArray] = useCountries();
  const countries = props.countries ? props.countries : countriesArray;

  return (
    <StyledCountries>
      <h1>Countries</h1>
      {
        countries && countries.length > 0
          ?
          countries.map(({ code, name, emoji, emojiU }) => <li key={code}>{code} - {name} - {emoji} - {emojiU}  </li>)
          :
          <p>no data</p>
      }
    </StyledCountries>
  );
}

export default Countries;
