import { PropsWithChildren } from 'react';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

export const BottomButtons = {
  Component: ({ payload }: PropsWithChildren<{ payload: Record<string, unknown> }>) => {
    return PreProcessingComponent<Record<string, unknown>>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Record<string, unknown> }>) {
  return <>Bottom-Buttons</>;
}
