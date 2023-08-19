export interface contactDetailType {
  firstName: string;
  lastName: string;
  status: string;
  id?: string;
}

export interface contactSliceType {
  contactList: contactDetailType[];
}

export interface contactModalproptypes {
  type: "edit" | "create";
  contactData?: contactDetailType;
}

export interface modalValueTypes {
    edit:string, create:string
}


export interface mapApiResponseType {
  active:number,
  country:string,
  recovered:number,
  deaths:number,
  countryInfo:{lat:number, long:number},

}

export interface chartfetchDataType {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

export interface ConvertedData {
  date: string;
  cases: number;
  deaths: number;
  recovered: number;
}