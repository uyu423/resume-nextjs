import { PropsWithChildren } from 'react';

export function CommonSection({ title, children }: PropsWithChildren<{ title: string }>) {
  const sectionId = `section-${title.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <section className="editorial-section" aria-labelledby={sectionId}>
      <h2 id={sectionId} className="section-heading">
        {title}
      </h2>
      {children}
    </section>
  );
}
