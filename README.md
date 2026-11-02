<div align="center">
  <img src="https://github.com/uyu423/resume-nextjs/raw/master/logo.jpg" alt="Resume Next.js Logo">
  <br/><hr/>
  <a href="https://github.com/uyu423/resume-nextjs"><img src="https://img.shields.io/github/stars/uyu423/resume-nextjs.svg?style=popout" alt="Github Star"/></a>
  <a href="https://github.com/uyu423/resume-nextjs/actions"><img src="https://github.com/uyu423/resume-nextjs/actions/workflows/ci.yml/badge.svg" alt="CI"/></a>
  <br/>
</div>

## Introduce

- 누구나 예쁜 웹 이력서를 쉽게 만들 수 있어 <small>(약간의 코딩으로..)</small>
- Next.js 16, React 19, TypeScript 5.9 기반. 순수 CSS (Bootstrap 미사용).
- `payload/` 디렉토리의 데이터 파일만 수정하면 개인 웹 이력서를 만들 수 있다.
- Sample: https://uyu423.github.io/resume-nextjs

### v2 주요 변경 사항

v1 (`v1.3.1-eol` 태그)에서 대규모 업그레이드가 이루어졌다.

- **프레임워크**: Next.js 10→16, React 17→19, TypeScript 4.9→5.9
- **다크 모드**: 시스템 설정 감지 + 수동 토글, CSS 커스텀 프로퍼티 기반 디자인 토큰
- **플로팅 네비게이션**: 데스크톱에서 현재 섹션을 추적하는 사이드 네비게이션
- **인쇄/PDF 내보내기**: 브라우저 인쇄 기능을 활용한 PDF 저장 지원
- **SEO 강화**: JSON-LD 구조화 데이터, OpenGraph 프로필 메타 태그
- **새 섹션**: Highlight (핵심 성과 카드), Testimonial (추천사)
- **프로필 강화**: tagline, 핵심 수치 카드, CTA 버튼
- **타입 시스템**: `declare namespace` → 모듈 export 방식으로 전환, `types/` 디렉토리로 분리
- **빌드/CI**: Bootstrap·styled-components·next-seo·jQuery 제거, 순수 CSS 전환, GitHub Actions CI/CD 도입
- **Node.js 24**: `--openssl-legacy-provider` 옵션 불필요
- **더보기 기능**: 리스트형 섹션에 `showMoreCount`를 설정하면 n개까지만 노출하고 "더보기" 버튼으로 나머지를 펼칠 수 있다
- **섹션 순서 제어**: `_global.sectionOrder`로 payload만 수정하여 섹션 렌더링 순서를 변경할 수 있다

