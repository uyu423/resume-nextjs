import { Row, Col, Badge } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IIntroduce } from './IIntroduce';

export const Introduce = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IIntroduce.Payload }>) {
  const latestUpdated = DateTime.fromFormat(
    payload.latestUpdated,
    Util.LUXON_DATE_FORMAT.YYYY_LL_DD,
  );

  return (
    <div className="mt-5">
      <Row>
        <Col sm={12} md={3}>
          <h2 style={Style.blue}>INTRODUCE</h2>
        </Col>
        <Col sm={12} md={9}>
          {payload.contents.map((content, index) => (
            <p key={index.toString()}>{content}</p>
          ))}
          <p className="text-md-right">
            <small>Latest Updated</small>{' '}
            <Badge color="secondary">
              {latestUpdated.toFormat(Util.LUXON_DATE_FORMAT.KINDNESS_FULL)}
            </Badge>
          </p>
          <p className="text-md-right" style={Style.sign}>
            {payload.sign}
          </p>
        </Col>
      </Row>
    </div>
  );
}
