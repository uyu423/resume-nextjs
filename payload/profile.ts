import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/Local_Strong_Developer.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '동네 힘쌘 개발자',
    small: '(Fearless Dev)',
  },
  contact: [
    {
      title: 'unji0523@rockowl.co.kr',
      link: 'mailto:tux@linux.org',
      icon: faEnvelope,
    },
    {
      title: 'Please contact NIS basement',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/unji0523/resume-nextjs',
      icon: faGithub,
    },
    {
      link: 'https://www.unji.com/',
      icon: faFacebook,
    },
  ],
  notice: {
    title: '우흥~',
    icon: faBell,
  },
};

export default profile;
