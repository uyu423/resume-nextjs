import { ICommon } from '../common/ICommon';

export declare namespace ISkill {
  /**
   * ![image](https://user-images.githubusercontent.com/8033320/78029577-cf1b0100-739b-11ea-9c2c-a41acbe9125c.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/skill.ts
   */
  export interface Payload extends ICommon.Payload {
    /**
     * ### 보유 기술 목록
     */
    skills: Skill[];

    /** ### 수치에 대한 설명
     *
     * @description 'SKILL' 타이틀 옆에 붙는 tooltip 이다.
     */
    tooltip?: string;
  }

  export interface Skill {
    /** ### 대분류 */
    category: string;
    /** ### 해당 분류 내 항목들 */
    items: Item[];
  }

  interface Item {
    /** ### 보유 기술 이름 */
    title: string;
    /**
     * ### 보유 기술 수준
     *
     * @value 1: 파란색 뱃지로 나타난다. (primary)
     * @value 2: 짙은 회색 뱃지로 나타난다. (sencondary)
     * @value 3: 옅은 회색 뱃지로 나타난다. (light)
     * @value undefined: 뱃지가 붙지 않는다.
     */
    level?: 1 | 2 | 3;
  }
}
