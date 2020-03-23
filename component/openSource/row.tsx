import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { IOpenSource } from './IOpenSource';
import { Style } from '../common/Style';
import { HrefTargetBlank } from '../common';

export default function OpenSourceRow({
  item,
  index,
}: PropsWithChildren<{ item: IOpenSource.Item; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <h4 style={Style.gray}>{item.title}</h4>
        </Col>
        <Col sm={12} md={9}>
          <ul>
            {item.descriptions.map((description, descIndex) => (
              <Description description={description} key={descIndex.toString()} />
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

function Description({ description }: PropsWithChildren<{ description: IOpenSource.Description }>) {
  const { content, link, postImage } = description;

  const component = (() => {
    if (link) {
      return (
        <li>
          <HrefTargetBlank url={link} text={content} />
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
