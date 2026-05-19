import { ISkill } from '../component/skill/ISkill';

const gameEngine: ISkill.Skill = {
  category: 'Game Engine',
  items: [
    {
      title: 'Unity',
      level: 2,
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Game Development',
    },
    {
      title: 'Guitar Playing',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    gameEngine,
    misc,
  ],
  tooltip: '1: 기초 수준\n2: 숙련 수준\n3: 마스터 수준',
};

export default skill;