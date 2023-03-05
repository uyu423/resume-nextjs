import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'JAVA',
      level: 3,
    },
    {
      title: 'Spring boot',
      level: 3,
    },
    {
      title: 'PHP',
      level: 2,
    },
    {
      title: 'Python',
      level: 2,
    },
    {
      title: 'JUnit',
      level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'PostgreSQL',
      level: 2,
    },
    {
      title: 'H2',
      level: 2,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React.js',
      level: 3,
    },
    {
      title: 'Vue.js',
      level: 3,
    },
    {
      title: 'jquery',
      level: 3,
    },
    {
      title: 'Cypress',
      level: 3,
    },
    {
      title: 'Playwright',
      level: 3,
    },
    {
      title: 'Codecept.js',
      level: 3,
    },
    {
      title: 'Jest',
      level: 3,
    },
    {
      title: 'Javascript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
    {
      title: 'bootstrap',
      level: 2,
    },
    {
      title: 'MobX',
      level: 2,
    },
    {
      title: 'Recoil',
      level: 2,
    },
    {
      title: 'Typescript',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'Vim',
    },
    {
      title: 'Git',
    },
    {
      title: 'SVN',
    },
    {
      title: 'Docker',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'IntelliJ',
    },
    {
      title: 'Github action',
    },
    {
      title: 'Github action',
    },
    {
      title: 'crontab',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
