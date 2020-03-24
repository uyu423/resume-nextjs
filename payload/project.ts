import { IProject } from '../component/project/IProject';

const WHERE = {
  YA: '야놀자 (Yanolja)',
  PL: '플레이팅 (Plating)',
  EC: '이큐브랩 (Ecube Labs)',
  KY: '키니 (KYNY)',
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
  title: '국내 숙소 상세 개편',
  startedAt: '2018-03',
  endedAt: '2018-05',
  where: WHERE.YA,
  descriptions: [
    {
      content: 'TBD',
    },
  ],
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
    {
      content: 'TBD',
    },
  ],
};
const plDelivery: IProject.Item = {
  title: '플레이팅 새벽 배송 서비스 런칭',
  startedAt: '2017-03',
  endedAt: '2017-05',
  where: WHERE.PL,
  descriptions: [
    {
      content: 'TBD',
    },
  ],
};
const ecBackend: IProject.Item = {
  title: '클릭시티네트웍스 백엔드 개발',
  startedAt: '2015-07',
  endedAt: '2016-02',
  where: WHERE.EC,
  descriptions: [
    {
      content: 'TBD',
    },
  ],
};
const kyToto: IProject.Item = {
  title: '스포츠 토토 승률 계산 서비스 개발',
  startedAt: '2014-09',
  endedAt: '2015-03',
  where: WHERE.KY,
  descriptions: [
    {
      content: 'TBD',
    },
  ],
};

const project: IProject.Payload = {
  list: [
    yaHotDeal,
    yaAwsIsms,
    yaGlobal,
    yaLeisure,
    yaPlaceDetail,
    yaPlaceDetail,
    plBackend,
    plEscPos,
    plDelivery,
    ecBackend,
    kyToto,
  ],
};

export default project;
