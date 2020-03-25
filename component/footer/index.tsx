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
        <div style={Style.footer} className="text-center mt-2">
          <EmptyRowCol>
            <small>
              CSS by <HrefTargetBlank url="https://getbootstrap.com" text="Bootstrap 4" />. Thanks
              for <HrefTargetBlank url="https://blog.outsider.ne.kr/1234" text="Outsider" />
            </small>
          </EmptyRowCol>
          <EmptyRowCol>
            <small>
              v.{`${payload.version} / `}
              {/* Changelog 는 본인의 github 주소를 넣는다. */}
              <HrefTargetBlank url={`${payload.github}/commits/master`} text="Changelog" />
              {' / '}
              {/* Github 주소는 origin repository 의 주소를 넣는다. */}
              <HrefTargetBlank url="https://github.com/uyu423/resume-nextjs" text="Github" />
            </small>
          </EmptyRowCol>
          <br />
        </div>
      </Col>
    </Row>
  );
}
