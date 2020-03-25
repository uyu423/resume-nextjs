# Resume Next.js

- 누구나 예쁜 웹 이력서를 쉽게 만들 수 있어 <small>(코딩 쫌만 할 줄 알면..)</small>
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

### Github Pages

#### Repository Setting

- Options - GithubPages - Source - master branch /docs folder 를 선택
- **지금 `_next` 하위 리소스들이 root path 기준으로만 가져오고 있어서 Sub Path 를 가지는 도메인 구조에서는 제대로 동작하지 않음** (ex. https://uyu423.github.io/something)
  - 수정 예정
- 외부 도메인이 있는 경우 Custom Domain 항목에 기입해주고, `/CNAME` 을 수정하여 Custom Domain 과 동일한 record 를 입력한다.
  - 이 친구는 export 과정에서 docs 에 포함됨.