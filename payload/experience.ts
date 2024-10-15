import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  sectionId: 'experience',
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Linux Foundation',
      position: 'System Engineer',
      startedAt: '1996-02',
      descriptions: [
        'Steering Kernel patching and updates for various distributions',
        'Automating deployment and integration processes for Linux servers',
        'Spearheading initiatives to enhance Linux kernel security',
        'Collaborating with global developers to coordinate code contributions',
      ],
      skillKeywords: ['C', 'Linux', 'Kernel', 'Security', ' Automation'],
    },
    {
      title: 'Open Source Community',
      position: 'System Advocate and Developer',
      startedAt: '2010-06',
      endedAt: '2018-01',
      descriptions: [
        'Promoted the use and development of Linux globally.',
        'Developed automated scripts to streamline system configuration.',
        'Facilitated live patching systems, reducing downtime.',
      ],
      skillKeywords: ['Open Source', 'Linux', 'AWS', 'RDBMS'],
    },
  ],
};

export default experience;
