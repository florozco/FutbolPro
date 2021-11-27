import { render, screen } from '@testing-library/react';
import { Country, NamePlusFlagProps } from '@futbol-pro/types';
import Countries from './countries';
import NamePlusFlag from "../../pages/namePlusFlag";

describe('Countries', () => {

  const country1: Country = {code:"BR", name:"Brazil",   emoji:"🇧🇷" , emojiU:"U+1F1E7 U+1F1F7"};

  const country2: Country = {code:"AR", name:"Argentina",emoji:"🇦🇷" , emojiU:"U+1F1E6 U+1F1F7"};

   const countriesArray: Country[] = [country1,country2];

  it('should render successfully', () => {
    const { baseElement } = render(<Countries  countries={[country1]}  />);
    expect(baseElement).toBeTruthy();
  });

  it('should show no data when no data', () => {
    const { baseElement } = render(<Countries  countries={[country1]}  />);
    expect(screen.getByText(/no data/i)).toBeTruthy();
  });
  

  it('should render successfully', () => {
    const { baseElement } = render(<Countries  countries={[country2]}  />);
    expect(baseElement).toBeTruthy();
  });
  it('should show no data when no data', () => {
    const { baseElement } = render(<Countries  countries={[country2]}  />);
    expect(screen.getByText(/no data/i)).toBeTruthy();
  });
});
