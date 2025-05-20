import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/Me.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '배아현',
    small: '(BaeAHyun)',
  },
  contact: [
    {
      title: 'qodkgus0104@gmail.com',
      link: 'qodkgus0104@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/BaeAhyun',
      icon: faGithub,
    },
    // {
    // link: 'none',
    // icon: faFacebook,
    // },
  ],
  notice: {
    title: '이메일로 문의 주시면 신속히 답변드리겠습니다.',
    icon: faBell,
  },
};

export default profile;
