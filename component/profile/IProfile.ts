import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ICommon } from '../common/ICommon';

export declare namespace IProfile {
  /**
   * ![image](https://user-images.githubusercontent.com/8033320/78017522-5c078f80-7387-11ea-9c04-8087da5787f1.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/profile.ts
   */
  export interface Payload extends ICommon.Payload {
    /**
     * ### 프로필 이미지
     */
    image: string;
    /** ### 이름 Object */
    name: {
      /** ### 이름 */
      title: string;
      /** ### 이름 옆 괄호로 작게 표시해주는 이름 */
      small?: string;
    };
    /** ### 연락 수단 목록 */
    contact: Contact[];
    /** ### 공지 */
    notice: {
      /** ### 공지 내용 */
      title: string;
      /**
       * ### 공지 앞에 붙는 아이콘
       *
       * @type font-awesome type
       * @see https://www.npmjs.com/package/@fortawesome/react-fontawesome
       */
      icon?: IconDefinition;
    };
  }

  /**
   * ![image](https://user-images.githubusercontent.com/8033320/78029163-19e84900-739b-11ea-9b5c-17e06f83738a.png)
   */
  interface Contact {
    /**
     * ### 연락처 앞에 붙는 아이콘
     *
     * @type font-awesome type
     * @see https://www.npmjs.com/package/@fortawesome/react-fontawesome
     */
    icon: IconDefinition;
    /** ### 연락 수단 Title */
    title?: string;
    /**
     * ### 하이퍼 링크
     *
     * @description 해당 필드가 not null 이면 title 전체가 `<a href>` 태그로 감싸진다.
     */
    link?: string;
    /**
     * ### 내용을 뱃지로 표시할 것인가?
     *
     * @description Bootstrap 4 의 Badge 로 표시하고 싶을 경우 true
     */
    badge?: true;
  }
}
