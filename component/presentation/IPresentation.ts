import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace IPresentation {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/78058621-8c6d1f00-73c3-11ea-92ec-7f9f036dc985.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/education.ts
   */
  export interface Payload extends ICommon.Payload {
    /** ### 교육 수료 리스트 */
    list: Item[];
  }

  export interface Item {
    /** ### 수료 교육 명 */
    title: string;

    /** ### 수료 교육 서브 타이틀 */
    subTitle: string;

    /**
     * ### 교육 수료 시점
     *
     * @format YYYY-MM
     * @example '2010-03'
     */
    at: string;

    /** ### 교육 수료 설명 */
    descriptions: IRow.Description[];
  }
}
