import { Row, Col, Badge } from 'reactstrap';
import { Style } from '../common/Style';
import { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';
import Util from '../common/Util';

namespace Introduce {
  export function Component({ payload }: PropsWithChildren<{ payload: IPayload }>) {
    const latestUpdated = DateTime.fromFormat(payload.latestUpdated, Util.LUXON_DATE_FORMAT.YYYY_LL_DD);

    return (
      <div className="mt-5">
        <Row>
          <Col sm={12} md={3}>
            <h2 style={Style.blue}>INTRODUCE</h2>
          </Col>
          <Col sm={12} md={9}>
            {payload.contents.map((content, i) => (
              <p key={i}>{content}</p>
            ))}
            <p className="text-md-right">
              <small>Latest Updated</small>{' '}
              <Badge color="secondary">{latestUpdated.toFormat(Util.LUXON_DATE_FORMAT.KINDNESS_FULL)}</Badge>
            </p>
            <p className="text-md-right" style={Style.sign}>
              {payload.sign}
            </p>
          </Col>
        </Row>
      </div>
    );
  }

  export interface IPayload {
    contents: string[];
    sign: string;
    /**
     * @sample '2020-03-16',
     */
    latestUpdated: string;
  }
}

export default Introduce;
