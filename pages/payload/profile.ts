import Profile from '@/pages/component/profile';

const profile: Profile.IPayload = {
  image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  name: {
    title: '유 용 우',
    small: '(요우)',
  },
  contact: [
    {
      type: 'email',
      title: 'me@yowu.dev',
      link: 'mailto:me@yowu.dev',
      facon: 'fa-envolope',
    },
    {
      type: 'phone',
      title: 'Please contact me by email',
      facon: 'fa-phone',
    },
    {
      type: 'github',
      link: 'https://github.com/uyu423',
      facon: 'fa-github',
    },
    {
      type: 'blog',
      link: 'https://blog.yowu.dev',
      facon: 'fa-rss',
    },
    {
      type: 'facebook',
      link: 'https://fb.com/luckyyowu',
      facon: 'fa-facebook',
    },
  ],
  notice: '휴대전화나 페이스북 메시지 아닌 이메일로 연락 부탁드립니다.',
};

export default profile;
