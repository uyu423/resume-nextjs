import { IProject } from '../component/project/IProject';

const WHERE = {
  SO: '쏘카 (SOCAR)',
  FT: '푸드테크 (Foodtech)',
  NES: 'NHN Ent.Service',
};

const socarAccident: IProject.Item = {
  title: '쏘카 사고관리 시스템 & 공업사 시스템 개편',
  startedAt: '2020-02',
  where: WHERE.SO,
  descriptions: [
    {
      content:
        '기존 PHP 레거시 기반의 사고관리 시스템을 Kotlin + Spring Boot + gRPC 기반의 MSA로 개편',
    },
    { content: '기획 리뷰 및 요구사항 구체화, 개발 방향성 협의' },
    { content: '사고차량조치 페이지 개발 및 공업사 시스템 모바일웹 개발 (현재 진행중)' },
  ],
};

const socarNotification: IProject.Item = {
  title: 'Socar-Notification 서비스 (가제) 개발',
  startedAt: '2019-09',
  endedAt: '2019-12',
  where: WHERE.SO,
  descriptions: [
    { content: 'SMS, 알림톡, Mail 발송 서비스를 통합하여 관리하기 위한 MSA Service 개발' },
    { content: '각각의 Product 서비스에서 따로 구현하여 사용하고 있던 발송 로직을 MSA로 분리' },
    { content: 'Spring Cloud Zuul을 사용하여 API Gateway 구현' },
    {
      content:
        '담당 업무 : 메일 서비스 구현 및 API Gateway의 응답속도 최적화, GCP Stackdriver를 활용한 로그 수집 구축',
    },
  ],
};

const socarMonitoring: IProject.Item = {
  title: '쏘카 모니터링 TF',
  startedAt: '2019-01',
  endedAt: '2019-06',
  where: WHERE.SO,
  descriptions: [
    { content: '전체 서버의 로그 통합 수집 환경 구축' },
    {
      content: 'Fluentd + GCP Stackdriver를 활용한 로그 수집 환경 구축',
      weight: 'MEDIUM',
      descriptions: [
        {
          content:
            'Fluentd와 GCP의 Stackdriver를 활용하여, 한 곳의 페이지에서 모든 서버의 로그들을 조회하고 쉽게 검색할 수 있도록 구축',
        },
        {
          content:
            '각 서버의 로깅 실태를 점검하고 미흡한 서버들이 모니터링에 필요한 로그를 남길 수 있도록 작업',
        },
        {
          content:
            '각 서버에 직접 연결하여 로그를 확인해야했던 기존의 환경을 전면 개선하는데 기여함 (TF 메인 포지션)',
        },
      ],
    },
    {
      content: '모니터링을 위한 Metric 설정 및 교육용 매뉴얼 작성',
    },
  ],
};

const socarOperation: IProject.Item = {
  title: '쏘카 레거시 서비스 & 백오피스 개발 및 유지보수, 각종 운영',
  startedAt: '2019-01',
  where: WHERE.SO,
  descriptions: [
    { content: '개발 및 운영, 약간의 DevOps 업무' },
    {
      content: '법인 비즈니스 신규 상품 "리저브" 런칭',
      weight: 'MEDIUM',
      descriptions: [
        { content: '기업용 전용차량 카셰어링 서비스 상품의 백오피스 관리 페이지 개발' },
        { content: '법인 신규 상품 추가로 신규 매출 발생에 기여' },
      ],
    },
    {
      content: '쿠폰북 추가 정책 기능 개발 작업',
      weight: 'MEDIUM',
      descriptions: [
        {
          content:
            '기존에 브레이즈(앱보이)로 제한적으로 처리하던 로직을 백오피스에서 간단한 설정으로 사용할 수 있도록 개발',
        },
        {
          content:
            '여름 성수기 마케팅에서 적극적으로 사용되어 매출 증가에 기여 (배포 이후 등록된 쿠폰북 항목 중 약 15% 정도의 항목에 추가정책 기능 적용)',
        },
      ],
    },
    {
      content: '압수수색영장 관련 추출 업무 자동화 및 매뉴얼 작성',
      weight: 'MEDIUM',
      descriptions: [
        {
          content:
            'Shell Script를 활용하여 기존 2~3시간 소요되던 위치정보 관련 로그 추출 업무를 20분 미만으로 단축',
        },
      ],
    },
    {
      content: 'Sentry를 활용한 Major / Minor 오류 해결',
      weight: 'MEDIUM',
      descriptions: [
        {
          content:
            'Sentry에 등록되어 있던 100여건 이상의 쏘카 백오피스 이슈를 1년간 지속적으로 조치 작업',
        },
        {
          content:
            'Slack 로그 채널의 오류 메시지 일일 발생건수 50~150건 -> 0~5건으로 감소 효과를 거두는데 기여',
        },
      ],
    },
    {
      content: '슬로우 쿼리 제거 및 키워드 검색 기능 강화',
      weight: 'MEDIUM',
      descriptions: [
        {
          content:
            'ElasticSearch를 활용하여 성능 저하를 유발하는 일부 키워드 Full-Text 검색 기능 최적화',
        },
        { content: '백오피스 레거시 및 배치 프로젝트의 슬로우 쿼리 40건 이상 개선 및 코드 개선' },
      ],
    },
    {
      content: '가비아 -> AWS 인프라 이전작업 및 ISMS-P 인증 작업',
      weight: 'MEDIUM',
      descriptions: [
        { content: '기존 가비아 IDC에서 운영되던 백오피스 인프라 환경을 AWS로 이전' },
        { content: 'ISMS-P 인증 획득을 위한 백오피스 보안 강화 작업 담당' },
        { content: '쏘카의 ISMS-P 인증 획득에 기여 (ISMS-P-KISA-2019-011)' },
      ],
    },
  ],
};

