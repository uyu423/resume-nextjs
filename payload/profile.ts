import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '최재길',
    small: '(Joshua)',
  },
  contact: [
    {
      title: 'jgchoi.qa@gmail.com',
      link: 'mailto:jgchoi.qa@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/joshua-qa',
      icon: faGithub,
    },
    {
      link: 'https://blog.devjoshua.me',
      icon: faRss,
    },
    {
      link: 'https://www.linkedin.com/in/jaegil-choi-b1049817a/',
      icon: faLinkedin,
    },
  ],
  notice: {
    title: '연락은 이메일로 부탁드립니다 :)',
    icon: faBell,
  },
};

export default profile;
