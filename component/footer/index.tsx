import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { Style } from '../common/Style';
import { HrefTargetBlank, EmptyRowCol } from '../common';
import { IFooter } from './IFooter';

export const Footer = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IFooter.Payload }>) {
  return (
    <Row>
      <Col style={Style.footerCover}>
        <div style={Style.footer} className="text-center">
          <EmptyRowCol>
            <small>
              CSS by <HrefTargetBlank url="https://getbootstrap.com" text="Bootstrap 4" />. Thanks
              for <HrefTargetBlank url="https://blog.outsider.ne.kr/1234" text="Outsider" />
            </small>
          </EmptyRowCol>
          <EmptyRowCol>
            <small>
              v.{`${payload.version} / `}
              <HrefTargetBlank url={`${payload.github}/commits/master`} text="Changelog" />
              {' / '}
              <HrefTargetBlank url={payload.github} text="Github" />
            </small>
          </EmptyRowCol>
          <br />
        </div>
      </Col>
    </Row>
  );
}
