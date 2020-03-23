export declare namespace IExperience {
  export interface Payload {
    list: Item[];
  }

  export interface Item {
    title: string;
    position: string;
    startedAt: string;
    endedAt?: string;
    descriptions: string[];
    skillKeywords?: string[];
  }
}
