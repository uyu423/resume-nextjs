import { Row, Col, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import ProfileContact from './contact';
import ProfileImage from './image';
import { EmptyRowCol } from '../common';
import { IProfile } from './IProfile';
import { Style } from '../common/Style';

export const Profile = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IProfile.Payload }>) {
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

function createNameArea(name: IProfile.Payload['name']) {
  return (
    <EmptyRowCol>
      <div className="text-center text-md-left">
        <h1 style={Style.blue}>
          {name.title} <small>{name.small || ''}</small>
        </h1>
      </div>
    </EmptyRowCol>
  );
}

function createProfileContactMap(contacts: IProfile.Payload['contact']) {
  return (
    <EmptyRowCol>
      {contacts.map((contact) => (
        <ProfileContact payload={contact} />
      ))}
    </EmptyRowCol>
  );
}

function createNoticeArea(notice: IProfile.Payload['notice']) {
  return (
    <EmptyRowCol>
      <Alert color="secondary" role="alert" className="mt-3">
        {notice.icon ? <FontAwesomeIcon className="mr-2" icon={notice.icon} /> : ''}
        {notice.title}
      </Alert>
    </EmptyRowCol>
  );
}
