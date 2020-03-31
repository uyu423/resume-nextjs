import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace IPresentation {
  export interface Payload extends ICommon.Payload {
    list: Item[];
  }

  export interface Item {
    title: string;
    subTitle: string;
    at: string;
    descriptions: IRow.Description[];
  }
}
