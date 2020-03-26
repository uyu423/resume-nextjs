import { IProject } from '../component/project/IProject';

const WHERE = {
  YA: '야놀자 (Yanolja)',
  PL: '플레이팅 (Plating)',
  EC: '이큐브랩 (Ecube Labs)',
  KY: '키니 (KYNY)',
};

const yaNol2020: IProject.Item = {
  title: '야놀자 2020 놀력 포인트 지급 이벤트 런칭',
  startedAt: '2019-10',
  endedAt: '2020-01',
  where: WHERE.YA,
  descriptions: [
    { content: '1년간 24시간 진행되는 무중단 이벤트 구현' },
    {
      content:
        '비즈니스 요구사항 구체화 및 제약 사항 파악, 개발 방향성 수립, 포인트 지급 알고리즘 및 API 구현',
    },
    {
      content: 'Batch Worker 미 이벤트 지표 모니터링 도구, 비상용 관리자 CLI 기능 구현',
    },
    { content: '2020년 1월 기준 DAU n% 향상 및 평균 구매 건수 n건 향상' },
    {
      content: "(관련기사) 야놀자 탁상용 달력 '2020 놀력' 출시",
      href: 'http://topclass.chosun.com/daily/view.asp?idx=267&Newsnumb=201911267',
    },
  ],
};

const yaAdvertA: IProject.Item = {
  title: '야놀자 숙소 리스트 신규 광고 상품 추가',
  startedAt: '2019-08',
  endedAt: '2019-10',
  where: WHERE.YA,
  descriptions: [
    {
      content: 'TBD',
    },
  ],
};

const yaRedis: IProject.Item = {
  title: 'Legacy Redis 청산 및 구조 리팩토링',
  startedAt: '2019-07',
  endedAt: '2019-08',
  where: WHERE.YA,
  descriptions: [
    { content: '용도와 목적 없이 사용되고 있던 Redis 전체 정리' },
    { content: '기존 n개의 Client 를 용도/목적에 맞게 m개의 Client로 분리' },
    { content: 'Storage 부족 현상 해소로 서비스 운영 위협 감소' },
    { content: 'Product 개발시 Redis 사용과 ElastiCache 운영에 대한 정책 수립' },
  ],
};

const yaHotDeal: IProject.Item = {
  title: '야놀자 쇼킹특가/핫딜 서비스 런칭',
  startedAt: '2019-05',
  endedAt: '2019-07',
  where: WHERE.YA,
  descriptions: [
    {
      content: 'TBD',
    },
  ],
};

const yaPrivacy: IProject.Item = {
  title: '야놀자 마케팅 수신 동의 절차 개선',
  startedAt: '2019-04',
  endedAt: '2019-05',
  where: WHERE.YA,
  descriptions: [
    { content: '기존 불필요 절차 개선으로 마케팅 수신 동의율 향상' },
    { content: '개정된 마케팅 관련 법률 제약사항 적용으로 개인정보 이슈 사전 방지' },
    { content: 'TBD' },
  ],
};

const yaAwsIsms: IProject.Item = {
  title: 'AWS 인프라 재정비 / ISMS 심사 보조',
  startedAt: '2019-02',
  endedAt: '2019-04',
  where: WHERE.YA,
  descriptions: [
    {
      content: 'TBD',
    },
  ],
};

const yaGlobal: IProject.Item = {
  title: '야놀자 글로벌 서비스 런칭',
  startedAt: '2018-10',
  endedAt: '2019-02',
  where: WHERE.YA,
  descriptions: [
    {
      content: 'TBD',
    },
  ],
};

const yaLeisure: IProject.Item = {
  title: '야놀자 레저 서비스 런칭',
  startedAt: '2018-05',
  endedAt: '2018-09',
  where: WHERE.YA,
  descriptions: [
    {
      content: 'TBD',
    },
  ],
};

const yaPlaceDetail: IProject.Item = {
  title: '국내 숙소 상세 개편 및 유지보수',
  startedAt: '2018-03',
  // endedAt: '2019-12',
  where: WHERE.YA,
  descriptions: [
    { content: '2018년 상반기에 국내 숙소 상세(PDP) 리팩토링 및 서비스 개선 완료' },
    { content: 'Response Cache 도입 및 리팩토링으로 기존 대비 latency 90% 감소' },
    { content: '2019년 마케팅 배너 창구 추가 구현 및 호텔 KTO 등급 적용 등 작업' },
    { content: 'TBD' },
  ],
};

