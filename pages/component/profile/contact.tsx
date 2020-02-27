import { PropsWithChildren } from 'react';
import Profile from '.';

export default function ProfileContact(props: PropsWithChildren<{ payload: Profile.IContact }>) {
  const { link, title } = props.payload;
  return (
    <div>
      <p>ProfileContact</p>
      <p>{title || link || '?'}</p>
    </div>
  );
}
