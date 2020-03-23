import { Col, Row } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { EmptyRowCol } from '../common';
import { Style } from '../common/Style';
import { IExperience } from './IExperience';
import ExperienceRow from './row';

export const Experience = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IExperience.Payload }>) {
  return (
    <div className="mt-5">
      <EmptyRowCol className="pt-5">
        <Row className="pb-3">
          <Col>
            <h2 style={Style.blue}>EXPERIENCE</h2>
          </Col>
        </Row>
        {payload.list.map((item, index) => (
          <ExperienceRow key={index.toString()} item={item} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
}
