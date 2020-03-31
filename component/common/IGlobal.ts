import { NextSeoProps } from 'next-seo';

export declare namespace IGlobal {
  export interface Payload {
    headTitle: string;
    favicon: string;
    /** @see https://github.com/garmeeh/next-seo */
    seo: NextSeoProps;
  }
}
