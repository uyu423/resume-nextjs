import Profile from './component/profile';
import Introduce from './component/introduce';
import Skill from './component/skill';
import OpenSource from './component/openSource';
import Experience from './component/experience';
import Project from './component/project';
import Presentation from './component/presentation';
import Education from './education';
import Etc from './component/etc';
import ButtonBox from './component/buttonBox';
import Footer from './component/footer';

export default function App() {
  return (
    <div>
      <p>App</p>
      <Profile />
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
    </div>
  );
}
