import { IRow } from '../common/IRow';

export declare namespace IProject {
  export interface Payload {
    list: Item[];
  }

  export interface Item {
    title: string;
    where: string;
    startedAt: string;
    endedAt?: string;
    descriptions: IRow.Description[];
  }
}
