import { Row, Col, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import ProfileContact from './contact';
import ProfileImage from './image';
import { EmptyRowCol } from '../common';
import { IProfile } from './IProfile';
import { Style } from '../common/Style';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IProfile.Payload;

export const Profile = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const { image, contact, name, notice } = payload;
  return (
    <div className="mt-5">
      <Row>
        <Col md={3} sm={12}>
          <ProfileImage src={image} />
        </Col>
        <Col md={9} sm={12}>
          {createNameArea(name)}
          {createProfileContactMap(contact)}
          {createNoticeArea(notice)}
        </Col>
      </Row>
    </div>
  );
}

function createNameArea(name: Payload['name']) {
  return (
    <Row>
      <Col className="text-center text-md-left">
        <h1 style={Style.blue}>
          {name.title} <small>{name.small || ''}</small>
        </h1>
      </Col>
    </Row>
  );
}

function createProfileContactMap(contacts: Payload['contact']) {
  return (
    <Row>
      <Col className="pt-3">
        {contacts.map((contact, index) => (
          <ProfileContact key={index.toString()} payload={contact} />
        ))}
      </Col>
    </Row>
  );
}

function createNoticeArea(notice: Payload['notice']) {
  return (
    <EmptyRowCol>
      <Alert color="secondary" role="alert" className="mt-3">
        {notice.icon ? <FontAwesomeIcon className="mr-2" icon={notice.icon} /> : ''}
        {notice.title}
      </Alert>
    </EmptyRowCol>
  );
}
