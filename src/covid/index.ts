export interface Country {
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
  //eslint-disable-next-line
  Premium: any;
}
export interface Global {
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}
export interface CovidSummaryResponse {
  Countries: Array<Country>;
  Date: string;
  Global: Global;
  Message: string;
}

export interface CountryInfo {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Province: string;
  Status: string;
}
export type CountrySummaryResponse = Array<CountryInfo>;

export enum CovidStatus {
  Confirmed = 'confirmed',
  Recovered = 'Recovered',
  Deaths = 'deaths',
}
