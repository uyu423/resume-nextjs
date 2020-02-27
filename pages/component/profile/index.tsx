import ProfileImage from './image';
import ProfileContact from './contact';
import { PropsWithChildren } from 'react';

export namespace Profile {
  export function Component(props: PropsWithChildren<{ payload: IPayload }>) {
    const { image, contact, name, notice } = props.payload;
    return (
      <div>
        <p>Profile</p>
        <ProfileImage src={image} />
        <div>
          <h1>
            {name.title} <small>{name.small}</small>
          </h1>
        </div>
        {createProfileContactMap(contact)}
        <div>
          <p>{notice}</p>
        </div>
      </div>
    );
  }

  function createProfileContactMap(contacts: IPayload['contact']) {
    return contacts.map((contact) => <ProfileContact payload={contact} />);
  }

  export interface IPayload {
    image: string;
    name: {
      title: string;
      small: string;
    };
    contact: IContact[];
    notice: string;
  }

  type ContactType = 'email' | 'phone' | 'github' | 'blog' | 'facebook';

  export interface IContact {
    facon: string;
    type: ContactType;
    title?: string;
    link?: string;
  }
}

export default Profile;
