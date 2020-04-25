import { ICommon } from '../common/ICommon';
import { IRow } from '../common/IRow';

export declare namespace IArticle {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/80271217-268d6200-86f9-11ea-822b-438508d2cf09.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/article.ts
   *
   */
  interface Payload extends ICommon.Payload {
    /** 아티클 리스트 */
    list: IRow.Description[];
  }
}
