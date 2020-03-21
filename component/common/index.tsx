import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';

export function EmptyRowCol<T = {}>({ children }: PropsWithChildren<T>) {
  return (
    <Row>
      <Col>{children}</Col>
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
