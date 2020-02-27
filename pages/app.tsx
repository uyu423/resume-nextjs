import Profile from './component/profile';
import Introduce from './component/introduce';
import Skill from './component/skill';
import OpenSource from './component/openSource';
import Experience from './component/experience';
import Project from './component/project';
import Presentation from './component/presentation';
import Education from './component/education';
import Etc from './component/etc';
import ButtonBox from './component/buttonBox';
import Footer from './component/footer';
import { Payload } from './payload';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <Container>
      <p>App</p>
      <Profile.Component payload={Payload.profile} />
      <Introduce />
      <Skill />
      <OpenSource />
      <Experience />
      <Project />
      <Presentation />
      <Education />
      <Etc />
      <ButtonBox />
      <Footer />
    </Container>
  );
}
