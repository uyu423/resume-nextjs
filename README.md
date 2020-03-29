# Resume Next.js

[![CircleCI](https://circleci.com/gh/uyu423/resume-nextjs.svg?style=shield)](https://circleci.com/gh/uyu423/resume-nextjs)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/fe3253d51d544a2a971b637ed1570ac7)](https://app.codacy.com/manual/uyu423/resume-nextjs?utm_source=github.com&utm_medium=referral&utm_content=uyu423/resume-nextjs&utm_campaign=Badge_Grade_Dashboard)
[![Maintainability](https://api.codeclimate.com/v1/badges/19edd90e9309634ee66a/maintainability)](https://codeclimate.com/github/uyu423/resume-nextjs/maintainability)
[![dependencies Status](https://david-dm.org/uyu423/resume-nextjs/status.svg)](https://david-dm.org/uyu423/resume-nextjs)
[![devDependencies Status](https://david-dm.org/uyu423/resume-nextjs/dev-status.svg)](https://david-dm.org/uyu423/resume-nextjs?type=dev)

- 누구나 예쁜 웹 이력서를 쉽게 만들 수 있어 <small>(코딩 쫌만 할 줄 알면..)</small>
- 사실 https://github.com/uyu423/resume 를 next.js 로 포팅한 것.
- Sample: https://resume-next.yowu.dev

## Install

```bash
# fork to your github account & git cloning your forked repository
npm install
```

## Run dev

```bash
npm run dev
```

## Structure

- asset
- component
- page
- payload
- docs
- TBU

### Payload Detail

- TBU

## Export

```bash
npm run export
```

- `/docs` 하위에 Static HTML 리소스가 생성된다.
- Sub Path 가지는 도메인 구조일 경우 (ex. https://uyu423.github.io/resume 로 호스팅) `package.json` 내의 `homepage` 필드 값을 호스팅 원하는 도메인으로 변경한다.
  - `homepage` 필드에 `pathname` 이 있을 경우 `next.config.js` 의 `assetPrefix` 추가하는 로직이 있음

### Github Pages

#### Repository Setting

- Options - GithubPages - Source - master branch /docs folder 를 선택
- 외부 도메인이 있는 경우 Custom Domain 항목에 기입해주고, `/CNAME` 을 수정하여 Custom Domain 과 동일한 record 를 입력한다.
  - 이 친구는 export 과정에서 docs 에 포함됨.
