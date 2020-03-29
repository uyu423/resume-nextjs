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

const yaRedis: IProject.Item = {
  title: 'Legacy Redis 청산 및 구조 개편',
  startedAt: '2019-07',
  endedAt: '2019-10',
  where: WHERE.YA,
  descriptions: [
    { content: '용도와 목적 없이 사용되고 있던 Redis 전체 정리' },
    { content: '기존 n개의 Client 를 용도/목적에 맞게 m개의 Client로 분리' },
    { content: 'Storage 부족 현상 해소로 서비스 운영 위협 감소' },
    { content: 'Product 개발시 Redis 사용과 ElastiCache 운영에 대한 정책 수립' },
  ],
};

const yaJoyAPI: IProject.Item = {
  title: '야놀자 Mashup API 개발 및 유지보수',
  startedAt: '2018-02',
  where: WHERE.YA,
  descriptions: [
    { content: 'Aggregation Layer의 Mashup API 개발 및 운영' },
    {
      content: '2019년 숙소 리스트 신규 광고 상품 추가',
      weight: 'MEDIUM',
      descriptions: [
        { content: '신규 광고 상품 추가로 신규 매출 발생에 기여' },
        { content: 'TBD' },
      ],
    },
    {
      content: '2019년 쇼킹특가/핫딜 서비스 런칭',
      weight: 'MEDIUM',
      descriptions: [
        { content: '신규 할인 상품 추가로 추가 매출 발생 및 사용자 구매율 향상' },
        { content: 'TBD' },
      ],
    },
    {
      content: '2019년 해외숙소 예약 서비스 런칭',
      weight: 'MEDIUM',
      descriptions: [
        { content: '해외 OTA 연동으로 해외 숙소 예약 가능하도록 런칭' },
        { content: 'TBD' },
      ],
    },
    {
      content: '2018년 레저 서비스 런칭',
      weight: 'MEDIUM',
      descriptions: [
        { content: '레저 상품 데이터 연동으로 레저 서비스 예약 기능 런칭' },
        {
          content: '(참고자료) 야놀자가 레저를 판매하려고 할 때 벌어지는 일 (by 송요창님)',
          href:
            'https://speakerdeck.com/totuworld/yanoljaga-rejeoreul-panmaeharyeogo-hal-ddae-beoleojineun-il',
        },
        { content: 'TBD' },
      ],
    },
    {
      content: '2018년 국내 숙소 상세 개편 및 유지보수',
      weight: 'MEDIUM',
      descriptions: [
        { content: '2018년 상반기에 국내 숙소 상세(PDP) 리팩토링 및 서비스 개선 완료' },
        { content: 'Redis 활용한 Response Cache 도입 및 리팩토링으로 기존 대비 Latency 90% 감소' },
        { content: '사용자 경험 및 매출 향상 위한 추가 비즈니스 요구사항 개발 및 구조 개선' },
        { content: 'TBD' },
      ],
    },
    {
      content: 'AWS 인프라 유지보수 및 ISMS 인증 작업',
      weight: 'MEDIUM',
      descriptions: [
        { content: '주기적으로 변경 및 강화되는 인프라 정책을 팀 프로젝트에 적용' },
        { content: '팀 내 AWS 사용 구조 개선과 비용 최적화' },
        { content: 'ISMS 인증 획득을 위한 인프라 보안 강화 작업 담당' },
      ],
    },
  ],
};

const plBackend: IProject.Item = {
  title: '플레이팅 백엔드/프론트엔드 서비스 개발',
  startedAt: '2016-10',
  endedAt: '2017-11',
  where: WHERE.PL,
  descriptions: [
    {
      content: 'API Server v1 / v2',
      weight: 'MEDIUM',
      descriptions: [
        { content: '플레이팅 서비스에 사용되는 API 서버 개발' },
        {
          content: '기존 PHP로 작성된 v1 API를 Node.js와 Express.js로 이전 및 기능 추가, 코드 개선',
        },
        { content: 'API v2 부터 TDD, ORM 등 도입' },
        { content: 'AWS EC2, pm2, nginx를 서버 인프라로 사용' },
        { content: 'AWS RDS의 MySQL를 데이터베이스로 사용' },
      ],
    },
    {
      content: 'Socket Server',
      weight: 'MEDIUM',
      descriptions: [
        { content: '주문 관련 백오피스에 사용되는 소켓 서버 개발' },
        { content: 'Node.js와 Socket.io, Express.js를 사용하여 개발' },
        { content: 'AWS EC2 내의 MongoDB를 데이터베이스로 사용' },
      ],
    },
    {
      content: 'ETC',
      weight: 'MEDIUM',
      descriptions: [
        {
          content: 'Admin 서비스 개발',
          descriptions: [
            { content: 'React.js 등을 사용하여 내부 백오피스 툴 개발' },
            { content: 'ERP, 라이더 앱, 서버 모니터링 등 개발' },
            { content: 'Socket Client 통신, 비동기 HTTP 통신 등을 사용' },
          ],
        },
        {
          content: 'ESC/POS Printer Navtive 프로그램 개발',
          descriptions: [
            { content: '플레이팅 자체 주문 확인지와 영수증 출력용 프로그램' },
            { content: 'Node.js와 Electron.js, node-escpos를 사용하여 개발' },
            {
              content: '오픈소스 기여:',
              postHref: 'https://github.com/song940/node-escpos',
            },
          ],
        },
        { content: '백엔드 Batch 서비스 개발' },
        { content: 'Telegram Bot API, CloudWatch Event 사용한 지표 모니터링 서비스 개발' },
        { content: 'Microservice 가격 계산 서버 개발' },
        { content: 'AWS S3, CloudFront 등을 사용한 자체 CDN 구축' },
        { content: 'React Native 사용한 앱 서비스 유지보수' },
      ],
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
  list: [yaNol2020, yaRedis, yaJoyAPI, plBackend, plDelivery, ecBackend, kyToto],
};

export default project;
