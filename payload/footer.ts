import { homepage, version } from '../package.json';

import { IFooter } from '../component/footer/IFooter';
import { packages } from '../package-lock.json';

const footer: IFooter.Payload = {
  version,
  github: homepage,
  nextVersion: packages[''].dependencies.next,
  reactVersion: packages[''].dependencies.react,
  bootstrapVersion: packages[''].dependencies.bootstrap,
};

export default footer;
