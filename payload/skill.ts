import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
      level: 2,
    },
    {
      title: 'PHP',
      level: 2,
    },
    {
      title: 'Apache',
      level: 2,
    },
    {
      title: 'Nginx',
      level: 1,
    },
    {
      title: 'Node.js',
      level: 1,
    },
    {
      title: 'ElasticSearch',
      level: 1,
    },
    {
      title: 'RabbitMQ',
      level: 1,
    },
  ],
};

const cloud: ISkill.Skill = {
  category: 'Cloud',
  items: [
    {
      title: 'AWS (EC2, S3, SES)',
      level: 2,
    },
    {
      title: 'GCP (Stackdriver)',
      level: 2,
    }
  ]
}

const framework: ISkill.Skill = {
  category: 'Framework',
  items: [
    {
      title: 'Spring',
      level: 2,
    },
    {
      title: 'Codeigniter',
      level: 2,
    },
    {
      title: 'Netty',
      level: 1,
    }
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
      title: 'Memcached',
      level: 1,
    },
    {
      title: 'MongoDB',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'javascript',
      level: 2,
    },
    {
      title: 'jQuery',
      level: 2,
    },
    {
      title: 'typeScript',
      level: 1,
    },
    {
      title: 'Nuxt.js',
      level: 1,
    },
    {
      title: 'Vue.js',
      level: 1,
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
      title: 'Algorithm',
    },
    {
      title: 'IntelliJ IDEA',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
    {
      title: 'Selenium',
    },
    {
      title: 'DevOps',
    },
    {
      title: 'nGrinder',
    },
    {
      title: 'Git / Github',
    },
    {
      title: 'Docker',
    },
    {
      title: 'Buddy (CI / CD)',
    },
    {
      title: 'Fluentd',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, cloud, framework, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 중급 수준\n3: 고급 수준',
};

export default skill;
