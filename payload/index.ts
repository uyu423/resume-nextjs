import profile from './profile';
import { NS_Profile } from '../component/profile';

export const Payload: IPayload = {
  profile
};

export interface IPayload {
  profile: NS_Profile.IPayload;
}

export default Payload;
