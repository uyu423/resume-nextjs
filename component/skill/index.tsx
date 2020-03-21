/* eslint-disable import/order */
import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { Style } from '../common/Style';
import { ISkill } from './ISkill';
import SkillRow from './row';
import { EmptyRowCol } from '../common';
// import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Skill = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: ISkill.Payload }>) {
  return (
    <div className="mt-5">
      <EmptyRowCol className="pt-5">
        <Row className="pb-3">
          <Col>
            <h2 style={Style.blue}>
              <span>SKILL</span>
              {/* {createTooltip(payload.tooltip)} */}
            </h2>
          </Col>
        </Row>
        {payload.skills.map((skill, index) => (
          <SkillRow key={index.toString()} skill={skill} />
        ))}
      </EmptyRowCol>
    </div>
  );
}

// function createTooltip(content?: string) {
//   if (!content) {
//     return '';
//   }
//   return (
//     <span>
//       <FontAwesomeIcon icon={faQuestionCircle} id="skill-tooltip" />
//       <Tooltip target="skill-tooltip">{content}</Tooltip>
//     </span>
//   );
// }
