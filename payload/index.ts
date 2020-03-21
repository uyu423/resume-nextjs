import profile from './profile';
import introduce from './introduce';
import skill from './skill';
import { IProfile } from '../component/profile/IProfile';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { ISkill } from '../component/skill/ISkill';

const Payload: Payload = {
  profile,
  introduce,
  skill,
};

interface Payload {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  skill: ISkill.Payload;
}

export default Payload;
