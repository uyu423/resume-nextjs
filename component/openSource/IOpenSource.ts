import { IRow } from '../common/IRow';

export declare namespace IOpenSource {
  export interface Payload {
    list: Item[];
  }

  interface Item {
    title: string;
    descriptions: IRow.Description[];
  }
}
