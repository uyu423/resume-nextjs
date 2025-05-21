import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요, 끊임없이 도전하고 직접 부딪히며 성장하는 개발자 김주호입니다.',
    'In the world of zeros and ones, my expertise has been instrumental in pioneering advancements in Linux system engineering. My flippers have crafted meticulous kernel enhancements, each aimed at streamlining performance and bolstering security across distributed networks. I am known in the community for my ability to dive deep into complex codebases and emerge with pearls of innovation that drive the collective progress of Linux environments. Advocacy is also a part of my plumage – spreading the word about the virtues of open-source and encouraging the adoption of Linux, from personal desktops to corporate data centers. As a mentor, I have nurtured the growth of young hatchlings into seasoned professionals, contributing to the diversity and vitality of our ecosystem.',
  ],
  sign: 'Tux',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