const foodtech: IProject.Item = {
  title: '푸드테크 API 서버 개발 및 운영',
  startedAt: '2018-01',
  endedAt: '2018-12',
  where: WHERE.FT,
  descriptions: [
    {
      content: '배달대행 중개서버 (푸드테크 POS -> 배달대행 업체 서버)',
      weight: 'MEDIUM',
      descriptions: [
        { content: '푸드테크 POS에 사용되는 배달대행 접수 기능을 위한 중개서버 개발 및 운영' },
        {
          content: '기존 Netty + Spring 4 + HttpClient로 되어있는 서버를 지속적으로 개선',
        },
        {
          content: '소켓통신으로만 요청을 받을 수 있었던 서버를 HTTP 요청도 받을 수 있도록 개선',
        },
        {
          content:
            '푸드테크 신규 프로젝트였던 주문접수앱에서 별도의 API 서버 개발 없이 중개서버의 기능을 사용할 수 있도록 하는데 기여함',
        },
      ],
    },
    {
      content: '배달대행 중개서버 연동 개발',
      weight: 'MEDIUM',
      descriptions: [
        { content: '푸드테크 POS에서 B2B 제휴 업체에 배달대행 접수를 할 수 있도록 연동 개발' },
        {
          content:
            '가맹점이 바로고, 메쉬코리아(부릉), 달리고, 생각대로, 비욘드아이앤씨, 만나서비스, 제트콜 등 유명 배달대행 업체에 배달 요청을 접수할 수 있도록 업체간 API 연동 작업',
        },
        {
          content: '다양한 B2B 개발 / 커뮤니케이션 경험을 쌓을 수 있었음',
        },
      ],
    },
    {
      content: '배달대행 실시간 현황 전달 서버 (배달대행 업체 -> 푸드테크 POS)',
      weight: 'MEDIUM',
      descriptions: [
        { content: 'Servlet 기반의 API 서버 운영' },
        {
          content:
            '기존 Java6 기반의 레거시 코드를 Java8 베이스로 개편하여, 신규 제휴 업체 연동개발에 소요되는 시간을 40% 단축',
        },
      ],
    },
    {
      content: 'ETC',
      weight: 'MEDIUM',
      descriptions: [
        {
          content: '사내 API서버를 위한 주소정제 API서버 개발',
          descriptions: [
            {
              content:
                'POS 프로그램에서 사내 API 서비스로 보내는 지번/도로명 주소를 네이버/카카오/행자부 API를 활용하여 정제할 수 있도록 서버 개발',
            },
            { content: 'Java + Spring Boot + MySQL + Mybatis 사용' },
          ],
        },
        {
          content: '사내 서비스를 위한 050 안심번호 매핑 / 해지 중개서버 개발',
          descriptions: [
            {
              content:
                '외부 050 안심번호 매핑서버에 고객의 전화번호를 매핑하고 해지할 수 있도록 중개 API서버 개발',
            },
            { content: 'Reactor-Netty를 사용하여 간결하게 비동기 소켓통신 서버를 구현함' },
          ],
        },
        {
          content:
            'jython + nGrinder를 활용한 사내 서비스 성능테스트 코드 작성 및 성능 부하테스트 진행',
        },
      ],
    },
  ],
};

const project: IProject.Payload = {
  disable: false,
  list: [socarAccident, socarNotification, socarMonitoring, socarOperation, foodtech],
};

export default project;
