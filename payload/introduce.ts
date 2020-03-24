import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  contents: [
    '웹 백엔드 개발과 스타트업 개발자로서의 다양한 경험이 있습니다. Node.js, PHP, MySQL, Redis, AWS, Git, Linux 등을 사용하여 프로덕션 서비스를 설계, 개발, 운영한 경험이 있습니다. 확장성과 유지 보수성이 높은 백엔드 아키텍처와 패턴을 위해 언제나 고민하고 있습니다.',
    '오픈소스 프로젝트에 관심이 많고, 다양한 방법으로 기여를 하려고 노력하고 있습니다. 이외에도 개인 프로젝트나 개발 커뮤니티 활동 등을 통해 다양한 개발 경험을 즐기고 있습니다. 평소 개발 경험을 공유하거나 기록하는 것을 좋아하여 학부생 시절부터 시작한 개발 블로그에는 350여 개의 기술 포스트를 작성했습니다. 언제나 백엔드 개발의 정점을 찍고 싶다고 생각하고 있으며 다양한 기술을 학습하거나 사용하고 있습니다.',
    '서비스 개발이란 결국 개발과 비즈니스와의 커뮤니케이션이 가장 중요하다고 생각하고 있습니다. 능동적이고 적극적인 커뮤니케이션으로 문제 해결과 비즈니스 발전을 위해 뛰어듭니다. 이러한 점을 바탕으로 더 좋은 개발자로서 성장하기 위해 더 치열하게 학습하고, 경험하고, 노력하고 있습니다.',
  ],
  sign: 'Yu Yongwoo',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