const yaJoyAPI: IProject.Item = {
  title: 'Mashup API 개발 및 운영',
  startedAt: '2018-03',
  // endedAt: '2019-12',
  where: WHERE.YA,
  descriptions: [{ content: 'Aggregation Layer의 Mashup API 개발 및 운영' }, { content: 'TBD' }],
};

const plBackend: IProject.Item = {
  title: '플레이팅 백엔드 서비스 개발',
  startedAt: '2016-10',
  endedAt: '2017-11',
  where: WHERE.PL,
  descriptions: [
    {
      content: 'TBD',
    },
  ],
};

const plEscPos: IProject.Item = {
  title: 'ESC/POS Printer Native 프로그램 개발',
  startedAt: '2017-08',
  endedAt: '2017-10',
  where: WHERE.PL,
  descriptions: [
    { content: '플레이팅 자체 주문 확인지와 영수증 출력용 프로그램' },
    { content: 'Node.js와 Electron.js, node-escpos를 사용하여 개발' },
    { content: 'Socket을 사용하여 웹 → 서버 → POS 프린터 통신 구현' },
    { content: '플레이팅 각 영업점 별로 배포하여 사용' },
    {
      content: '오픈소스 기여:',
      postHref: 'https://github.com/song940/node-escpos',
    },
  ],
};

const plDelivery: IProject.Item = {
  title: '플레이팅 새벽 배송 서비스 런칭',
  startedAt: '2017-03',
  endedAt: '2017-05',
  where: WHERE.PL,
  descriptions: [
    { content: '새로운 주문 형태인 새벽 배송 시스템 개발' },
    { content: '기존 API 서버 관리 미흡으로 기능 추가 불가능 상황 도래' },
    { content: '새벽 주문 전용 Node.js API 서버를 구축하고 기능 개발' },
    { content: 'API v2 프로젝트의 코드 베이스가 됨.' },
    { content: '개발 시 확장성과 모듈화 고려의 중요성을 깨닫게 됨' },
  ],
};

const plBigboss: IProject.Item = {
  title: '플레이팅 Admin 서비스 개발',
  startedAt: '2016-10',
  endedAt: '2017-11',
  where: WHERE.PL,
  descriptions: [
    { content: '개발 인력 부족으로 간간히 프론트엔드 개발에 투입' },
    { content: 'React.js 등을 사용하여 내부 백오피스 툴 개발' },
    { content: 'ERP, 라이더 앱, 서버 모니터링 등 개발' },
    { content: 'Socket Client 통신, 비동기 HTTP 통신 등을 사용' },
  ],
};

const ecBackend: IProject.Item = {
  title: '클릭시티네트웍스 백엔드 개발',
  startedAt: '2015-07',
  endedAt: '2016-02',
  where: WHERE.EC,
  descriptions: [
    { content: '도시 쓰레기량 관제 모니터링 툴 개발' },
    { content: 'Beta는 PHP, v1 은 Node.js, Express.js로 개발' },
    { content: 'v1 개발 당시 사내 최초로 AWS를 도입함' },
    { content: '백엔드 개발자로서 Out of Memory, 침해 사고, 성능 튜닝 등 다양한 서버 문제를 경험' },
  ],
};

const kyToto: IProject.Item = {
  title: '스포츠 토토 승률 계산 서비스 개발',
  startedAt: '2014-09',
  endedAt: '2015-03',
  where: WHERE.KY,
  descriptions: [
    { content: '통계 알고리즘을 사용한 해외 축구 스포츠 토토 승률 예상 서비스' },
    { content: 'Java Servlet을 사용하여 통계 알고리즘을 코드화' },
    { content: 'Linux와 Apache 등을 사용하여 서버 인프라 구축' },
    { content: 'Wordpress, PHP, MySQL 등을 사용하여 서비스 개발' },
    {
      content:
        '비즈니스 멘토링을 통해 BM 분석, 사업 전략 수립, 개발 방향성 수립 및 설계, 다른 직군과의 협업 등을 경험',
    },
  ],
};

const project: IProject.Payload = {
  list: [
    yaNol2020,
    yaAdvertA,
    yaRedis,
    yaHotDeal,
    yaPrivacy,
    yaAwsIsms,
    yaGlobal,
    yaLeisure,
    yaPlaceDetail,
    yaJoyAPI,
    plBackend,
    plEscPos,
    plDelivery,
    plBigboss,
    ecBackend,
    kyToto,
  ],
};

export default project;
