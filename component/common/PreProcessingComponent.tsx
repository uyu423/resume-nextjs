import { PropsWithChildren } from 'react';
import { ICommon } from './ICommon';

type Component<T> = (props: PropsWithChildren<{ payload: T }>) => JSX.Element;

/** 각 세션의 Component 전처리기. 공통 수행 요소 */
export function PreProcessingComponent<T extends ICommon.Payload>({
  payload,
  component,
}: {
  payload: T;
  component: Component<T>;
}) {
  if (payload?.disable) {
    return <></>;
  }

  return component({ payload });
}
