import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';

export function EmptyRowCol<T = {}>(props: PropsWithChildren<T>) {
  return (
    <Row>
      <Col>{props.children}</Col>
    </Row>
  );
}

export function CommonRow() {
  return (
    <div>
      <p>CommonRow</p>
    </div>
  );
}
