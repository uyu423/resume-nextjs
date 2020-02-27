import Profile from './components/profile';
import Introduce from './components/introduce';
import Skill from './components/skill';
import OpenSource from './components/openSource';
import Experience from './components/experience';
import Project from './components/project';
import Presentation from './components/presentation';
import Education from './components/education';
import Etc from './components/etc';
import ButtonBox from './components/buttonBox';
import Footer from './components/footer';
import { Payload } from './payload';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <Container>
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
