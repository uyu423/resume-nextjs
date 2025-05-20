import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '동아리 모바일 게임 프로젝트',
      startedAt: '2025-04',
      where: 'PLAYER',
      descriptions: [
        {
          content: '프로젝트 기획 및 설계',
        },
        {
          content: '프로젝트 관리 및 협업',
        },
        {
          content: '프로젝트 문서 작성',
        },
      ],
    },
  ],
};

export default project;
