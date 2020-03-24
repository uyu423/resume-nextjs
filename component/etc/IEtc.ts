export declare namespace IEtc {
  export interface Payload {
    list: Item[];
  }

  export interface Item {
    title: string;
    subTitle: string;
    startedAt: string;
    endedAt?: string;
  }
}
