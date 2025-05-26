import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김주호',
    small: '(juho9072)',
  },
  contact: [
    {
      title: 'juho9072@naver.com',
      link: 'mailto:juho9072@naver.com',
      icon: faEnvelope,
    },
    {
      title: '010-4453-0338',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/juho9072',
      icon: faGithub,
    },
  ],
  notice: {
    title: '빠른 답신이 필요한 경우 전화 또는 문자, 그 외 사항은 메일로 연락 바랍니다.',
    icon: faBell,
  },
};

export default profile;
