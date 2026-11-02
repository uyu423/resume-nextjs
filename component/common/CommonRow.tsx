import { RowPayload } from '../../types/row';
import { CommonDescription } from './CommonDescription';
import { SkillKeywords } from './SkillKeywords';

export function CommonRows({ index, payload }: { payload: RowPayload; index: number }) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.subTitle);

  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <div className="split-row">
        <div className="split-left">
          <h4 className="experience-period">{left.title}</h4>
          {left.subTitle ? <div>{left.subTitle}</div> : ''}
        </div>
        <div>
          {right.title ? <h4>{right.title}</h4> : ''}
          {right.subTitle ? <i className="experience-position-title">{right.subTitle}</i> : ''}
          {right.descriptions ? (
            <CommonDescription
              descriptions={right.descriptions}
              option={{ padding: isNeedDescriptionPadding }}
            >
              <SkillKeywords keywords={right.skillKeywords} />
            </CommonDescription>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}
