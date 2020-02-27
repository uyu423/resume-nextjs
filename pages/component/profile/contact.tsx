import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import Profile from '../profile';
import { Row, Col, Badge } from 'reactstrap';

export default function ProfileContact(props: PropsWithChildren<{ payload: Profile.IContact }>) {
  return (
    <Row className="pb-2">
      <Col xs={1} className="text-right">
        <FontAwesomeIcon icon={props.payload.icon} />
      </Col>
      <Col xs="auto">{createLink(props.payload)}</Col>
    </Row>
  );
}

function createLink(payload: Profile.IContact) {
  if (payload.badge) {
    return <Badge color="light">{payload.title || payload.link}</Badge>;
  }
  return (
    <a href={payload.link} target="_blank">
      {payload.title || payload.link}
    </a>
  );
}
