import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/스티치.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: 'Tux Linux Penguin',
    small: '(Tux)',
  },
  contact: [
    {
      title: '2190002@pcu.ac.kr',
      link: 'mailto:2190002@pcu.ac.kr',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://2190002-source.github.io/resume-nextjs/',
      icon: faGithub,
    },
    {
      link: 'https://www.facebook.com/groups/ubuntu.ko',
      icon: faFacebook,
    },
  ],
  notice: {
    title:
      "The content below is all fictitious and is just a sample from 'https://2190002-source.github.io/resume-nextjs/'.",
    icon: faBell,
  },
};

export default profile;
