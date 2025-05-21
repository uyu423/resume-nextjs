import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    // {
    //  title: 'Linux Foundation',
    //  positions: [
    //    {
    //      title: 'System Engineer',
    //      startedAt: '1996-05',
    //      descriptions: [
    //        'Steering Kernel patching and updates for various distributions',
    //       'Automating deployment and integration processes for Linux servers',
    //        'Spearheading initiatives to enhance Linux kernel security',
    //        'Collaborating with global developers to coordinate code contributions',
    //      ],
    //      skillKeywords: ['C', 'Linux', 'Kernel', 'Security', 'Automation'],
    //    },
    //  ],
    // },
    {
      title: '(주)투비유니콘',
      positions: [
        {
          title: '웹사이트 관리자',
          startedAt: '2023-01',
          endedAt: '2025-08',
          descriptions: [
            '스쿨로직 홈페이지의 이슈 업데이트',
            '뉴스래터 콘텐츠 제작 및 디자인, 발송 업무',
          ],
          skillKeywords: ['phpstorm', 'JAVA', 'HTML', 'PhotoShop'],
        },
      ],
    },
  ],
};

export default experience;
