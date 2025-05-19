import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '배재대학교',
      subTitle: '컴퓨터공학과 재학',
      startedAt: '2022-03',
      // endedAt: '2010-02',
    },
    {
      title: '유성생명과학고등학교',
      subTitle: '졸업',
      startedAt: '2018-03',
      endedAt: '2021-02',
    },
  ],
};

export default education;
