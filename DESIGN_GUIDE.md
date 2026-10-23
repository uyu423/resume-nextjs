# Design Guide

resume-nextjs v2 화면을 고칠 때 지키는 규칙이다. 스타일은 모두 `styles/globals.css`의 CSS 변수(토큰)로 관리한다. 새 값을 쓰기 전에 있는 토큰부터 찾는다.

## 원칙

1. **이력서는 훑어 읽는 문서다.** 장식보다 읽는 속도가 먼저다.
2. **파랑은 "누를 수 있는 것"과 "현재"에만 쓴다.** 링크, 버튼 hover, 포커스 링, 현재 섹션(nav), 현재 재직이 해당한다. 장식용 파랑은 프로필 사진 링 하나뿐이다.
3. **색만으로 구분하지 않는다.** 적녹 색각 이상을 고려해 빨강·초록으로 상태를 나누지 않는다. 상태는 파랑·무채색에 모양이나 글자를 함께 써서 구분한다.
4. **움직임은 사용자 행동에만 반응한다.** 섹션 등장 효과 같은 자동 애니메이션은 쓰지 않는다.
5. **라벨은 내용이 스스로 설명하지 못할 때만 붙인다.** 예: 태그 줄 위의 `Skill Keywords`, `총 …` 앞의 `TOTAL`은 쓰지 않는다.

## 색

| 토큰 | 라이트 | 다크 | 용도 |
|---|---|---|---|
| `--color-text` | `#0f172a` | `#dbeafe` | 본문 |
| `--color-primary` | `#0f172a` | `#dbeafe` | 이름, 섹션 제목, 통계 숫자 |
| `--color-text-secondary` | `#334155` | `#93a7c4` | 직책, 날짜, 보조 문구 |
| `--color-text-muted` | `#64748b` | `#6b7f9a` | 가장 약한 글자, 과거 표시 |
| `--color-accent` | `#2563eb` | `#3b82f6` | 링크와 "현재" (원칙 2) |
| `--color-bg` / `--color-bg-card` / `--color-bg-subtle` | | | 페이지 / 카드 / 띠·태그 배경 |
| `--color-border` | `#d7e1ef` | `#20304d` | 구분선, 태그 테두리 |
| `--color-rule` | `#0f172a` | `#3b4f72` | 섹션 제목 아래 굵은 선 |

- 작은 글자(18px 미만)는 배경 대비 **4.5:1 이상**이어야 한다. `--color-text-muted`가 하한선이다 (라이트 4.55, 다크 4.74).
- 링크는 밑줄 없이 색으로만 구분한다. 그래서 `--color-accent`는 두 조건을 함께 지켜야 한다.
  - 본문 대비 **3:1 이상** (라이트 3.45, 다크 3.01)
  - 배경 대비 **4.5:1 이상** (라이트 4.94, 다크 5.28)
  - 링크의 밑줄은 hover 때만 나타난다.
- `success`·`error` 같은 초록·빨강 토큰은 두지 않는다.

## 글꼴

| 토큰 | 글꼴 | 쓰는 곳 |
|---|---|---|
| `--font-body` | Pretendard (dynamic subset) | 본문, 모든 한글 |
| `--font-display` | Sora | 영문 제목·숫자·nav. 한글 글리프가 없어 한글은 Pretendard로 대체된다 |
| `--font-signature` | Parisienne | 소개 섹션 서명 한 곳 |

- 크기는 `--text-xs`(12px)부터 `--text-3xl`까지 토큰으로만 쓴다. 본문은 16px, 줄 높이 1.72다.
- **이탤릭은 직책·부제목 줄(`.experience-position-title`, `<i>`)에만 쓴다.** Pretendard와 Sora에는 이탤릭 파일이 없어 브라우저가 합성한 이탤릭(synthetic oblique)으로 그려진다. 나무위키 등 Pretendard를 쓰는 사이트도 같은 방식이다. 합성 이탤릭은 한글이 비스듬히 밀려 보이므로 다른 요소로 넓히지 않는다. `font-synthesis`를 끄면 이 줄도 정체로 바뀐다.
- 날짜와 숫자는 `font-variant-numeric: tabular-nums`로 폭을 맞춘다.
- 대문자에 자간을 넓히는 처리는 섹션 제목(`.section-heading`)에만 쓴다.
- 제목은 `text-wrap: balance`, 문단과 목록은 `text-wrap: pretty`를 쓴다 (이미 전역 적용).

