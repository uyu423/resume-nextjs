import ProfileImage from './image';
import ProfileContact from './contact';
import { PropsWithChildren } from 'react';
import { Row, Col, Alert } from 'reactstrap';
import Style from '../common/style';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { EmptyRowCol } from '../common/helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

namespace Profile {
  export function Component(props: PropsWithChildren<{ payload: IPayload }>) {
    const { image, contact, name, notice } = props.payload;
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

  function createNameArea(name: IPayload['name']) {
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

  function createNoticeArea(notice: IPayload['notice']) {
    return (
      <EmptyRowCol>
        <Alert color="secondary" role="alert">
          {notice.icon ? <FontAwesomeIcon className="mr-2" icon={notice.icon} /> : ''}
          {notice.title}
        </Alert>
      </EmptyRowCol>
    );
  }

  function createProfileContactMap(contacts: IPayload['contact']) {
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

export default Profile;
