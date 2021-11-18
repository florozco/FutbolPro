export interface Country { code: string; name: string; emoji?: string; emojiU?: string; }
export interface IndexProps { countries: [Country]; }
export interface UiProps { title: string; showTitle?: boolean; }
export interface NamePlusFlagProps { countries: [Country]; }
export interface UnicodeFlagProps { unicode: string; }