import React, { CSSProperties, ReactNode } from 'react';

import { HrefTargetBlank } from '.';
import { RowDescription, FontWeightType } from '../../types/row';

/** Description Recusion Generator */
export function CommonDescription({
  descriptions,
  option,
  children,
}: {
  descriptions: RowDescription[];
  option?: { padding?: boolean };
  /** 목록 끝에 붙는 `<li>` (예: 키워드 태그 줄) */
  children?: ReactNode;
}) {
  return (
    <>
      {descriptions ? (
        <ul className={option?.padding ? 'description-list--padded' : ''}>
          {descriptions.map((description, descIndex) => {
            return (
              <React.Fragment key={descIndex.toString()}>
                <Description description={description} />
                {description.descriptions ? (
                  <DescriptionRecursion descriptions={description.descriptions} />
                ) : (
                  ''
                )}
              </React.Fragment>
            );
          })}
          {children}
        </ul>
      ) : (
        ''
      )}
    </>
  );
}

// ul 태그 depth 표현을 위한 재귀
function DescriptionRecursion({ descriptions }: { descriptions: RowDescription[] }) {
  return (
    <ul>
      {descriptions.map((description, index) => {
        return (
          <React.Fragment key={index.toString()}>
            <Description description={description} />
            {description.descriptions ? (
              <DescriptionRecursion descriptions={description.descriptions} />
            ) : (
              ''
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
}

function Description({ description }: { description: RowDescription }) {
  const { content, href, postImage, postHref, weight } = description;

  const mainContent = href ? <HrefTargetBlank url={href} text={content} /> : content;

  return (
    <li style={getFontWeight(weight)}>
      {mainContent}
      {postHref && (
        <>
          {' '}
          <HrefTargetBlank url={postHref} text={postHref} />
        </>
      )}
      {postImage && (
        <>
          {' '}
          <img src={postImage} alt={`Badge for ${content}`} />
        </>
      )}
    </li>
  );
}

function getFontWeight(weight?: RowDescription['weight']): CSSProperties {
  if (!weight) {
    // style 에 fontWeight 범벅 되는것을 방지
    return {};
  }
  return {
    fontWeight: fontWeight[weight || 'DEFAULT'],
  };
}

// Pretendard Weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
const fontWeight: Record<FontWeightType, number> = {
  DEFAULT: 300,
  //
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  EXTRA_BOLD: 800,
  BLACK: 900,
};
