import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/dalya.png';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '권 현 우',
    small: '(달야)',
  },
  contact: [
    {
      title: 'hyanskygg@gmail.com',
      link: 'mailto:hyanskygg@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/Dal-ya',
      icon: faGithub,
    },
    {
      link: 'https://dalya-tech.tistory.com/',
      icon: faRss,
    },
    // {
    //   link: 'https://fb.com/luckyyowu',
    //   icon: faFacebook,
    // },
    // 만약 이용시, 3번 줄데 faFacebook 추가해주어야 함 예) import { faGithub, faFacebook }
  ],
  notice: {
    title: '해당 이력서는 요우님의 오픈소스 이력서 템플릿을 이용해 작성되었습니다.',
    icon: faBell,
  },
};

export default profile;
