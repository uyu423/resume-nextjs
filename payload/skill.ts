import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: '무현코드',
      level: 3,
    },
  ],
};

const kernelDevelopment: ISkill.Skill = {
  category: 'Kernel Development',
  items: [],
};

const virtualization: ISkill.Skill = {
  category: 'Virtualization',
  items: [
    {
      title: '응디시티',
      level: 3,
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Automation',
  items: [],
};

const networkSecurity: ISkill.Skill = {
  category: 'Network Security',
  items: [
    {
      title: '노무현이 주도하는 질서',
      level: 3,
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: '화악 올라갔다',
    },
    {
      title: '파악 내려갔다',
    },
    {
      title: '오늘은 제가 쏩니다',
    },
    {
      title: '흔들으라 이기야',
    },
    {
      title: '피아제 시계',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    kernelDevelopment,
    virtualization,
    automation,
    networkSecurity,
    misc,
  ],
  tooltip: '1: 湲곗큹 �닔以�\n2: 痍⑤�� 媛쒕컻 �닔以�\n3: Production 媛쒕컻 媛��뒫 �닔以�',
};

export default skill;
