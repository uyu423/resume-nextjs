import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: true,

  list: [
    {
      title: 'Lorem ipsum',
      subTitle: 'consectetur adipiscing elit',
      at: '2017-10',
      descriptions: [
        {
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          content: 'Slideshare:',
          postHref: 'https://www.slideshare.net//',
        },
      ],
    },
  ],
};

export default presentation;
