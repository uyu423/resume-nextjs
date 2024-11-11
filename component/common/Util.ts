import { DateTime } from 'luxon';
import _debug from 'debug';

enum LUXON_DATE_FORMAT {
  YYYY_LL_DD = 'yyyy-LL-dd',
  YYYY_LL = 'yyyy-LL',
  YYYY_DOT_LL = 'yyyy. LL',
  YYYY_DOT_LL_DOT_DD = 'yyyy. LL. dd',
  KINDNESS_FULL = 'DDDD',

  DURATION_KINDNESS = 'y년 M개월',
  DURATION_KINDNESS_ONLY_MONTH = 'M개월',
  DURATION_KINDNESS_ONLY_YEAR = 'y년',
}

function getFormattingDuration(from: DateTime, to: DateTime = DateTime.local()) {
  const log = debug('Util:getFormattingDuration');

  // 햇수 계산을 위해 month에 1개월 추가
  const diff = to.plus({ month: 1 }).diff(from, ['years', 'months']);

  log(diff.milliseconds, diff.get('years'), diff.get('months'));

  // 기간 포맷 결정
  let format;
  if (diff.years > 0 && diff.months === 0) {
    format = LUXON_DATE_FORMAT.DURATION_KINDNESS_ONLY_YEAR;
  } else if (diff.years === 0 && diff.months > 0) {
    // 1년 미만이면 개월만 표시
    format = LUXON_DATE_FORMAT.DURATION_KINDNESS_ONLY_MONTH;
  } else {
    format = LUXON_DATE_FORMAT.DURATION_KINDNESS;
  }

  return diff.toFormat(format);
}

function debug(channel: string) {
  return _debug(`yosume:${channel}`);
}

const Util = {
  LUXON_DATE_FORMAT,
  getFormattingDuration,
  debug,
};

export default Util;
