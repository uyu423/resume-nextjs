import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Node.js',
      level: 3,
    },
    {
      title: 'TypeScript',
      level: 3,
    },
    {
      title: 'Express.js',
      level: 3,
    },
    {
      title: 'AWS',
      level: 3,
    },
    {
      title: 'nginx',
      level: 3,
    },
    {
      title: 'Apache',
      level: 2,
    },
    {
      title: 'PHP',
      level: 2,
    },
    {
      title: 'Java',
      level: 1,
    },
    {
      title: 'Python',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'Redis',
      level: 3,
    },
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'MongoDB',
      level: 2,
    },
    {
      title: 'Oracle',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Next.js',
      level: 2,
    },
    {
      title: 'React.js',
      level: 2,
    },
    {
      title: 'javascript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
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
      title: 'Information Security',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Jira / Confluence',
    },
    {
      title: 'DevOps',
    },
    {
      title: 'Git / Github',
    },
    {
      title: 'Agile',
    },
    {
      title: 'Socket.io',
    },
  ],
};

const skill: ISkill.Payload = {
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준, 2: 취미 개발 수준, 3: Production 개발 가능 수준',
};

export default skill;
