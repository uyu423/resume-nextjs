<!-- Generated: 2026-02-17 | Updated: 2026-02-17 -->

# resume-nextjs

## Purpose
Next.js 기반 정적 웹 이력서 생성기. `payload/` 디렉토리의 데이터 파일만 수정하면 개인 웹 이력서를 생성할 수 있다. Static HTML로 export하여 GitHub Pages에 배포.

## Key Files

| File | Description |
|------|-------------|
| `package.json` | 프로젝트 의존성 및 스크립트 (React 19, Next.js 16, luxon, FontAwesome) |
| `tsconfig.json` | TypeScript 컴파일러 설정 (strict mode, ES2022, noEmit) |
| `next.config.js` | Next.js 설정 (static export → `docs/`, GitHub Pages subpath용 assetPrefix) |
| `eslint.config.js` | ESLint flat config (TypeScript + Prettier, single quotes) |
| `shellwork.js` | postbuild 스크립트 (`docs/.nojekyll` 생성, 조건부 `docs/CNAME` 생성) |
| `.nvmrc` | Node.js 버전 지정 (24.13.0) |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `component/` | 섹션별 UI 컴포넌트 (see `component/AGENTS.md`) |
| `pages/` | Next.js 페이지 (see `pages/AGENTS.md`) |
| `payload/` | 이력서 데이터 파일 (see `payload/AGENTS.md`) |
| `types/` | TypeScript 인터페이스 정의 (see `types/AGENTS.md`) |
| `styles/` | 전역 CSS 스타일 (see `styles/AGENTS.md`) |
| `public/` | 정적 자산 — favicon, OG 이미지 등 |
| `asset/` | 소스 자산 원본 |
| `.github/` | GitHub Actions CI/CD (see `.github/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- `npm run build` → `docs/`에 static HTML 생성. `docs/`는 gitignored이며 CI가 `gh-pages`로 배포
- `npm run typecheck && npm run lint` — 코드 변경 후 반드시 실행
- `npm test` — `node:test` 단위 테스트 (`component/**/*.test.ts`, 의존성 없이 Node 24 타입 스트리핑으로 실행)
- typecheck + lint + test + build 성공이 품질 기준

### Data Flow
```
payload/*.ts → types/*.ts ← component/*/*.tsx → pages/index.tsx
```
1. `payload/*.ts` — 이력서 데이터 정의
2. `types/*.ts` — TypeScript 인터페이스
3. `component/*/index.tsx` — 섹션 렌더링
4. `pages/index.tsx` — 모든 섹션 조합

### Common Patterns
- 날짜 형식: `YYYY-MM` (luxon으로 파싱/포맷)
- CSS 변수 기반 다크모드 (`data-theme="dark"`)
- 모든 섹션 payload는 `CommonPayload` extends (`disable?`, `printExclude?`)

## Dependencies

### External
- Next.js 16.x — Static export 프레임워크
- React 19.x — UI 라이브러리
- luxon — 날짜/기간 계산
- FontAwesome 6.x — 아이콘
- Pretendard — 기본 폰트 (CDN)

<!-- MANUAL: -->
