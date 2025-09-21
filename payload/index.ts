import profile from './profile';
import introduce from './introduce';
import skill from './skill';
import experience from './experience';
import openSource from './openSource';
import project from './project';
import presentation from './presentation';
import education from './education';
import article from './article';
import etc from './etc';
import footer from './footer';

import { _global } from './_global';

import { IProfile } from '../component/profile/IProfile';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { ISkill } from '../component/skill/ISkill';
import { IOpenSource } from '../component/openSource/IOpenSource';
import { IExperience } from '../component/experience/IExperience';
import { IProject } from '../component/project/IProject';
import { IPresentation } from '../component/presentation/IPresentation';
import { IEducation } from '../component/education/IEducation';
import { IEtc } from '../component/etc/IEtc';
import { IFooter } from '../component/footer/IFooter';
import { IGlobal } from '../component/common/IGlobal';
import { IArticle } from '../component/article/IArticle';

export const Payload: Payload = {
  profile,
  introduce,
  skill,
  openSource,
  experience,
  project,
  presentation,
  article,
  education,
  etc,
  footer,

  _global,
};

export interface Payload {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  skill: ISkill.Payload;
  openSource: IOpenSource.Payload;
  experience: IExperience.Payload;
  project: IProject.Payload;
  presentation: IPresentation.Payload;
  education: IEducation.Payload;
  article: IArticle.Payload;
  etc: IEtc.Payload;
  footer: IFooter.Payload;

  _global: IGlobal.Payload;
}

export const sectionIds = [
  !Payload.profile.disable && Payload.profile.sectionId,
  !Payload.introduce.disable && Payload.introduce.sectionId,
  !Payload.skill.disable && Payload.skill.sectionId,
  !Payload.experience.disable && Payload.experience.sectionId,
  !Payload.project.disable && Payload.project.sectionId,
  !Payload.openSource.disable && Payload.openSource.sectionId,
  !Payload.presentation.disable && Payload.presentation.sectionId,
  !Payload.article.disable && Payload.article.sectionId,
  !Payload.education.disable && Payload.education.sectionId,
  !Payload.etc.disable && Payload.etc.sectionId,
].filter(Boolean) as string[];
