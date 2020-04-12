import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Node.js',
      level: 2,
    },
    {
      title: 'TypeScript',
      level: 1,
    },
    {
      title: 'Express.js',
      level: 2,
    },
    {
      title: 'AWS',
      level: 2,
    },
    // {
    //   title: 'nginx',
    //   level: 3,
    // },
    // {
    //   title: 'Apache',
    //   level: 2,
    // },
    // {
    //   title: 'PHP',
    //   level: 2,
    // },
    // {
    //   title: 'Java',
    //   level: 1,
    // },
    // {
    //   title: 'Python',
    //   level: 1,
    // },
    // {
    //   title: 'C/C++',
    //   level: 1,
    // },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    // {
    //   title: 'Redis',
    //   level: 3,
    // },
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'MongoDB',
      level: 1,
    },
    // {
    //   title: 'Oracle',
    //   level: 1,
    // },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    // {
    //   title: 'Next.js',
    //   level: 2,
    // },
    {
      title: 'React.js',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
    {
      title: 'javascript',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    // {
    //   title: 'Ubuntu',
    // },
    // {
    //   title: 'Vim',
    // },
    // {
    //   title: 'Security',
    // },
    {
      title: 'VS Code',
    },
    // {
    //   title: 'Jira',
    // },
    // {
    //   title: 'Confluence',
    // },
    // {
    //   title: 'Bitbucket',
    // },
    // {
    //   title: 'DevOps',
    // },
    {
      title: 'Git / Github',
    },
    // {
    //   title: 'Agile',
    // },
    // {
    //   title: 'Socket.io',
    // },
    // {
    //   title: 'Jenkins',
    // },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 \n2: 간단한 개발 가능\n3: 고수준 개발 가능',
};

export default skill;
