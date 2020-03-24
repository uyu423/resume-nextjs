import { Container } from 'reactstrap';

import { Introduce } from '../component/introduce';
import { Skill } from '../component/skill';
import { OpenSource } from '../component/openSource';
import { Experience } from '../component/experience';
import { Project } from '../component/project';
import { Presentation } from '../component/presentation';
import { Education } from '../component/education';
import { Etc } from '../component/etc';
// import ButtonBox from '../component/buttonBox';
import { Footer } from '../component/footer';
import { Profile } from '../component/profile';
import Payload from '../payload';
import { Style } from '../component/common/Style';

function Yosume() {
  return (
    <Container style={Style.global}>
      <Profile.Component payload={Payload.profile} />
      <Introduce.Component payload={Payload.introduce} />
      <Skill.Component payload={Payload.skill} />
      <OpenSource.Component payload={Payload.openSource} />
      <Experience.Component payload={Payload.experience} />
      <Project.Component payload={Payload.project} />
      <Presentation.Component payload={Payload.presentation} />
      <Education.Component payload={Payload.education} />
      <Etc.Component payload={Payload.etc} />
      {/* <ButtonBox /> */}
      <Footer.Component payload={Payload.footer} />
    </Container>
  );
}

export default Yosume;