## 간격

토큰: `--space-xs` 4 · `--space-sm` 8 · `--space-md` 16 · `--space-lg` 24 · `--space-xl` 36 · `--space-2xl` 64 (px)

관계가 먼 것일수록 간격이 커져야 한다. 지금 데스크톱 기준 값은 이렇다.

| 관계 | 간격 | 출처 |
|---|---|---|
| bullet 한 줄 | 약 28px (줄 높이) | `body` line-height |
| 같은 회사의 다음 직책 | 24px | `.experience-position-row + .experience-position-row` |
| 항목 사이 (구분선) | 24 + 1 + 24 = 49px | `hr` |
| 섹션 제목 → 첫 내용 | 32px | `--subsection-gap` |
| 섹션 사이 | 88px (모바일 64px) | `--section-gap` |

- 날짜·라벨은 앞 항목보다 **자기 내용에 더 가까워야** 한다. 모바일에서 2열이 1열로 접힐 때 특히 확인한다.
- 프로필 바로 뒤의 하이라이트 카드는 프로필 요약의 일부로 붙인다 (`.profile-section + .highlight-section`, 24px).

## 레이아웃

- 본문 폭 840px, 좌우 여백 36px (모바일 16px).
- 2열 행(`.split-row`): 왼쪽 200px(날짜·이름, 오른쪽 정렬) + 오른쪽 내용. 767px 이하에서 1열이 된다.
- 브레이크포인트: 767px(모바일), 991px(카드 3열 → 2열), 992px 이상에서만 플로팅 nav를 보인다.
- 섹션 전체에 대한 요약(예: 총 경력)은 섹션 제목 줄 오른쪽 끝에 둔다 (`.experience-total`).

## 컴포넌트

| 요소 | 규칙 |
|---|---|
| 태그 `.tag` | 기본은 `.tag--muted` (회색). 현재 상태만 `.tag--current` (파랑 테두리) |
| 회사 앞 점 `.experience-dot` | 현재: 파랑으로 채운 점. 과거: 회색 빈 원. 색과 모양을 함께 바꾼다 (원칙 3) |
| 카드 `.highlight-card` | 누를 수 없으므로 hover 효과를 주지 않는다 |
| 섹션 제목 `.section-heading` | `--color-primary`, 대문자 + 넓은 자간, 아래 `--color-rule` 선 |
| 안내 배너 `.notice-banner` | 무채색 왼쪽 선. 파랑을 쓰지 않는다 |
| 스킬 점 `.skill-dot` | 채움 `--color-text-secondary`. 빔은 아직 하드코딩 회색(`#cbd5e1` / 다크 `#475569`)이다. 맞는 토큰이 없어 남겨 둔 예외다 |

## 움직임

- `transition: all`을 쓰지 않는다. 바뀌는 속성만 적는다.
- 스크롤 이동은 `prefers-reduced-motion: reduce`이면 즉시 이동한다.
- hover 효과는 누를 수 있는 요소에만 준다.

## 접근성

- 포커스는 `:focus-visible`의 파랑 outline으로 보인다. 이 outline을 지우지 않는다.
- 화면에서 숨긴 요소는 `opacity: 0`만 쓰지 말고 `visibility: hidden`도 함께 준다. 그래야 Tab 포커스가 가지 않는다.
- 섹션 제목에는 `scroll-margin-top`이 있어 nav로 이동해도 제목이 화면 끝에 붙지 않는다.

## 다크 모드와 인쇄

- 다크 모드는 `[data-theme='dark']`에서 같은 토큰을 다시 정의한다. 컴포넌트별 다크 전용 규칙은 새로 만들지 않는다 (남은 예외: `.skill-dot--empty`).
- 인쇄 스타일은 `@media print`에 모여 있다. 다크 모드에서 인쇄해도 흰 배경·검은 글자로 나오는지 확인한다.

## 바꾼 뒤 확인

1. `npm run typecheck && npm run lint && npm test`
2. 라이트·다크, 데스크톱(1440px)·모바일(390px, 320px)에서 화면을 본다.
3. 색을 바꿨다면 위 대비 기준을 다시 계산한다.
4. 날짜 계산 텍스트를 바꿨다면 `component/common/useNow.ts`를 거치는지 확인한다. 정적 HTML과 방문 시점이 달라 hydration 오류가 날 수 있다.
