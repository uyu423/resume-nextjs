import profile from './profile';
import Profile from '../components/profile';

export const Payload: Payload = {
  profile,
};

interface Payload {
  profile: Profile.IPayload;
}

export default Payload;
