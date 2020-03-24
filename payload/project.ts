import { IProject } from '../component/project/IProject';

const something: IProject.Item = {
  title: 'Something',
  startedAt: '2019-01',
  endedAt: '2019-03',
  where: 'Yanolja',
  descriptions: [
    {
      content: 'whoa',
    },
  ],
};

const foobar: IProject.Item = {
  title: 'Foobar',
  startedAt: '2019-01',
  endedAt: '2019-03',
  where: 'Yanolja',
  descriptions: [
    {
      content: 'Yanolja Link: ',
      postHref: 'https://yanolja.com',
    },
  ],
};

const project: IProject.Payload = {
  list: [something, foobar],
};

export default project;
