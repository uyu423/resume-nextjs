import { DateTime } from 'luxon';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IntroducePayload } from '../../types/introduce';
import { Section } from '../common/Section';
import { useNow } from '../common/useNow';

type Payload = IntroducePayload;

export function IntroduceSection({ payload }: { payload: Payload }) {
  return (
    <Section payload={payload}>
      <IntroduceContent payload={payload} />
    </Section>
  );
}

function IntroduceContent({ payload }: { payload: Payload }) {
  const now = useNow();
  const latestUpdated = DateTime.fromFormat(
    payload.latestUpdated,
    Util.LUXON_DATE_FORMAT.YYYY_LL_DD,
  );
  const latestUpdatedByNow = Math.floor(now.diff(latestUpdated).milliseconds / 1000 / 60 / 60 / 24);

  const sectionId = 'section-introduce';

  return (
    <section className="editorial-section" aria-labelledby={sectionId}>
      <div className="split-row">
        <div className="split-left">
          <h2 id={sectionId} className="section-heading">
            INTRODUCE
          </h2>
        </div>
        <div>
          {payload.contents.map((content, index) => (
            <p key={index.toString()}>{content}</p>
          ))}
          <p className="text-end">
            <small>Latest Updated</small>{' '}
            <span className="tag tag--muted">
              {`${latestUpdated.toFormat(
                Util.LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD,
              )} (D+${latestUpdatedByNow})`}
            </span>
          </p>
          <p className="text-end" style={Style.sign}>
            {payload.sign}
          </p>
        </div>
      </div>
    </section>
  );
}
