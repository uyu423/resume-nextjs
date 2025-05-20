import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요! 배재대학교에 재학 중인 21살 대학생입니다. 새로운 경험을 즐기고, 도전하는 것을 좋아해 다양한 활동에 참여하며 성장하고 있어요. 학교에서는 전공 공부뿐만 아니라 동아리 활동과 아르바이트도 병행하며 사람들과 소통하는 능력을 키워가고 있습니다. 특히 창의적인 아이디어를 실현하는 것에 관심이 많아 디자인, 개발 등 다양한 분야에 도전하고 있습니다. 앞으로도 끊임없이 배우고 발전하는 사람이고 싶습니다.',
    '게임을 단순히 즐기는 것을 넘어, 직접 만들고 싶은 마음에 게임공학과에 진학했고, 지금은 프로그래밍과 디자인 등 다양한 분야를 공부하며 꿈을 키워가고 있습니다. 새로운 경험을 좋아하고 도전하는 걸 즐기는 저는 앞으로도 즐겁게 배우고 성장해나가고 싶습니다. 홈페이지에 방문해주셔서 감사합니다!',
  ],
  sign: 'Bae',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
