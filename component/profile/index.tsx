import ProfileImage from './image';
import ProfileContact from './contact';
import { Row, Col, Alert } from 'reactstrap';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EmptyRowCol from '../common/EmptyRowCol';
import debug from 'debug';
import { PropsWithChildren } from 'react';

const log = debug('yosume:Profile');

export default function Profile({
  payload
}: PropsWithChildren<{ payload: NS_Profile.IPayload }>) {
  log('');
  // log(payload);
  const { image, contact, name, notice } = payload;
  return (
    <div className="mt-5">
      <Row>
        <Col md={3} sm={12}>
          <ProfileImage src={image} />
        </Col>
        <Col md={9} sm={12}>
          {NS_Profile.createNameArea(name)}
          {NS_Profile.createProfileContactMap(contact)}
          {NS_Profile.createNoticeArea(notice)}
        </Col>
      </Row>
    </div>
  );
}

export namespace NS_Profile {
  export function createNameArea(name: IPayload['name']) {
    return (
      <EmptyRowCol>
        <div className="text-center text-md-left">
          <h1 style={{ color: '#3c78d8' }}>
            {name.title} <small>{name.small || ''}</small>
          </h1>
        </div>
      </EmptyRowCol>
    );
  }

  export function createNoticeArea(notice: IPayload['notice']) {
    return (
      <EmptyRowCol>
        <Alert color="secondary" role="alert">
          {notice.icon ? (
            <FontAwesomeIcon className="mr-2" icon={notice.icon} />
          ) : (
            ''
          )}
          {notice.title}
        </Alert>
      </EmptyRowCol>
    );
  }

  export function createProfileContactMap(contacts: IPayload['contact']) {
    return (
      <EmptyRowCol>
        {contacts.map((contact, i) => (
          <ProfileContact key={i} payload={contact} />
        ))}
      </EmptyRowCol>
    );
  }

  export interface IPayload {
    image: string;
    name: {
      title: string;
      small?: string;
    };
    contact: IContact[];
    notice: {
      title: string;
      icon?: IconDefinition;
    };
  }

  export interface IContact {
    icon: IconDefinition;
    title?: string;
    link?: string;
    badge?: true;
  }
}
