export declare namespace IRow {
  export interface Payload {
    left: Left;
    right: Right;
  }

  export interface Left {
    title: string;
    subTitle?: JSX.Element;
  }

  export interface Right {
    title?: string;
    subTitle?: string;
    descriptions?: Description[];
  }

  export interface Description {
    content: string;

    /** content 에 하이퍼링크 씌우기 */
    href?: string;

    /** content 끝에 붙일 이미지 */
    postImage?: string;

    /** content 끝에 붙일 하이퍼링크 */
    postHref?: string;
  }
}
