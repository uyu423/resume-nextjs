import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '盧드 JS 개발',
      startedAt: '2026-05',
      where: '예아',
      descriptions: [
        {
          content: '스멜!',
        },
        {
          content: '야~ 기분좋다!!',
          weight: 'MEDIUM',
          descriptions: [],
        },
      ],
    },
    {
      title: '운지',
      startedAt: '2009-05',
      where: '부엉이 바위',
      descriptions: [
        {
          content: '국정원 지하 개발자가 되기 위하여',
        },
      ],
    },
  ],
};

export default project;
