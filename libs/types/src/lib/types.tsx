
export interface Country { code: string; name: string; emoji?: string; emojiU?: string; }
<<<<<<< Updated upstream
export interface IndexProps { countries: [Country]; }
=======

export interface CountryProps { countries: [Country]; }


>>>>>>> Stashed changes
export interface UiProps { title: string; showTitle?: boolean; }
export interface NamePlusFlagProps { countries: [Country]; }
export interface UnicodeFlagProps { unicode: string; }