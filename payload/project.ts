import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'ofCORS 질문 답변 서비스 프론트엔드와 백엔드 개발 및 배포',
      startedAt: '2022-12',
      where: '메가테라',
      descriptions: [
        {
          content:
            '질문, 답변, 채택, 검색, 정렬, 추천, 스크랩, 포인트 결제, 포인트 환전 등 기능 및 화면 개발',
        },
        { content: '카카오페이, 아임포트 등 외부 API 연동' },
        { content: 'Cloudinary를 이용한 이미지 업로드' },
        { content: 'fly.io로 서버 배포' },
        { content: 'github pages로 프론트엔드 배포' },
      ],
    },
    {
      title: '문제 은행 업로드 자동화 매크로 스크립트 개발',
      startedAt: '2021-03',
      endedAt: '2021-06',
      where: '매스큐',
      descriptions: [
        {
          content:
            '셀레니움을 이용한 자동 업로드 스크립트를 파이썬으로 개발하여 업로드 시간을 약 95% 단축 (1 문제 평균 업로드 속도 3분 -> 5초)',
        },
        { content: '한글 문서에서 문단을 인식하여 문단 단위로 이미지 크롭하여 저장하기' },
        { content: '셀레니움을 이용하여 웹을 조작하여 자동으로 복잡한 업로드 과정을 자동화' },
      ],
    },
  ],
};

export default project;
