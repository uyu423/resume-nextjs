import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '코드숨',
      position:
        '(프리랜서) 리뷰어로서 `코드숨 리액트편` 수강생의 코드를 리뷰하여 프론트엔드에서 TDD를 할 수 있도록 돕는 역할을 하였습니다.',
      startedAt: '2022-07',
      endedAt: '2022-10',
      descriptions: ['수강생의 질문에 대한 답변', '수강생 코드에 대한 리뷰'],
      skillKeywords: ['React.js', 'Jest', 'Git'],
    },
    {
      title: '어노테이션 에이아이',
      position:
        '처음에는 서버 장애 대응 관련 인프라 업무를 맡고 있었지만 개발팀에 프론트엔드 개발자로 합류하여 배포까지 담당하였습니다.',
      startedAt: '2021-12',
      endedAt: '2022-07',
      descriptions: [
        '어노테이션 툴 `어노위즈` 프론트엔드 개발',
        '어노테이션 툴 `어노위즈` 프론트엔드 배포',
        '코드 리뷰를 통해 오타 및 버그 수십 건 정정',
        '서버 장애 발생 시 원인 분석 및 서버 정상화',
        '지속적인 서버 장애 발생으로 사용자들의 피로도가 높았는데, 근본적인 대응을 건의하여 장애 발생률을 일주일에 수십 건에서 수 건 단위로 낮추었다.',
      ],
      skillKeywords: [
        'React.js',
        'TypeScript',
        'Docker',
        'Github action',
        'MobX',
        'Recoil',
        'Jest',
        'Cypress',
        'Playwright',
        'Git',
      ],
    },
    {
      title: '엠오디티비',
      position: '인턴으로 입사하여 다양한 업무를 배우고 담당하였습니다.',
      startedAt: '2021-06',
      endedAt: '2021-09',
      descriptions: [
        '세브란스병원 등 수 백여개의 병원 입원실에 제공되는 스마트병상 서비스 엠오디튜브 유지보수 및 트러블슈팅',
        '이지체인지(친환경 태그) 사내 테스트 환경 구축 및 테스트로 최적의 공유기 간 간격 측정',
        '개발한 기능을 테스트하던 중 로딩 광고 오류를 발견하였고 로딩 광고 오류 관련 로그 분석으로 펌웨어 문제인 것을 확인하고, 수정을 요청하여 로딩 광고 시청률을 높임',
        '장애 발생 시 원인 분석 및 해결',
      ],
      skillKeywords: ['PHP', 'jquery', 'Vue.js', 'bootstrap', 'crontab', 'MySQL', 'SVN'],
    },
  ],
};

export default experience;
