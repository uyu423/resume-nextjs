import { PropsWithChildren } from 'react';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { IArticle } from './IArticle';
import { EmptyRowCol } from '../common';
import { CommonSection } from '../common/CommonSection';
import { CommonDescription } from '../common/CommonDescription';
import Util from '../common/Util';

type Payload = IArticle.Payload;

export const Article = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="ARTICLE">
      <ArticleRow payload={payload} />
    </CommonSection>
  );
}

function ArticleRow({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const log = Util.debug('ArticleRow');

  log(payload);

  return (
    <EmptyRowCol>
      <CommonDescription descriptions={payload.list} />
    </EmptyRowCol>
  );
}
