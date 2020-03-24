import { PropsWithChildren } from 'react';
import ProjectRow from './row';
import { CommonSection } from '../common/Section';
import { IPresentation } from './IPresentation';

export const Presentation = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IPresentation.Payload }>) {
  return (
    <CommonSection title="PRESENTATION">
      <ProjectRow payload={payload} />
    </CommonSection>
  );
}
