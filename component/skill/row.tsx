import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { ISkill } from './ISkill';
import { Style } from '../common/Style';

export default function SkillRow({ skill }: PropsWithChildren<{ skill: ISkill.Skill }>) {
  return (
    <Row>
      <Col sm={12} md={3} className="text-md-right">
        <h4 style={Style.gray}>{skill.category}</h4>
      </Col>
      <Col sm={12} md={9}>
        {skill.items.map((item) => JSON.stringify(item, null, 2))}
      </Col>
    </Row>
  );
}
