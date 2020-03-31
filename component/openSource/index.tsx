import { PropsWithChildren } from 'react';
import { IOpenSource } from './IOpenSource';
import OpenSourceRow from './row';
import { CommonSection } from '../common/CommonSection';

export const OpenSource = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IOpenSource.Payload }>) {
  if (payload?.disable) {
    return <></>;
  }

  return (
    <CommonSection title="OPEN SOURCE">
      <OpenSourceRow payload={payload} />
    </CommonSection>
  );
}
