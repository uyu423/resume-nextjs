import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/Section';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/Row';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { IEtc } from './IEtc';

export const Etc = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IEtc.Payload }>) {
  return (
    <CommonSection title="ETC">
      <EducationRow payload={payload} />
    </CommonSection>
  );
}

function EducationRow({ payload }: PropsWithChildren<{ payload: IEtc.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => {
        return <CommonRows key={index.toString()} payload={serialize(item)} index={index} />;
      })}
    </EmptyRowCol>
  );
}

function serialize(item: IEtc.Item): IRow.Payload {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(item.startedAt, DATE_FORMAT.YYYY_LL).toFormat(
    DATE_FORMAT.YYYY_DOT_LL,
  );
  const title = (() => {
    if (item.endedAt) {
      const endedAt = DateTime.fromFormat(item.endedAt, DATE_FORMAT.YYYY_LL).toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      );
      return `${startedAt} ~ ${endedAt}`;
    }
    return startedAt;
  })();

  return {
    left: {
      title,
    },
    right: {
      ...item,
    },
  };
}
