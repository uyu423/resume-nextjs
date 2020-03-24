import { IExperience } from '../component/experience/IExperience';

const yanolja = {
  title: '야놀자 (Yanolja)',
  position: 'R&D 그룹 CX 개발실 백엔드 개발자',
  startedAt: '2018-02',
  descriptions: [
    '국내 및 글로벌 숙박/레저 OTA (800명~, R&D 200명~)',
    '숙박/레저 정보 및 예약서비스 제공에 필요한 데이터 모델링 및 RESTful API 개발 ',
    '사용자 Needs 에 맞는 사용성 개선과 신규 비즈니스 로직 구현',
    '레거시 청산 및 기존 비즈니스 로직 유지보수',
    'AWS 인프라 및 NoSQL 데이터베이스 유지보수 및 관리',
  ],
  skillKeywords: [
    'Node.js',
    'TypeScript',
    'express.js',
    'PHP',
    'CodeIgniter',
    'Amazon Web Service',
    'Redis',
    'Mashup API',
    'ISMS',
    'Agile Scrum',
    'Agile Sprint',
    'A/B Test',
  ],
};

const plating = {
  title: '플레이팅 (Plating)',
  position: '개발팀 백엔드 개발자',
  startedAt: '2016-10',
  endedAt: '2017-11',
  descriptions: [
    '요식업 / 푸드테크 스타트업 (15~50명, 개발팀 2~6명)',
    'E-Commerce, 물류 백엔드, 인프라 개발 등',
    'Development Project Management',
  ],
  skillKeywords: [
    'Node.js',
    'express.js',
    'PHP',
    'Laravel',
    'React.js',
    'Redux',
    'MySQL',
    'Amazon Web Service',
    'MongoDB',
    'Socket.io',
    'nginx',
    'Database Design',
    'API Design',
    'Architecture',
    'DDD',
    'TDD',
    'PM',
  ],
};

const ecubelabs = {
  title: '이큐브랩 (Ecube Labs)',
  position: '소프트웨어 개발팀 서버 개발자',
  startedAt: '2015-07',
  endedAt: '2016-02',
  descriptions: [
    'IoT 하드웨어/소프트웨어 스타트업 (15~25, 개발팀 8~10명)',
    "'도시 쓰레기량 관제 소프트웨어' 백엔드 개발",
    '인프라 아키텍팅과 보안 담당',
    'AWS, Agile 등 연구 / 도입',
  ],
  skillKeywords: [
    'PHP',
    'CodeIgniter',
    'Cafe24',
    'AWS',
    'MySQL',
    'Node.js',
    'express.js',
    'Apache',
    'MVC',
    'Security Infomation',
    'Server Engineering',
    'Database Design',
    'Architecture',
  ],
};

const kyny = {
  title: '키니 (KYNY)',
  position: '웹 개발자',
  startedAt: '2014-09',
  endedAt: '2015-03',
  descriptions: [
    '가톨릭대학교 재학생 창업 지원 스타트업 (4~6명, 개발자 4명)',
    "'스포츠 토토 승률 계산 서비스' 웹 개발",
    '사업 방향, 서비스 기획 참여 및 개발 주도',
    'CAREER 보다는 EXPERIENCE',
  ],
  skillKeywords: [
    'PHP',
    'Wordpress',
    'JSP',
    'MariaDB',
    'Apache',
    'Business Strategy',
    'Architecture',
    'Database Design',
  ],
};

const experience: IExperience.Payload = {
  list: [yanolja, plating, ecubelabs, kyny],
};

export default experience;
