import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '2017년 회고',
      subTitle: 'QA -> 개발자 전직 후기',
      at: '2017-12',
      descriptions: [
        {
          content: '직장을 그만두고 1년간 공부하여 개발자로 취업한 후기',
        },
        {
          content: 'Blog',
          postHref: 'https://bit.ly/3eh2qFZ',
        },
      ],
    },
  ],
};

export default presentation;
