import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { IRow } from './IRow';
import { Style } from './Style';
import { HrefTargetBlank } from '.';

export function CommonRows({
  index,
  payload,
}: PropsWithChildren<{ payload: IRow.Payload; index: number }>) {
  const { left, right } = payload;

  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <Row>
            <Col md={12}>
              <h4 style={Style.gray}>{left.title}</h4>
            </Col>
            {left.subTitle ? <Col md={12}>{left.subTitle}</Col> : ''}
          </Row>
        </Col>
        <Col sm={12} md={9}>
          <h4>{right.title}</h4>
          <i style={Style.gray}>{right.subTitle}</i>
          <ul className="pt-3">
            {right.descriptions.map((description, descIndex) => {
              return <Description description={description} key={descIndex.toString()} />;
            })}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

function Description({ description }: PropsWithChildren<{ description: IRow.Description }>) {
  const { content, href, postImage, postHref } = description;

  const component = (() => {
    if (href) {
      return (
        <li>
          <HrefTargetBlank url={href} text={content} />
        </li>
      );
    }
    if (postHref && postImage) {
      return (
        <li>
          {content} <HrefTargetBlank url={postHref} text={postHref} />{' '}
          <img src={postImage} alt={postImage} />
        </li>
      );
    }
    if (postHref) {
      return (
        <li>
          {content} <HrefTargetBlank url={postHref} text={postHref} />
        </li>
      );
    }
    if (postImage) {
      return (
        <li>
          {content} <img src={postImage} alt={postImage} />
        </li>
      );
    }
    return <li>{content}</li>;
  })();

  return component;
}
