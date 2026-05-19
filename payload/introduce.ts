import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: ['대한민국 개발자들 지금까지 뭐했노!', ''],
  sign: 'Unji',
  // sign: packageJson.author.name,
  // latestUpdated: '2009-05-23',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
