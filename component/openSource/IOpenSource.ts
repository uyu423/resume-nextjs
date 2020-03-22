export declare namespace IOpenSource {
  export interface Payload {
    list: Item[];
  }

  interface Item {
    title: string;
    descriptions: Description[];
  }

  interface Description {
    content: string;
    link?: string;
    postImage?: string;
  }
}
