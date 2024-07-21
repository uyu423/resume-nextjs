import { homepage, version } from '../package.json';

import { IFooter } from '../component/footer/IFooter';

const footer: IFooter.Payload = {
  version,
  github: homepage,
};

export default footer;
