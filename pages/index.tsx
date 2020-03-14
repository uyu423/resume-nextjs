import 'bootstrap/dist/css/bootstrap.css';

import Introduce from '../component/introduce';
import Skill from '../component/skill';
import OpenSource from '../component/openSource';
import Experience from '../component/experience';
import Project from '../component/project';
import Presentation from '../component/presentation';
import Education from '../component/education';
import Etc from '../component/etc';
import ButtonBox from '../component/buttonBox';
import Footer from '../component/footer';
import { Container } from 'reactstrap';
import Profile from '../component/profile';
import Payload from '../payload';

function Yosume() {
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

export default Yosume;
