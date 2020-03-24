import { IRow } from '../common/IRow';

export declare namespace IPresentation {
  export interface Payload {
    list: Item[];
  }

  export interface Item {
    title: string;
    subTitle: string;
    at: string;
    descriptions: IRow.Description[];
  }
}
