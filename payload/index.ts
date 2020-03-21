import profile from './profile';
import introduce from './introduce';
import { IProfile } from '../component/profile/IProfile';
import { IIntroduce } from '../component/introduce/IIntroduce';

export const Payload: Payload = {
  profile,
  introduce
};

interface Payload {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
}

export default Payload;
