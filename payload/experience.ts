import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '온라인 수업 강의 보조',
      positions: [
        {
          title: 'AI이해및활용 조교',
          startedAt: '2024-03',
          endedAt: '2025-06',
          descriptions: [
            'Steering Kernel patching and updates for various distributions',
            'Automating deployment and integration processes for Linux servers',
            'Spearheading initiatives to enhance Linux kernel security',
            'Collaborating with global developers to coordinate code contributions',
          ],
          skillKeywords: ['C', 'Linux', 'Kernel', 'Security', 'Automation'],
        },
        {
          title: '오픈소스SW 조교',
          startedAt: '1996-02',
          endedAt: '1996-05',
          descriptions: [
            'Assisted senior engineers in maintaining and updating kernel patches for Linux distributions',
            'Supported deployment and integration tasks for Linux server environments',
            'Conducted research on Linux kernel security practices and presented findings to the team',
          ],
          skillKeywords: ['C', 'Linux', 'Kernel', 'Support', 'Research'],
        },
      ],
    },
    {
      title: '사회리더대학생멘토링',
      positions: [
        {
          title: '리더십 분야',
          startedAt: '2025-03',
          endedAt: '2025-11',
          descriptions: [
            '사회리더 대학생 멘토링은 대기업 CEO와 석학, 사회 각 분야의 리더 등 다양한 성공경험과 전문지식을 겸비한 사회지도층 멘토의 지혜를 대학생 멘티에게 전달하여 리더십과 섬김 정신을 함양한 인재로 육성하는 프로그램이다.',
          ],
        },
      ],
    },
  ],
};

export default experience;
