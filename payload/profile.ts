import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
//import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/Me.jpg';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
    //{
      //link: 'none',
      //icon: faFacebook,
    //},
  ],
  notice: {
    title:
      "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
    icon: faBell,
  },
};

export default profile;
