<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-02-17 | Updated: 2026-02-17 -->

# nav

## Purpose
플로팅 네비게이션 — 섹션 간 스크롤 이동, 다크모드 토글, 인쇄 버튼 포함.

## Key Files

| File | Description |
|------|-------------|
| `FloatingNav.tsx` | 플로팅 네비게이션 컴포넌트 (smooth scroll, 섹션 링크) |
| `resolveActiveId.ts` | 스크롤 위치로 활성 섹션을 고르는 순수 함수 (`resolveActiveId.test.ts`로 검증) |

## Dependencies

### Internal
- `component/common/DarkModeToggle.tsx` — 다크모드 토글
- `component/common/PrintButton.tsx` — 인쇄 버튼

<!-- MANUAL: -->
