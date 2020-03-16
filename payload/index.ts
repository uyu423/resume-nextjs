import profile from './profile';
import introduce from './introduce';
import Profile from '../component/profile';
import Introduce from '../component/introduce';

export const Payload: Payload = {
  profile,
  introduce,
};

interface Payload {
  profile: Profile.IPayload;
  introduce: Introduce.IPayload;
}

export default Payload;
