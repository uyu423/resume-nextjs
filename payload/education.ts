import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '메가테라',
      subTitle: '풀스택 개발자 과정 수료',
      startedAt: '2022-08',
      endedAt: '2023-02',
    },
    {
      title: '코드숨',
      subTitle: '프론트엔드 코스 수료',
      startedAt: '2022-04',
      endedAt: '2022-05',
    },
    {
      title: '연세대학교',
      subTitle: '대기과학과 졸업',
      startedAt: '2017-03',
      endedAt: '2021-02',
    },
  ],
};

export default education;
