import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: true,

  list: [
    {
      title: '"Embracing Linux in the Age of Cloud Computing"',
      subTitle: 'Keynote Speaker at the Open Source Summit',
      at: '2017-10',
      descriptions: [
        {
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          content: 'Slideshare:',
          postHref: 'https://www.slideshare.net/',
        },
      ],
    },
  ],
};

export default presentation;
