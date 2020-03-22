import profile from './profile';
import introduce from './introduce';
import skill from './skill';
import openSource from './openSource';
import { IProfile } from '../component/profile/IProfile';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { ISkill } from '../component/skill/ISkill';
import { IOpenSource } from '../component/openSource/IOpenSource';

const Payload: Payload = {
  profile,
  introduce,
  skill,
  openSource,
};

interface Payload {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  skill: ISkill.Payload;
  openSource: IOpenSource.Payload;
}

export default Payload;
