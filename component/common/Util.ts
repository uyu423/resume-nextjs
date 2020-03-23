import { DateTime } from 'luxon';
import debug from './debug';

enum LUXON_DATE_FORMAT {
  YYYY_LL_DD = 'yyyy-LL-dd',
  YYYY_LL = 'yyyy-LL',
  YYYY_DOT_LL = 'yyyy. LL',
  KINDNESS_FULL = 'DDDD',

  DURATION_KINDNESS = 'y년 M개월',
  DURATION_KINDNESS_ONLY_MONTH = 'M개월',
}

function getFormattingDuration(from: DateTime, to: DateTime = DateTime.local()) {
  const log = debug('Util:getFormattingDuration');

  // 햇수 계산을 위해 month 에 1개월 추가
  const diff = to.plus({ month: 1 }).diff(from);

  log(diff.milliseconds, diff.get('years'));

  // 기간이 1년 미만이면 포맷팅을 변경
  const format =
    // diff.years 가 0으로 계속 찍혀 밀리세컨드로 1년 비교
    diff.milliseconds < 31536000000
      ? LUXON_DATE_FORMAT.DURATION_KINDNESS_ONLY_MONTH
      : LUXON_DATE_FORMAT.DURATION_KINDNESS;

  return diff.toFormat(format);
}

const Util = {
  LUXON_DATE_FORMAT,
  getFormattingDuration,
};

export default Util;
