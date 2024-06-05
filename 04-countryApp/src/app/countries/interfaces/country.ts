export interface Country {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  cioc?:        string;
  independent:  boolean;
  status:       Status;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
}

export interface Currencies {
  UZS?: Afn;
  USD?: Afn;
  NZD?: Afn;
  ISK?: Afn;
  RWF?: Afn;
  XCD?: Afn;
  MKD?: Afn;
  NAD?: Afn;
  ZAR?: Afn;
  DKK?: Afn;
  ZMW?: Afn;
  JMD?: Afn;
  AZN?: Afn;
  THB?: Afn;
  MYR?: Afn;
  UAH?: Afn;
  SEK?: Afn;
  NPR?: Afn;
  SDG?: Sdg;
  TOP?: Afn;
  EUR?: Afn;
  IDR?: Afn;
  XOF?: Afn;
  CDF?: Afn;
  GNF?: Afn;
  TRY?: Afn;
  MRU?: Afn;
  AFN?: Afn;
  BDT?: Afn;
  LKR?: Afn;
  BYN?: Afn;
  SHP?: Afn;
  JPY?: Afn;
  KWD?: Afn;
  KGS?: Afn;
  AUD?: Afn;
  UGX?: Afn;
}

export interface Afn {
  name:   string;
  symbol: string;
}

export interface Sdg {
  name: string;
}

export interface Demonyms {
  eng:  EngClass;
  fra?: EngClass;
}

export interface EngClass {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  rus?: string;
  uzb?: string;
  eng?: EngEnum;
  nld?: string;
  pap?: string;
  smo?: string;
  tkl?: string;
  isl?: string;
  fra?: string;
  kin?: string;
  mkd?: string;
  afr?: string;
  deu?: string;
  her?: string;
  hgm?: string;
  kwn?: string;
  loz?: string;
  ndo?: string;
  tsn?: string;
  kal?: string;
  jam?: string;
  aze?: string;
  tha?: string;
  msa?: string;
  ukr?: string;
  swe?: string;
  nep?: string;
  ara?: string;
  ton?: string;
  fin?: string;
  ind?: string;
  kon?: string;
  lin?: string;
  lua?: string;
  swa?: string;
  tur?: string;
  prs?: string;
  pus?: string;
  tuk?: string;
  ben?: string;
  sin?: string;
  tam?: string;
  bel?: string;
  jpn?: string;
  kir?: string;
  pih?: string;
}

export enum EngEnum {
  English = "English",
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}
