import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '어떤 기술과 환경에서도 주도적으로 목표를 달성해내는 개발자 최지우입니다.',
    '현업에서 다양한 기술을 접한 경험을 바탕으로 새로운 기술이나 환경에 빠르게 적응하여 주어진 업무를 책임감 있게 수행합니다. 업무를 진행하면서 기술적인 부분뿐만 아니라 비즈니스 중요도를 함께 고려하여 업무를 진행하기 위해 노력합니다. 좋은 제품을 만들어 고객의 만족도를 높이는 것을 가장 중요하게 생각하기 때문에 능동적으로 버그 등의 문제를 발견하고 해결하여 더 좋은 서비스를 만들 수 있도록 노력합니다.',
    '열정적으로 해보지 않은 업무에도 도전하며 어떻게 하면 더 좋은 서비스를 만들 수 있을지 고민하며 업무 프로세스 또한 발전시킬 방법을 모색합니다. 이러한 점들을 바탕으로 더 좋은 개발자가 되기 위해 매일 학습하고 노력하고 있습니다.',
  ],
  sign: 'Jiwoo Choi',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
