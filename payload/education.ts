import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'Code States, Advanced Software Engineering Immersive Program 17th',
      subTitle: '코드스테이츠',
      startedAt: '2019-12',
      endedAt: '2020-04',
    },
    {
      title: '정보처리기사',
      subTitle: '한국산업인력공단',
      startedAt: '2016-07',
      endedAt: '2016-07',
    },
    // {
    //   title: '경일 고등학교',
    //   subTitle: '자연계 졸업 (경상북도 안동시)',
    //   startedAt: '2007-03',
    //   endedAt: '2010-02',
    // },
  ],
};

export default education;
