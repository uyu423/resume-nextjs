import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace IOpenSource {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/78058383-2f716900-73c3-11ea-8846-0eb0ae055f32.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/openSource.ts
   */
  export interface Payload extends ICommon.Payload {
    /** ### 오픈소스 활동 리스트 */
    list: Item[];
  }

  /**
   * @todo 기간을 넣을까?
   */
  interface Item {
    /**
     * ### 오픈소스 활동명
     */
    title: string;

    /** ### 오픈소스 활동 설명 */
    descriptions: IRow.Description[];
  }
}
