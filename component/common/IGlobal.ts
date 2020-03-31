import { NextSeoProps } from 'next-seo';

export declare namespace IGlobal {
  export interface Payload {
    /**
     * ### Resume 제목
     *
     * @description `<head>` 태그 내 `<title>` 을 정의한다.
     */
    headTitle: string;

    /**
     * ### favicon 이미지
     */
    favicon: string;

    /**
     * ### SEO Properties
     *
     * @description OpenGraph 메타 태그를 포함한 SEO 를 위한 요소를 정의한다. `next-seo` 를 사용했으므로 해당 패키지를 참고한다.
     * @see https://github.com/garmeeh/next-seo
     */
    seo: NextSeoProps;
  }
}
