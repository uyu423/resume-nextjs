import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '배재대학교',
      subTitle: '소프트웨어공학부 게임공학전공',
      startedAt: '2024-03',
      // endedAt: '2010-02',
    },
    {
      title: '혜성여자고등학교',
      subTitle: '졸업',
      startedAt: '2021-03',
      endedAt: '2024-02',
    },
  ],
};

export default education;
