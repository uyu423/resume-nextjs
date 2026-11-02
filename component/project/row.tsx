import { PropsWithChildren } from 'react';
import { ProjectPayload, ProjectItem } from '../../types/project';
import { CommonRows } from '../common/CommonRow';
import { ShowMoreWrapper } from '../common/ShowMoreWrapper';
import { RowPayload } from '../../types/row';
import Util from '../common/Util';
import { EmptyRowCol } from '../common';

export default function ProjectRow({ payload }: PropsWithChildren<{ payload: ProjectPayload }>) {
  return (
    <EmptyRowCol>
      <ShowMoreWrapper showMoreCount={payload.showMoreCount}>
        {payload.list.map((item, index) => {
          return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
        })}
      </ShowMoreWrapper>
    </EmptyRowCol>
  );
}

function serialize(payload: ProjectItem): RowPayload {
  return {
    left: {
      title: Util.formatDateRange(payload.startedAt, payload.endedAt),
    },
    right: {
      title: payload.title,
      subTitle: payload.where,
      descriptions: payload.descriptions,
      skillKeywords: payload.skillKeywords,
    },
  };
}