> v1에서 마이그레이션하려면 [MIGRATION_V1_TO_V2.md](./MIGRATION_V1_TO_V2.md)를 참고한다.
>
> [Claude Code](https://claude.ai/code)를 사용하면 payload 마이그레이션과 머지 충돌 해결을 자동화할 수 있다. v1 브랜치에서 아래 프롬프트를 실행한다:
>
> ```text
> 아래의 URL을 확인하고, 마이그레이션 및 병합을 순서대로 실행합니다.
>
> https://raw.githubusercontent.com/uyu423/resume-nextjs/refs/heads/feature/v2/.claude/skills/payload-migration-v1-to-v2/SKILL.md
> ```

## Contributors

- [Yowu (uyu423)](https://github.com/uyu423)
- [Dal-ya](https://github.com/Dal-ya)
- [Taeyeong Kim (lizard-kim)](https://github.com/lizard-kim)
- [Taeyang Jin (heli-os)](https://github.com/heli-os)
- [Hyogeun Oh (Zerohertz)](https://github.com/Zerohertz)

## Requirements

- Node.js >= 24 (`.nvmrc` 참고)
- npm

## Install

```bash
# fork to your github account & git clone your forked repository
npm install
```

## Run Development Mode

```bash
npm run dev
```

## Commands

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 (localhost:3000) |
| `npm run build` | 프로덕션 빌드 + Static HTML 생성 → `docs/` |
| `npm run lint` | ESLint |
| `npm run lint:fix` | ESLint + 자동 수정 |
| `npm run typecheck` | TypeScript 타입 체크 |

## Structure

```
├── component/          # React 컴포넌트
│   ├── common/         # 공통 컴포넌트 (Section, DarkModeToggle, PrintButton 등)
│   ├── nav/            # 플로팅 네비게이션
│   ├── profile/        # 프로필 섹션
│   ├── highlight/      # 핵심 성과 섹션
│   ├── experience/     # 경력 섹션
│   ├── ...             # 기타 섹션별 디렉토리
│   └── footer/         # 푸터 섹션
├── pages/              # Next.js 페이지 (index.tsx 하나만 존재)
├── payload/            # 이력서 데이터 (이 디렉토리만 수정하면 된다)
├── types/              # TypeScript 타입 정의
├── styles/             # CSS (globals.css — 디자인 토큰, 레이아웃, 컴포넌트 스타일, 다크 모드, 인쇄 스타일)
├── public/             # 정적 파일 (이미지, favicon 등)
└── docs/               # 빌드 결과물 (gitignored, `npm run build` 시 생성)
```

### 데이터 흐름: Payload → Component → Page

1. **`payload/*.ts`** — 이력서 데이터. 각 파일이 하나의 섹션 데이터를 export.
2. **`payload/index.ts`** — 모든 payload를 집계하여 단일 `Payload` 객체로 export.
3. **`pages/index.tsx`** — 유일한 페이지. 각 섹션 컴포넌트를 순서대로 렌더링.

### Payload 공통 사항

- `_global`을 제외한 모든 Payload에는 `disable?: boolean` 필드가 존재한다. 해당 필드가 `true`면 해당 섹션을 렌더링하지 않는다.
- `printExclude?: boolean` — `true`이면 인쇄/PDF 출력 시 해당 섹션을 숨긴다.
- 리스트형 섹션(Experience, Project, Skill, OpenSource, Presentation, Article, Education, Testimonial, Highlight, Etc)에는 `showMoreCount?: number` 필드가 존재한다.
  - `0`, `null`, `undefined`: 모든 항목을 표시한다 (기본값).
  - `n`: n개까지만 노출하고, n+1번째 항목이 그라데이션으로 페이드아웃되며 "더보기" 버튼이 표시된다.
  - 인쇄 시에는 설정 여부와 상관없이 모든 항목이 표시된다.
- 섹션 순서를 변경하려면 `payload/_global.ts`에서 `sectionOrder` 배열을 설정한다 (아래 [\_Global](#_global) 참고). `sectionOrder`를 설정하지 않으면 기본 순서를 사용한다.

### Payload Description

#### Profile

- 프로필 사진, 이름, 연락수단, tagline, 핵심 수치 카드, CTA 버튼, 공지사항 영역
- Type: [`ProfilePayload`](./types/profile.ts)
- Sample: [`payload/profile.ts`](./payload/profile.ts)

#### Highlight

- 핵심 성과를 카드 형태로 표시 (3~5개 권장)
- Type: [`HighlightPayload`](./types/highlight.ts)
- Sample: [`payload/highlight.ts`](./payload/highlight.ts)

#### Introduce

- 자기 소개 영역
- Type: [`IntroducePayload`](./types/introduce.ts)
- Sample: [`payload/introduce.ts`](./payload/introduce.ts)

#### Skill

- 보유 기술에 대한 소개 영역
- Type: [`SkillPayload`](./types/skill.ts)
- Sample: [`payload/skill.ts`](./payload/skill.ts)

#### Experience

- 직장 경험에 대한 소개 영역
- Type: [`ExperiencePayload`](./types/experience.ts)
- Sample: [`payload/experience.ts`](./payload/experience.ts)

#### Project

- 수행 프로젝트에 대한 소개 영역
- `skillKeywords?: string[]`를 넣으면 설명 아래에 키워드 태그가 붙는다 (Experience의 직책별 키워드와 같은 모양)
- Type: [`ProjectPayload`](./types/project.ts)
- Sample: [`payload/project.ts`](./payload/project.ts)

#### Open Source

- 오픈소스 활동에 대한 소개 영역
- Type: [`OpenSourcePayload`](./types/open-source.ts)
- Sample: [`payload/openSource.ts`](./payload/openSource.ts)

#### Presentation

- 발표 활동에 대한 소개 영역
- Type: [`PresentationPayload`](./types/presentation.ts)
- Sample: [`payload/presentation.ts`](./payload/presentation.ts)

#### Article

- 블로그/SNS 포스트, 기사에 대한 소개 영역
- Type: [`ArticlePayload`](./types/article.ts)
- Sample: [`payload/article.ts`](./payload/article.ts)

#### Testimonial

- 동료/상사의 추천사를 인용문 형태로 표시
- Type: [`TestimonialPayload`](./types/testimonial.ts)
- Sample: [`payload/testimonial.ts`](./payload/testimonial.ts)

#### Education

- 학업에 대한 소개 영역
- Type: [`EducationPayload`](./types/education.ts)
- Sample: [`payload/education.ts`](./payload/education.ts)

#### ETC

- 기타 항목(대회, 자격증, 봉사 등)에 대한 소개 영역
- Type: [`EtcPayload`](./types/etc.ts)
- Sample: [`payload/etc.ts`](./payload/etc.ts)

#### \_Global

- 전역 설정(Web Title, SEO, JSON-LD, favicon, 섹션 순서)에 대한 설정 영역
- `sectionOrder?: SectionKey[]` — 섹션 렌더링 순서를 지정한다. 배열에 없는 섹션은 기본 순서대로 뒤에 추가된다. Profile은 항상 첫 번째, Footer는 항상 마지막.
  ```ts
  // 예시: Experience를 가장 먼저, Skill을 그 다음으로
  sectionOrder: ['experience', 'skill']
  // 나머지(highlight, project, openSource, ...)는 기본 순서대로 뒤에 추가
  ```
- Type: [`GlobalPayload`](./types/global.ts)
- Sample: [`payload/_global.ts`](./payload/_global.ts)

## Export & Deploy

### Static HTML 빌드

```bash
npm run build
```

`docs/` 하위에 Static HTML 리소스가 생성된다. `next.config.js`의 `output: 'export'`와 `distDir: 'docs'` 설정에 의해 별도의 `next export` 명령 없이 `build`만으로 정적 파일이 생성된다.

### Sub Path 도메인

Sub Path를 가지는 도메인 구조일 경우 (예: `https://uyu423.github.io/resume`) `package.json`의 `homepage` 필드 값을 호스팅 원하는 도메인으로 변경한다. `homepage`에 pathname이 있으면 `next.config.js`에서 자동으로 `assetPrefix`를 적용한다.

### GitHub Pages 배포

#### GitHub Actions (권장)

`master` 브랜치에 push하면 `.github/workflows/ci.yml`에 의해 자동으로 빌드되고, `gh-pages` 브랜치로 배포된다.

- Repository Settings → Pages → Source: **Deploy from a branch**
- Branch: **`gh-pages`** / **`/ (root)`**

#### GitHub Release

`v*` 태그를 push하면 `.github/workflows/release.yml`에 의해 CI 검증 후 GitHub Release가 자동 생성된다. changelog는 커밋 메시지 기반으로 자동 생성된다.

#### 수동 배포

1. Repository Settings → Pages → Source에서 `gh-pages` 브랜치를 선택한다.
2. `npm run build`를 실행하여 `docs/` 내 Static HTML을 갱신한다.
3. 외부 도메인이 있는 경우 Custom Domain 항목에 기입한다.
   - `docs/CNAME` 파일은 빌드 과정에서 `package.json`의 `homepage` 필드를 기반으로 자동 생성된다.
   - `homepage`가 `*.github.io/*` 패턴이면 Custom Domain을 사용하지 않는 것으로 간주하고 `docs/CNAME`을 생성하지 않는다.

## Features

### 다크 모드

시스템 설정(prefers-color-scheme)을 자동 감지하며, 우측 하단 토글 버튼으로 수동 전환할 수 있다. 선택한 테마는 `localStorage`에 저장된다.

### 플로팅 네비게이션

데스크톱 화면(992px 이상)에서 우측에 섹션 네비게이션이 표시된다. 스크롤에 따라 현재 섹션이 자동 하이라이트되며, 클릭으로 해당 섹션으로 이동할 수 있다.

### 인쇄 / PDF 내보내기

우측 하단의 인쇄 버튼을 클릭하면 브라우저 인쇄 대화상자가 열린다. "PDF로 저장"을 선택하면 이력서를 PDF로 내보낼 수 있다.

### 더보기 (Show More)

리스트형 섹션에 `showMoreCount`를 설정하면 지정된 개수만 노출하고, 나머지는 그라데이션 효과와 함께 숨겨진다. "더보기" 버튼으로 전체 항목을 펼칠 수 있으며, 인쇄 시에는 항상 모든 항목이 표시된다.

### 섹션 순서 제어

`payload/_global.ts`에서 `sectionOrder` 배열을 설정하면 `pages/index.tsx` 코드를 수정하지 않고 섹션 렌더링 순서를 변경할 수 있다. 오픈소스 사용자가 원본 코드에 변경을 가하지 않아도 되므로 업데이트/머지 시 충돌을 방지한다.

## Contribution

- If you want additional features, please pull request. Always open.

## Question?

- Section의 순서는 어떻게 조절하나요?
  - `payload/_global.ts`에서 `sectionOrder` 배열을 설정한다. 코드 수정 없이 payload만으로 순서를 변경할 수 있다.
  - 예: `sectionOrder: ['experience', 'skill', 'project']` — 나머지 섹션은 기본 순서대로 뒤에 추가된다.
- 항목이 너무 많아서 스크롤이 길어요.
  - 해당 섹션의 payload에 `showMoreCount: 3`처럼 설정하면, 3개까지만 노출하고 "더보기" 버튼으로 나머지를 펼칠 수 있다.
