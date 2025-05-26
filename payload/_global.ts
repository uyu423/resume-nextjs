import favicon from '../asset/favicon.ico';
import previewImage from '../asset/mococo.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '김주호_이력서';
const description = '김주호의 프로젝트 기반 포트폴리오 및 이력서입니다.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Lorem',
        lastName: 'ipsum',
        username: 'lorem',
        gender: 'female',
      },
    },
  },
};
