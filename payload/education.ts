import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  sectionId: 'education',
  disable: false,

  list: [
    {
      title: 'University of Open Source',
      subTitle: 'PhD in System Engineering (Honorary)',
      startedAt: '1991-03',
      // endedAt: '2010-02',
    },
    {
      title: 'Antarctica High School',
      subTitle: 'Graduated',
      startedAt: '1989-03',
      endedAt: '1991-02',
    },
  ],
};

export default education;
