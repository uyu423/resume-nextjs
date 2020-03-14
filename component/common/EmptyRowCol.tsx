import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';

export default function EmptyRowCol(props: PropsWithChildren<{}>) {
  return (
    <Row>
      <Col>{props.children}</Col>
    </Row>
  );
}
