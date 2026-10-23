import { DateTime, Duration } from 'luxon';

import { CommonSection } from '../common/CommonSection';
import { ShowMoreWrapper } from '../common/ShowMoreWrapper';
import ExperienceRow from './row';
import { ExperiencePayload, ExperienceItem } from '../../types/experience';
import { Section } from '../common/Section';
import Util from '../common/Util';
import { useNow } from '../common/useNow';

type Payload = ExperiencePayload;

export function ExperienceSection({ payload }: { payload: Payload }) {
  return (
    <Section payload={payload}>
      <ExperienceContent payload={payload} />
    </Section>
  );
}

function ExperienceContent({ payload }: { payload: Payload }) {
  const now = useNow();
  return (
    <CommonSection title="EXPERIENCE">
      {!payload.disableTotalPeriod && (
        <div className="split-row experience-summary-row">
          <div className="split-left">
            <span className="experience-summary-label">TOTAL</span>
          </div>
          <div className="experience-total-period">
            <span className="tag tag--muted">
              {getFormattingExperienceTotalDuration(payload, now)}
            </span>
          </div>
        </div>
      )}
      <ShowMoreWrapper showMoreCount={payload.showMoreCount}>
        {payload.list.map((item, index) => (
          <ExperienceRow key={index.toString()} item={item} index={index} />
        ))}
      </ShowMoreWrapper>
    </CommonSection>
  );
}

function getFormattingExperienceTotalDuration(payload: ExperiencePayload, now: DateTime) {
  // 회사(item) 단위로 전체 재직 기간을 계산하여 포지션 간 중복을 방지
  const durations = payload.list.map((item: ExperienceItem) => {
    const startDates = item.positions.map((p) =>
      DateTime.fromFormat(p.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL),
    );
    const endDates = item.positions.map((p) =>
      p.endedAt ? DateTime.fromFormat(p.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL) : now,
    );
    const minStart = DateTime.min(...startDates) ?? DateTime.local();
    const maxEnd = DateTime.max(...endDates) ?? DateTime.local();

    // 햇수 계산을 위해 +1개월 적용 (getFormattingDuration과 동일)
    return maxEnd.plus({ month: 1 }).diff(minStart, ['years', 'months']);
  });

  const totalExperience = durations
    .reduce((prev: Duration, cur: Duration) => prev.plus(cur), Duration.fromMillis(0))
    .shiftTo('years', 'months');

  return totalExperience.toFormat(`총 ${Util.LUXON_DATE_FORMAT.DURATION_KINDNESS}`);
}
