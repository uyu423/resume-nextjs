import favicon from '../asset/favicon.ico';
import profileImage from '../asset/profile.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'RESUME';
const description = 'Joshua\'s Resume';

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
          url: profileImage,
          width: 800,
          height: 600,
          alt: 'profile.jpg',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Jaegil',
        lastName: 'Choi',
        username: 'Joshua',
        gender: 'male',
      },
    },
  },
};
