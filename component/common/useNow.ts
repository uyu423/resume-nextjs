import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

/**
 * 정적 HTML은 build 시점 기준으로 렌더링된다.
 * hydration 동안에는 build 시점을 써서 서버 HTML과 맞추고, 끝난 뒤 방문 시점으로 바꾼다.
 */
export function useNow() {
  const [now, setNow] = useState(() => DateTime.fromMillis(Number(process.env.BUILD_TIME)));

  useEffect(() => {
    setNow(DateTime.local());
  }, []);

  return now;
}
