import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '유원대학교 (구 영동대학교)',
      subTitle: '임베디드소프트웨어 전공 학사 졸업',
      startedAt: '2008-03',
      endedAt: '2015-02',
    },
    {
      title: '상일 고등학교',
      subTitle: '자연계 졸업 (경기도 부천시)',
      startedAt: '2005-03',
      endedAt: '2008-02',
    },
  ],
};

export default education;
