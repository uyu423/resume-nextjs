import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '2025-1 산학 캡스톤 디자인',
      startedAt: '2025-03',
      endedAt: '2025-06',
      where: '배재대학교/2025-1 산학 캡스톤 디자인',
      descriptions: [
        {
          content: '작업중',
        },
      ],
    },
    {
      title: '충청권 대학교 소통 웹 플랫폼',
      startedAt: '2024-09',
      endedAt: '2024-12',
      where: '배재대학교/2024-2 캡스톤 디자인',
      descriptions: [
        {
          content: '2024 캡스톤 디자인 경진대회 우수상',
        },
        {
          content:
            '작품명은 Cunit(씨유닛)이고 충청도 지역 대학생들의 소통을 위한 커뮤니티 웹입니다. ‘C’는 충청도를 의미하고, ‘unit’은 충청도 안에 세종, 대전, 충남 지역이 하나로 모여 협력하는 공간의 의미를 담고 있습니다.',
        },
        {
          content:
            '이 웹 서비스를 통해, 학생들은 자신들의 경험을 나누고, 서로의 기술을 공유하며, 공동 프로젝트를 기획하고 실행하는 과정에서 성장할 수 있는 기회를 가지게 됩니다.',
        },
      ],
    },
    {
      title: '객체탐지를 이용한 반려동물 커뮤니케이션 앱',
      startedAt: '2024-03',
      endedAt: '2024-06',
      where: '배재대학교/2024-1 캡스톤 디자인',
      descriptions: [
        {
          content: 'WithPet(객체탐지를 이용한 반려동물 커뮤니티)',
        },
      ],
    },
    {
      title: '반려동물 자동 급식기',
      startedAt: '2022-09',
      endedAt: '2022-12',
      where: '배재대학교/1학년 창의공학설계',
      descriptions: [
        {
          content: '아두이노 활용 프로젝트',
        },
      ],
    },
  ],
};

export default project;
