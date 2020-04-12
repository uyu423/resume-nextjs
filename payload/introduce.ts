import { IIntroduce } from '../component/introduce/IIntroduce';
// import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요? 신입 웹백엔드 지원자 권현우입니다.',
    '일을 하면서 간단한 파이썬 스크립트를 작성해서 불편했던 문제를 해결한 적이 있었습니다. 그 때 코딩을 통해 문제를 해결할 수 있다는 점이 무척 인상 깊었고 기뻤습니다. 이후 부트캠프를 통해 웹 개발 전반에 관한 지식 습득과 협업력을 기를 수 있었습니다.',
    '작은 일이더라도 문제를 해결할 수 있는 “가치를 만들어내는 프로그래머"라는 비전까지 갖게 되었고, 비전을 실현하기 위해 날마다 성장하는 겸손한 개발자가 되고자 합니다.',
  ],
  sign: 'Dal-ya',
  // sign: packageJson.author.name,
  latestUpdated: '2020-04-12',
  // latestUpdated: lastestUpdatedAt,
};

export default introduce;
