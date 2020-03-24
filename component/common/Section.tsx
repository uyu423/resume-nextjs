import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { EmptyRowCol } from '.';
import { Style } from './Style';

export function CommonSection({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 style={Style.blue}>
              <span>{title}</span>
            </h2>
          </Col>
        </Row>
        {children}
      </EmptyRowCol>
    </div>
  );
}
