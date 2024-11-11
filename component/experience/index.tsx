import { Badge, Col, Row } from 'reactstrap';
import { DateTime, Duration } from 'luxon';

import { PropsWithChildren } from 'react';
import { EmptyRowCol } from '../common';
import ExperienceRow from './row';
import { IExperience } from './IExperience';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { Style } from '../common/Style';
import Util from '../common/Util';

type Payload = IExperience.Payload;

export const Experience = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const totalPeriod = () => {
    if (payload.disableTotalPeriod) {
      return '';
    }
    return (
      <span style={{ fontSize: '50%' }}>
        <Badge>{getFormattingExperienceTotalDuration(payload)}</Badge>
      </span>
    );
  };

  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 style={Style.blue}>EXPERIENCE {totalPeriod()}</h2>
          </Col>
        </Row>
        {payload.list.map((item, index) => (
          <ExperienceRow key={index.toString()} item={item} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
}

function getFormattingExperienceTotalDuration(payload: IExperience.Payload) {
  const durations = payload.list.reduce((acc: Duration[], item: IExperience.Item) => {
    const itemDurations = item.positions.map((position: IExperience.Position) => {
      const endedAt = position.endedAt
        ? DateTime.fromFormat(position.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL)
        : DateTime.local();
      const startedAt = DateTime.fromFormat(position.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL);
      return endedAt.diff(startedAt);
    });
    return acc.concat(itemDurations); // 중첩된 배열 평탄화
  }, []);

  const totalExperience = durations.reduce(
    (prev: Duration, cur: Duration) => prev.plus(cur),
    Duration.fromMillis(0),
  );

  return totalExperience.toFormat(`총 ${Util.LUXON_DATE_FORMAT.DURATION_KINDNESS}`);
}
