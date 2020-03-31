import { PropsWithChildren } from 'react';
import ProjectRow from './row';
import { CommonSection } from '../common/CommonSection';
import { IProject } from './IProject';

export const Project = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IProject.Payload }>) {
  if (payload?.disable) {
    return <></>;
  }

  return (
    <CommonSection title="PROJECT">
      <ProjectRow payload={payload} />
    </CommonSection>
  );
}
