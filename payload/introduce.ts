import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa magna, feugiat commodo arcu sed, sagittis sollicitudin tortor. Nullam diam ex, interdum nec lacus vel, ultrices pretium sapien. Proin bibendum non nibh eu aliquet. In sit amet arcu sed nisi tincidunt ultricies. Fusce magna tellus, egestas at pretium quis, rutrum et ante. Phasellus efficitur lectus felis, sed lacinia enim rhoncus ut. Sed id mi vitae neque aliquet porttitor. Fusce dignissim ipsum urna, at finibus lectus sodales ut. Nulla ut purus vestibulum, dapibus tellus consequat, porttitor purus. Nunc egestas tortor ut vehicula mollis.',
    'Integer ut libero eu libero mattis rutrum at at urna. Integer non turpis ante. Suspendisse vestibulum odio id libero facilisis gravida. In ipsum est, pellentesque vestibulum tortor eu, bibendum imperdiet metus. Quisque ornare eget ex ut congue. Nam vel finibus sem. Phasellus id neque nibh. Nullam turpis velit, pharetra vitae mi non, bibendum maximus urna.',
  ],
  sign: 'Love poem',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
