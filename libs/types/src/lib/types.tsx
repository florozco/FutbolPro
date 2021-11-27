export interface Country { code: string; name: string; emoji?: string; emojiU?: string; }
export interface CountryProps { countries: [Country]; }

export interface UiProps { title: string; showTitle?: boolean; }
export interface NamePlusFlagProps { countries: [Country]; }
export interface UnicodeFlagProps { unicode: string; }


export interface FootballProps { footballJson: JSON };  


export interface TeamProps {country:string};

export interface PlayerProps {teamID:string};