import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: true,
  list: [
    {
      title: 'node',
      descriptions: [
        { content: 'Node.js JavaScript runtime' },
        { content: 'Contributor' },
        {
          content: 'https://github.com/nodejs/node',
          href: 'https://github.com/nodejs/node',
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/nodejs/node.svg?style=popout',
        },
      ],
    },
    {
      title: 'NestJS',
      descriptions: [
        {
          content: 'A progressive Node.js framework',
        },
        {
          content:
            'for building efficient, scalable, and enterprise-grade server-side applications',
        },
        {
          content: 'Contributor',
        },
        {
          content: 'https://github.com/nestjs/nest',
          href: 'https://github.com/nestjs/nest',
        },
        {
          content: 'Monthly Download: ',
          postImage: 'https://img.shields.io/npm/dm/@nestjs/core.svg',
        },
        {
          content: 'Github Stars: ',
          postImage: 'https://img.shields.io/github/stars/nestjs/nest.svg?style=popout',
        },
      ],
    },
    {
      title: 'Developer Community',
      descriptions: [
        {
          content: 'Presentation in 2019',
        },
        {
          content: 'Hackathon participation in 2017',
        },
      ],
    },
  ],
};

export default openSource;
