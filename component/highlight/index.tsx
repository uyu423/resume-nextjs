import { Section } from '../common/Section';
import { ShowMoreWrapper } from '../common/ShowMoreWrapper';
import { HighlightPayload, HighlightItem } from '../../types/highlight';

type Payload = HighlightPayload;

export function HighlightSection({ payload }: { payload: Payload }) {
  return (
    <Section payload={payload}>
      <HighlightContent payload={payload} />
    </Section>
  );
}

function HighlightContent({ payload }: { payload: Payload }) {
  return (
    <div className="editorial-section highlight-section">
      <ShowMoreWrapper showMoreCount={payload.showMoreCount} className="card-grid-3">
        {payload.list.map((item, index) => (
          <HighlightCard key={index.toString()} item={item} />
        ))}
      </ShowMoreWrapper>
    </div>
  );
}

function HighlightCard({ item }: { item: HighlightItem }) {
  return (
    <div className="highlight-card">
      <div className="highlight-title">{item.title}</div>
      <div className="highlight-description">{item.description}</div>
      {item.keywords && item.keywords.length > 0 && (
        <div className="highlight-keywords">
          {item.keywords.map((keyword, idx) => (
            <span key={idx.toString()} className="tag tag--muted">
              {keyword}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
