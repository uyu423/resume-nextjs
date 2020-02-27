import { PropsWithChildren } from 'react';

export default function ProfileImage(props: PropsWithChildren<{ src: string }>) {
  return (
    <div>
      <p>ProfileImage</p>
      <p>{props.src}</p>
    </div>
  );
}
