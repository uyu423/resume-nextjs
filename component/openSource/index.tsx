import { Col, Row } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { EmptyRowCol } from '../common';
import { Style } from '../common/Style';
import { IOpenSource } from './IOpenSource';
import OpenSourceRow from './row';

export const OpenSource = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IOpenSource.Payload }>) {
  return (
    <div className="mt-5">
      <EmptyRowCol className="pt-5">
        <Row className="pb-3">
          <Col>
            <h2 style={Style.blue}>OPEN SOURCE</h2>
          </Col>
        </Row>
        {payload.list.map((item, index) => {
          return <OpenSourceRow key={index.toString()} item={item} index={index} />;
        })}
      </EmptyRowCol>
    </div>
  );
}
