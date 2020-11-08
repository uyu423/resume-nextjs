import { homepage, version } from '../package.json';

import { IFooter } from '../component/footer/IFooter';
import { dependencies } from '../package-lock.json';

const footer: IFooter.Payload = {
  version,
  github: homepage,
  nextVersion: dependencies.next.version,
  reactVersion: dependencies.react.version,
  bootstrapVersion: dependencies.bootstrap.version,
};

export default footer;
