import { IOpenSource } from '../component/openSource/IOpenSource';

const tweetdeckPlayer: IOpenSource.Item = {
  title: 'tweetdeck-player',
  descriptions: [
    { content: 'Electron 기반의 Twitter 3rd Party Client' },
    { content: 'Contributor' },
    {
      content: 'https://github.com/sokcuri/TweetDeckPlayer',
      href: 'https://github.com/sokcuri/TweetDeckPlayer',
    },
    {
      content: 'Issue Report (6건) 및 약간의 Pull Request (2건)',
    },
    {
      content: 'Github Stars: ',
      postImage: 'https://img.shields.io/github/stars/sokcuri/TweetDeckPlayer.svg?style=popout',
    },
  ],
};

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [tweetdeckPlayer],
};

export default openSource;
