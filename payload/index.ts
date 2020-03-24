import profile from './profile';
import introduce from './introduce';
import skill from './skill';
import experience from './experience';
import openSource from './openSource';
import project from './project';
import { IProfile } from '../component/profile/IProfile';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { ISkill } from '../component/skill/ISkill';
import { IOpenSource } from '../component/openSource/IOpenSource';
import { IExperience } from '../component/experience/IExperience';
import { IProject } from '../component/project/IProject';

const Payload: Payload = {
  profile,
  introduce,
  skill,
  openSource,
  experience,
  project,
};

interface Payload {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  skill: ISkill.Payload;
  openSource: IOpenSource.Payload;
  experience: IExperience.Payload;
  project: IProject.Payload;
}

export default Payload;
