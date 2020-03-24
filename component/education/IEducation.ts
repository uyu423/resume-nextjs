export declare namespace IEducation {
  export interface Payload {
    list: Item[];
  }

  export interface Item {
    title: string;
    subTitle: string;
    startedAt: string;
    endedAt: string;
  }
}
