import { PropsWithChildren } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function ProfileImage({ src }: PropsWithChildren<{ src: string }>) {
  return (
    <div className="pb-3 text-md-right text-center">
      <img style={{ maxHeight: '320px' }} className="img-fluid rounded" src={src} alt="Profile" />
    </div>
  );
}
