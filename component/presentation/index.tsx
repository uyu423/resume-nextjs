import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/Section';
import PresentationRow from './row';
import { IPresentation } from './IPresentation';

export const Presentation = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IPresentation.Payload }>) {
  return (
    <CommonSection title="PRESENTATION">
      <PresentationRow payload={payload} />
    </CommonSection>
  );
}
