import { DateTime } from 'luxon';
import { ExperienceItem, ExperiencePosition } from '../../types/experience';
import Util from '../common/Util';
import { useNow } from '../common/useNow';

type PositionWithDates = ExperiencePosition & {
  startedAtDate: DateTime;
  endedAtDate: DateTime | null;
  isCurrent: boolean;
};

function hasEndedAtDate(
  position: PositionWithDates,
): position is PositionWithDates & { endedAtDate: DateTime } {
  return position.endedAtDate !== null;
}

export default function ExperienceRow({ item, index }: { item: ExperienceItem; index: number }) {
  const now = useNow();
  const positionsWithDates: PositionWithDates[] = item.positions.map((position) => ({
    ...position,
    startedAtDate: DateTime.fromFormat(position.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL),
    endedAtDate: position.endedAt
      ? DateTime.fromFormat(position.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL)
      : null,
    isCurrent: !position.endedAt,
  }));

  const sortedPositions = positionsWithDates
    .slice()
    .sort((a, b) => b.startedAtDate.toMillis() - a.startedAtDate.toMillis());

  const minStartedAt =
    DateTime.min(...sortedPositions.map((position) => position.startedAtDate)) ?? DateTime.local();
  const isCurrentlyEmployed = sortedPositions.some((position) => position.isCurrent);

  const endedAtDates = sortedPositions
    .filter(hasEndedAtDate)
    .map((position) => position.endedAtDate);

  let maxEndedAt: DateTime<boolean>;
  if (isCurrentlyEmployed) {
    maxEndedAt = now;
  } else if (endedAtDates.length > 0) {
    maxEndedAt = DateTime.max(...endedAtDates) ?? DateTime.local();
  } else {
    maxEndedAt = DateTime.local();
  }

  const periodTitle = createOverallWorkingPeriod(sortedPositions);
  const hasMultiplePositions = sortedPositions.length > 1;

  return (
    <div className="experience-item">
      {index > 0 && <hr />}
      {/* 최상위: 전체 재직 기간과 회사명 표시 */}
      <div className="split-row">
        <div className="split-left">
          <h4 className="experience-period">{periodTitle}</h4>
        </div>
        <div>
          <h4 className="experience-company-heading">
            <span className={`experience-dot ${isCurrentlyEmployed ? 'is-current' : ''}`} />
            {item.title}{' '}
            <span className="experience-meta">
              {isCurrentlyEmployed && <span className="tag tag--success">재직 중</span>}
              <span className="tag tag--accent">
                {Util.getFormattingDuration(minStartedAt, maxEndedAt)}
              </span>
            </span>
          </h4>
        </div>
      </div>

      {/* 각 Position을 최신 순으로 반복하여 개별 재직 기간과 직책 표시 */}
      {sortedPositions.map((position, posIndex) => (
        <div key={posIndex.toString()} className="split-row experience-position-row">
          <div className="split-left">
            {/* positions가 1개 이상일 때만 Position의 재직 기간 표시 */}
            {hasMultiplePositions && (
              <span className="experience-position-period">
                {createWorkingPeriod(position.startedAtDate, position.endedAtDate)}
              </span>
            )}
          </div>
          <div>
            <i className="experience-position-title">{position.title}</i>
            <ul className="experience-description-list">
              {position.descriptions.map((description, descIndex) => (
                <li key={descIndex.toString()}>{description.content}</li>
              ))}
              {createSkillKeywords(position.skillKeywords)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function createOverallWorkingPeriod(positions: PositionWithDates[]) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT.YYYY_DOT_LL;
  const startedAt = positions[positions.length - 1].startedAtDate;
  const isCurrentlyEmployed = positions.some((position) => position.isCurrent);

  // 재직 중일 때는 종료일 없이 표시
  if (isCurrentlyEmployed) {
    return `${startedAt.toFormat(DATE_FORMAT)} ~`;
  }

  const endedAtDates = positions.filter(hasEndedAtDate).map((position) => position.endedAtDate);

  let endedAt: DateTime<boolean>;
  if (endedAtDates.length > 0) {
    endedAt = DateTime.max(...endedAtDates) ?? DateTime.local();
  } else {
    endedAt = DateTime.local();
  }

  return `${startedAt.toFormat(DATE_FORMAT)} ~ ${endedAt.toFormat(DATE_FORMAT)}`;
}

function createSkillKeywords(skillKeywords?: string[]) {
  if (!skillKeywords) {
    return null;
  }
  return (
    <li>
      <strong>Skill Keywords</strong>
      <div className="experience-keywords">
        {skillKeywords.map((keyword, index) => (
          <span key={index.toString()} className="tag tag--muted">
            {keyword}
          </span>
        ))}
      </div>
    </li>
  );
}

function createWorkingPeriod(startedAt: DateTime, endedAt?: DateTime | null) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT.YYYY_DOT_LL;

  if (!endedAt) {
    return `${startedAt.toFormat(DATE_FORMAT)} ~`;
  }

  return `${startedAt.toFormat(DATE_FORMAT)} ~ ${endedAt.toFormat(DATE_FORMAT)}`;
}
