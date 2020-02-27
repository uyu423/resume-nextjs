import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';

namespace Helper {
  export function EmptyRowCol(props: PropsWithChildren<{}>) {
    return (
      <Row>
        <Col>{props.children}</Col>
      </Row>
    );
  }
}

export const EmptyRowCol = Helper.EmptyRowCol;
