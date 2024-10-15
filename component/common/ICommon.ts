export declare namespace ICommon {
  /**
   * 각 Section Payload 의 공통 요소
   */
  export interface Payload {
    /**
     * Section ID
     *
     * @description 목차 이동을 위한 ID 정보
     */
    sectionId: string;

    /**
     * Section Enable Flag
     *
     * @description 해당 옵션이 `true` 라면 렌더링 하지 않는다. `undefined` 거나 `false` 라면 렌더링한다.
     */
    disable?: boolean;
  }
}
