import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
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

const r2curl: IOpenSource.Item = {
  title: 'r2curl',
  descriptions: [
    {
      content: 'Node.js Http Request Object to cURL Command Utility',
    },
    {
      content: 'Owner & Maintainer',
    },
    {
      content: 'TypeScript / TDD',
    },
    {
      content: 'https://github.com/uyu423/r2curl',
      href: 'https://github.com/uyu423/r2curl',
    },
    {
      content: 'Monthly Download: ',
      postImage: 'https://img.shields.io/npm/dm/r2curl.svg',
    },
    {
      content: 'Github Stars: ',
      postImage: 'https://img.shields.io/github/stars/uyu423/r2curl.svg?style=popout',
    },
    {
      content: 'Codacy: ',
      postImage: 'https://api.codacy.com/project/badge/Grade/f74cdea970d44550a0bff9319e467256',
    },
  ],
};

const nodeEscpos: IOpenSource.Item = {
  title: 'node-escpos',
  descriptions: [
    {
      content: 'Node.js용 ESC/POS 프린터 드라이버',
    },
    {
      content: 'Collaborator',
    },
    {
      content: 'Node.js 기반',
    },
    {
      content: '기능 추가 및 Issue Resolve 기여',
    },
    {
      content: 'https://github.com/song940/node-escpos',
      href: 'https://github.com/song940/node-escpos',
    },
    {
      content: 'Github Stars: ',
      postImage: 'https://img.shields.io/github/stars/song940/node-escpos.svg?style=popout',
    },
  ],
};

// const yop: IOpenSource.Item = {
//   title: 'yop',
//   descriptions: [
//     {
//       content: '9XD 커뮤니티 개발자 1년 회고록 웹 프로젝트',
//     },
//     {
//       content: 'Contributor',
//     },
//     {
//       content: '실질적인 개발 참여보다는 Bug Reporting과 약간의 Pull Request',
//     },
//     {
//       content: 'https://github.com/9XDM/YOP',
//       href: 'https://github.com/9XDM/YOP',
//     },
//   ],
// };

const kanboard: IOpenSource.Item = {
  title: 'kanboard',
  descriptions: [
    {
      content: '칸반 프로젝트 Management Board Tool',
    },
    {
      content: 'Contributor',
    },
    {
      content: 'PHP 기반',
    },
    {
      content: '한국어 지원 패치 최초 제공',
    },
    {
      content: 'https://github.com/kanboard/kanboard',
      href: 'https://github.com/kanboard/kanboard',
    },
    {
      content: 'Github Stars: ',
      postImage: 'https://img.shields.io/github/stars/kanboard/kanboard.svg?style=popout',
    },
  ],
};

const ossDeveloperComunity: IOpenSource.Item = {
  title: 'OSS 개발자 커뮤니티',
  descriptions: [
    {
      content: '2013년 성균관대학교 개발자 캠프 참여',
    },
    {
      content: '2017년 국민대학교 개발자 캠프 특강 발표',
    },
    {
      content: '2017년 Git & Github 강의 조교',
    },
  ],
};

const nineXdDeveloperComunity: IOpenSource.Item = {
  title: '9XD 개발자 커뮤니티',
  descriptions: [
    {
      content: '2016년 9X년생 개발자 특강 참여',
    },
    {
      content: '2017년 9XD 1회 해커톤 참여',
    },
  ],
};

const openSource: IOpenSource.Payload = {
  disable: true,
  list: [resume, r2curl, nodeEscpos, kanboard, ossDeveloperComunity, nineXdDeveloperComunity],
};

export default openSource;
