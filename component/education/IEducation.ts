import { ICommon } from '../common/ICommon';

export declare namespace IEducation {
  export interface Payload extends ICommon.Payload {
    list: Item[];
  }

  export interface Item {
    title: string;
    subTitle: string;
    startedAt: string;
    endedAt: string;
  }
}
