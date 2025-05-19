import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/mococo.jpg';

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
    title:
      "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;
