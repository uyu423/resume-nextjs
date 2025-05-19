import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample_tux.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김지혜',
    small: '대학생',
  },
  contact: [
    {
      title: '2261049@pcu.ac.kr',
      link: 'mailto:2261049@pcu.ac.kr',
      icon: faEnvelope,
    },
    {
      title: '010-8474-3540',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/Jiihye421',
      icon: faGithub,
    },
  ],
  notice: {
    title: '이메일로 연락주세요',
    icon: faBell,
  },
};

export default profile;
