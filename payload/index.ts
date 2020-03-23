import profile from './profile';
import introduce from './introduce';
import skill from './skill';
import experience from './experience';
import openSource from './openSource';
import { IProfile } from '../component/profile/IProfile';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { ISkill } from '../component/skill/ISkill';
import { IOpenSource } from '../component/openSource/IOpenSource';
import { IExperience } from '../component/experience/IExperience';

const Payload: Payload = {
  profile,
  introduce,
  skill,
  openSource,
  experience,
};

interface Payload {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  skill: ISkill.Payload;
  openSource: IOpenSource.Payload;
  experience: IExperience.Payload;
}

export default Payload;
