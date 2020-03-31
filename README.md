# Resume Next.js

[![Github Star](https://img.shields.io/github/stars/uyu423/resume-nextjs.svg?style=popout)](https://github.com/uyu423/resume-nextjs)
[![CircleCI](https://circleci.com/gh/uyu423/resume-nextjs.svg?style=shield)](https://circleci.com/gh/uyu423/resume-nextjs)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fe3253d51d544a2a971b637ed1570ac7)](https://app.codacy.com/manual/uyu423/resume-nextjs?utm_source=github.com&utm_medium=referral&utm_content=uyu423/resume-nextjs&utm_campaign=Badge_Grade_Dashboard)
[![Maintainability](https://api.codeclimate.com/v1/badges/19edd90e9309634ee66a/maintainability)](https://codeclimate.com/github/uyu423/resume-nextjs/maintainability)
[![dependencies Status](https://david-dm.org/uyu423/resume-nextjs/status.svg)](https://david-dm.org/uyu423/resume-nextjs)
[![devDependencies Status](https://david-dm.org/uyu423/resume-nextjs/dev-status.svg)](https://david-dm.org/uyu423/resume-nextjs?type=dev)

- 누구나 예쁜 웹 이력서를 쉽게 만들 수 있어 <small>(코딩 쫌만 할 줄 알면..)</small>
- Next.js, Bootstrap CSS 가 사용되었다.
- 사실 https://github.com/uyu423/resume-legacy 를 Next.js 로 포팅한 것.
- Sample: https://resume.yowu.dev
  - 더 많은 예제는 [EXAMPLE.md](https://github.com/uyu423/resume-nextjs/blob/master/EXAMPLE.md) 를 참고한다.

## Install

```bash
# fork to your github account & git cloning your forked repository
npm install
```

## Run Development Mode

```bash
npm run dev
```

## Structure

- asset/
  - images, favicon
- component/
  - React Components
- pages/
  - `index.html` 을 렌더링하기 위한 하나의 페이지 뿐이다.
- **payload/**
  - **Payload 데이터 변경만으로 개인 웹 이력서를 뽑아낼 수 있다.**
  - 이력서 렌더링에 필요한 데이터가 포함된다.
  - 하단의 Payload Detail 참고
- docs/
  - `npm run export (next export)` 를 실행하면 Static HTML 이 렌더링되어 `docs` 디렉토리 하단에 생성된다.
  - Github Pages 의 master branch 의 `docs/` 디렉토리를 지정하여 Github Pages 호스팅을 할 수 있는데, 이를 위해 export 디렉토리 이름을 docs 로 명명했다.
  - `docs/typedoc/` 에는 TypeDoc HTML 이 포함되지만 `npm run export` 로는 생성하지 않는다. `npm run typedoc` 으로 TypeDoc 을 생성할 수 있다.

### Payload Description

- TypeDoc: https://resume.yowu.dev/typedoc
  - TypeDoc 내에 모든 Payload 에 대한 Rendering Sample Screenshot 이 포함되어 있습니다.
- `_global`, `footer` Payload 을 제외한 모든 Payload 에는 `disable?: boolean` 필드가 존재합니다. 해당 필드가 `true` 면 해당 Payload 의 Section 을 렌더링하지 않습니다.

#### Profile

- 프로플 사진, 이름, 연락수단, 약간의 공지사항 영역
- TypeDoc: [IProfile.Payload](https://resume.yowu.dev/typedoc/interfaces/iprofile.payload.html)
- TS Sample: [payload/profile.ts](https://github.com/uyu423/resume-nextjs/blob/master/payload/profile.ts)

#### Introduce

- 자기 소개 영역
- TypeDoc: [IIntroduce.Payload](https://resume.yowu.dev/typedoc/interfaces/iintroduce.payload.html)
- TS Sample: [payload/introduce.ts](https://github.com/uyu423/resume-nextjs/blob/master/payload/introduce.ts)

#### Skill

- 본인 보유 기술에 대한 소개 영역
- TypeDoc: [ISkill.Payload](https://resume.yowu.dev/typedoc/interfaces/iskill.payload.html)
- TS Sample: [payload/skill.ts](https://github.com/uyu423/resume-nextjs/blob/master/payload/skill.ts)

#### Experience

- (직장)경험에 대한 소개 영역
- TypeDoc: [IExperience.Payload](https://resume.yowu.dev/typedoc/interfaces/iexperience.payload.html)
- TS Sample: [payload/experience.ts](https://github.com/uyu423/resume-nextjs/blob/master/payload/experience.ts)

#### Project

- 수행 프로젝트에 대한 소개 영역
- TypeDoc: [IProject.Payload](https://resume.yowu.dev/typedoc/interfaces/iproject.payload.html)
- TS Sample: [payload/project.ts](https://github.com/uyu423/resume-nextjs/blob/master/payload/project.ts)

#### Open Source

- 오픈소스 활동에 대한 소개 영역
- TypeDoc: [IOpenSource.Payload](https://resume.yowu.dev/typedoc/interfaces/iopensource.payload.html)
- TS Sample: [payload/openSource.ts](https://github.com/uyu423/resume-nextjs/blob/master/payload/openSource.ts)

#### Presentation

- 발표 활동에 대한 소개 영역
- TypeDoc: [IPresentation.Payload](https://resume.yowu.dev/typedoc/interfaces/ipresentation.payload.html)
- TS Sample: [payload/presentation.ts](https://github.com/uyu423/resume-nextjs/blob/master/payload/presentation.ts)

#### Education

- 학업에 대한 소개 영역
- TypeDoc: [IEducation.Payload](https://resume.yowu.dev/typedoc/interfaces/ieducation.payload.html)
- TS Sample: [payload/education.ts](https://github.com/uyu423/resume-nextjs/blob/master/payload/education.ts)

#### ETC

- 기타 항목(대회, 자격증, 봉사 등)에 대한 소개 영역
- TypeDoc: [IEtc.Payload](https://resume.yowu.dev/typedoc/interfaces/ietc.payload.html)
- TS Sample: [payload/etc.ts](https://github.com/uyu423/resume-nextjs/blob/master/payload/etc.ts)

#### \_Global

- 전역 설정(Web Title, SEO, favicon 등)에 대한 설정 영역
- TypeDoc: [IGlobal.Payload](https://resume.yowu.dev/typedoc/interfaces/iglobal.payload.html)
- TS Sample: [payload/\_global.ts](https://github.com/uyu423/resume-nextjs/blob/master/payload/_global.ts)

## Export

```bash
npm run export
```

- `/docs` 하위에 Static HTML 리소스가 생성된다.
- Sub Path 가지는 도메인 구조일 경우 (ex. https://uyu423.github.io/resume 로 호스팅) `package.json` 내의 `homepage` 필드 값을 호스팅 원하는 도메인으로 변경한다.
  - `homepage` 필드에 `pathname` 이 있을 경우 `next.config.js` 의 `assetPrefix` 추가하는 로직이 있음

### Export to Github Pages

#### Repository Setting

- Options - Github Pages - Source - master branch /docs folder 를 선택
  - Github Pages Source 에 대한 자세한 내용은 [help.github.com](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) 을 참고한다.
- `npm run export` 를 실행하여 `docs` 내 Static HTML 을 갱신한다.
- 외부 도메인이 있는 경우 Custom Domain 항목에 기입해주고, `/CNAME` 을 수정하여 Custom Domain 과 동일한 record 를 입력한다.
  - `CNAME` 은 export 과정에서 docs 에 포함됨.
  - 외부 도메인에 대한 자세한 내용은 [help.github.com](https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site) 를 참고한다.
- `*.github.io` 도메인을 그대로 사용하는 경우 `http://{username}.github.io/{repository_name}` 접속하면 웹 이력서가 나타난다.

## Contribution

- If you want additional features, please pull request. Always open.

## Question?

- Section 의 순서는 어떻게 조절하나요?
  - 현재는 `pages/index.tsx` 에서 직접 렌더링 순서를 변경하는 수 밖에 없습니다.
  - 데이터나 `_global` payload 로 핸들링하는 방법을 고민 중입니다.
