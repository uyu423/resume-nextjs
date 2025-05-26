import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요, 끊임없이 도전하고 직접 부딪히며 성장하는 개발자 김주호입니다.',
    '저는 학창 시절부터 수많은 활동을 진행하며 다양한 문제를 해결하고 기술을 실제로 구현하는 경험을 쌓아왔습니다. 백엔드부터 프론트엔드, 앱 개발과 웹 개발까지 영역을 가리지 않고 프로젝트를 주도하며 발전해나가고 있습니다.',
    '거의 모든 팀 프로젝트에서 팀장을 맡아왔으며 기획 단계부터 역할 분담, 일정 관리, 발표까지 전체를 총괄하며 팀의 방향성과 완성도를 올리는 역할에 익숙합니다. 다양한 팀원들과의 협업 경험을 통해 커뮤니케이션 능력과 리더십을 자연스럽게 체득했고, 이를 바탕으로 항상 결과물 이상의 배움을 추구 해왔습니다. 저는 앞으로도 단순히 코드 잘 짜는 개발자가 아니라 팀과 함께 문제를 해결하고 가치를 올리는 프로그래머로 성장하고자 합니다.',
  ],
  sign: 'Juho Kim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
