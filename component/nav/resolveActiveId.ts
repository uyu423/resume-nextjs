interface HeadingPosition {
  id: string;
  top: number;
}

/**
 * 화면 위 30% 지점을 지난 제목 중 가장 아래 것을 활성 섹션으로 고른다.
 * 페이지 끝에서는 마지막 섹션을 고른다. 짧은 마지막 섹션은 제목이 기준선까지 올라오지 못하기 때문이다.
 */
export function resolveActiveId(
  headings: HeadingPosition[],
  viewportHeight: number,
  isAtBottom: boolean,
): string | undefined {
  if (isAtBottom) {
    return headings[headings.length - 1]?.id;
  }

  const activationTop = viewportHeight * 0.3;
  let activeId = headings[0]?.id;
  headings.forEach((heading) => {
    if (heading.top <= activationTop) {
      activeId = heading.id;
    }
  });
  return activeId;
}
