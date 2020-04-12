import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'Foo University',
      subTitle: 'Bar Major Bachelor',
      startedAt: '2010-03',
      endedAt: '2016-08',
    },
    {
      title: 'Foo High School',
      subTitle: 'Graduated',
      startedAt: '2007-03',
      endedAt: '2010-02',
    },
  ],
};

export default education;
