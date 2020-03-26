import { IFooter } from '../component/footer/IFooter';
import { version, homepage } from '../package.json';
import { dependencies } from '../package-lock.json';

const footer: IFooter.Payload = {
  version,
  github: homepage,
  nextVersion: dependencies.next.version,
  bootstrapVersion: dependencies.bootstrap.version,
};

export default footer;
