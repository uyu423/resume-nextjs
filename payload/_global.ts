import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview_resize.png';
import { IGlobal } from '../component/common/IGlobal';

const title = '(대충 유용우 개발자 Resume 라는 제목)';
const description = '(대충 유용우 개발자 Resume 라는 설명)';

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
          alt: '쿠알라룸푸르가서 찍은 사진.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Yongwoo',
        lastName: 'Yu',
        username: 'luckyyowu',
        gender: 'male',
      },
    },
  },
};
