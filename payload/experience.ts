import { IExperience } from '../component/experience/IExperience';

const socar = {
  title: '쏘카 (SOCAR)',
  position: 'R&D 본부 테크컨버전스팀 백엔드 개발자',
  startedAt: '2019-01',
  descriptions: [
    '국내 1위 카셰어링 서비스 업체 (350명~, CTO 산하 80명~)',
    '회원수 580만 이상 / 누적예약 1,000만 이상 / 차량 수 12,000대 이상',
    'PHP + Codeigniter 기반의 쏘카 메인 백오피스 서비스 운영, 유지보수 및 신규 비즈니스 로직 개발',
    '레거시 제거 및 고도화를 목적으로 한 신규 프로젝트 개발',
    'SMS, 알림톡, Mail 발송 서비스를 통합하여 관리하기 위한 Socar-Notification (가제) MSA Service 개발',
    'ISMS-P 심사 대응, 가비아 인프라 및 AWS 인프라에서의 로그 수집 환경 구축 및 관리',
  ],
  skillKeywords: [
    'Java',
    'Kotlin',
    'Spring Boot',
    'PHP',
    'Codeigniter',
    'MySQL',
    'AWS SES',
    'Fluentd',
    'GCP Stackdriver',
    'Buddy',
    'Ubuntu',
    'Memcached',
    'RabbitMQ',
    'Docker',
    'Kubernetes',
    'ISMS-P',
  ],
};

const foodtech = {
  title: '주식회사 푸드테크 (Foodtech)',
  position: '플랫폼팀 백엔드 개발자',
  startedAt: '2018-01',
  endedAt: '2018-12',
  descriptions: [
    '푸드테크 스타트업 (현재 우아한형제들에 인수됨)',
    'POS 프로그램과 연동되는 배달대행 중개 서버 운영 및 연동개발',
    '배달대행 플랫폼 두바퀴콜의 운영 및 유지보수',
  ],
  skillKeywords: [
    'Java',
    'Spring Boot',
    'Servlet',
    'Netty',
    'Naver Cloud',
    'jQuery',
    'Oracle',
    'MySQL',
    'nGrinder',
  ],
};

const nhnentService = {
  title: '엔에이치엔 서비스 (구 NHN Ent. Service)',
  position: 'PAYCO, O2O Service QA',
  startedAt: '2015-02',
  endedAt: '2016-09',
  descriptions: [
    '테스트운영실 테스트3팀 소속',
    '간편결제 서비스 PAYCO의 PC / 모바일웹, 회원, 빌링, 파트너센터 QA 담당',
    '교육 서비스 유니원 (현 아이엠스쿨) QA 담당',
    '성균관대학교 / 인덕대학교 모바일 학생증 및 O2O 서비스 토스트앳의 QA 담당',
    'AutoIt을 활용한 테스팅 도구 개발, Charles Proxy와 Fiddler를 활용한 API 디버깅 및 이슈 리포트',
    'Selenium + TestNG + Jenkins를 활용한 테스트 자동화 구축 및 사내 발표',
  ],
  skillKeywords: [
    'Selenium',
    'Jenkins',
    'TestNG',
    'AutoIt',
    'Charles Proxy',
    'Fiddler',
    'JIRA',
    'Dooray',
  ],
};

const experience: IExperience.Payload = {
  disable: false,
  list: [socar, foodtech, nhnentService],
};

export default experience;
