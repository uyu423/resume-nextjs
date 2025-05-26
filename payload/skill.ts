import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'C',
      // level: 3,
    },
    {
      title: 'C++',
      // level: 3,
    },
    {
      title: 'HTML',
      // level: 3,
    },
    {
      title: 'CSS',
      // level: 2,
    },
    {
      title: 'JAVA',
      // level: 2,
    },
    {
      title: 'SQL',
      // level: 1,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
