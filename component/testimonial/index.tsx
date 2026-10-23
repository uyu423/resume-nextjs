import { CSSProperties } from 'react';
import { Section } from '../common/Section';
import { CommonSection } from '../common/CommonSection';
import { ShowMoreWrapper } from '../common/ShowMoreWrapper';
import { TestimonialPayload, TestimonialItem } from '../../types/testimonial';

type Payload = TestimonialPayload;

const quoteStyle: CSSProperties = {
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: 1.8,
  color: 'var(--color-text)',
  position: 'relative',
  zIndex: 1,
};

const authorStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '20px',
  gap: '12px',
};

const avatarStyle: CSSProperties = {
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  objectFit: 'cover',
  background: 'var(--color-bg-subtle)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--color-text-secondary)',
  fontWeight: 600,
  fontSize: '1rem',
  flexShrink: 0,
};

export function TestimonialSection({ payload }: { payload: Payload }) {
  return (
    <Section payload={payload}>
      <TestimonialContent payload={payload} />
    </Section>
  );
}

function TestimonialContent({ payload }: { payload: Payload }) {
  return (
    <CommonSection title="TESTIMONIAL">
      <ShowMoreWrapper showMoreCount={payload.showMoreCount} className="card-grid-2">
        {payload.list.map((item, index) => (
          <TestimonialCard key={index.toString()} item={item} />
        ))}
      </ShowMoreWrapper>
    </CommonSection>
  );
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  const initial = item.name.charAt(0);

  return (
    <div className="pullquote">
      <div style={quoteStyle}>{item.quote}</div>
      <div style={authorStyle}>
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            style={{ ...avatarStyle, background: 'none' }}
          />
        ) : (
          <div style={avatarStyle}>{initial}</div>
        )}
        <div>
          <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '0.9rem' }}>
            {item.name}
          </div>
          <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem' }}>
            {item.title}
          </div>
          <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>
            {item.relation}
          </div>
        </div>
      </div>
    </div>
  );
}
