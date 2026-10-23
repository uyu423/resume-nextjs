<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-17 | Updated: 2026-02-17 -->

# common

## Purpose
모든 섹션에서 공유하는 공통 UI 컴포넌트, 유틸리티, 스타일 상수.

## Key Files

| File | Description |
|------|-------------|
| `Section.tsx` | `disable`/`printExclude` 플래그 기반 조건부 렌더링 래퍼 |
| `CommonSection.tsx` | 섹션 제목 포함 표준 섹션 래퍼 (aria-labelledby) |
| `CommonRow.tsx` | 2열 레이아웃 (좌: 제목, 우: 설명) |
| `CommonDescription.tsx` | 재귀적 중첩 bullet list 렌더러 |
| `Style.ts` | CSS-in-JS 스타일 상수 (color, font, layout) |
| `Util.ts` | luxon 기반 날짜 포맷팅, 기간 계산, debug 채널 (`yosume:*`) |
| `useMediaQuery.ts` | 반응형 미디어 쿼리 hook |
| `useNow.ts` | 현재 시각 hook — hydration 동안 build 시각(`process.env.BUILD_TIME`)을 써서 정적 HTML과 일치시킨 뒤 방문 시각으로 교체 |
| `DarkModeToggle.tsx` | 다크모드 토글 (localStorage + `data-theme` 속성) |
| `PrintButton.tsx` | 인쇄/PDF 내보내기 버튼 |
| `index.tsx` | 공통 컴포넌트 barrel export |

## For AI Agents

### Working In This Directory
- 이 디렉토리의 변경은 모든 섹션에 영향. 변경 후 전체 빌드 확인 필수
- `Util.ts`의 날짜 함수: 입력 `YYYY-MM`, 출력 `YYYY. MM`, 기간 `y년 M개월`
- `Style.ts`는 인라인 스타일 상수. 전역 CSS는 `styles/globals.css`에 위치

## Dependencies

### Internal
- `types/common.ts` — `CommonPayload` 인터페이스
- `types/row.ts` — `RowPayload`, `RowDescription`, `FontWeightType`

### External
- luxon — 날짜 처리
- FontAwesome — 아이콘

<!-- MANUAL: -->
