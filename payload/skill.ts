import { ISkill } from '../component/skill/ISkill';

const Backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Node.js',
      level: 3,
    },
  ],
};
const Database: ISkill.Skill = {
  category: 'Back-end',
  items: [],
};
const Frontend: ISkill.Skill = {
  category: 'Back-end',
  items: [],
};

const Etc: ISkill.Skill = {
  category: 'Back-end',
  items: [],
};

const Skill: ISkill.Payload = {
  skills: [Backend, Database, Frontend, Etc],
};

export default Skill;
