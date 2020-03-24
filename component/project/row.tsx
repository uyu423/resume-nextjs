import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { IProject } from './IProject';
import { CommonRows } from '../common/Row';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { EmptyRowCol } from '../common';

export default function ProjectRow({ payload }: PropsWithChildren<{ payload: IProject.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
      })}
    </EmptyRowCol>
  );
}

function serialize(payload: IProject.Item): IRow.Payload {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(payload.startedAt, DATE_FORMAT.YYYY_LL).toFormat(
    DATE_FORMAT.YYYY_DOT_LL,
  );
  const endedAt = DateTime.fromFormat(payload.endedAt, DATE_FORMAT.YYYY_LL).toFormat(
    DATE_FORMAT.YYYY_DOT_LL,
  );

  return {
    left: {
      title: `${startedAt} ~ ${endedAt}`,
    },
    right: {
      title: payload.title,
      subTitle: payload.where,
      descriptions: payload.descriptions,
    },
  };
}
