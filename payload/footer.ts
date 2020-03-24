import { IFooter } from '../component/footer/IFooter';
import { version, homepage } from '../package.json';

const footer: IFooter.Payload = {
  version,
  github: homepage,
};

export default footer;
