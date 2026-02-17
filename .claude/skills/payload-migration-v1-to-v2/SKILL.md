---
name: payload-migration-v1-to-v2
description: v1.3.1-eol 기반 payload 데이터를 release/v2 구조로 안전하게 마이그레이션하는 실행형 스킬. 사용자가 "v1에서 v2로 payload 옮겨줘", "payload 머지 충돌 해결해줘", "release/v2로 payload 마이그레이션"처럼 요청할 때 사용한다. 백업 생성, v2 구조 우선 충돌 해결, 사용자 데이터 재적용, 타입/빌드 검증까지 자율적으로 수행한다.
---

# Payload Migration v1 -> v2

`MIGRATION_V1_TO_V2.md`를 단일 진실 원천으로 사용하여 `payload/`를 v1.3.1-eol에서 v2 구조로 이전한다.

## 목표

- v2 구조를 수용한다.
- 사용자 payload 데이터 값은 보존한다.
- 머지 충돌을 안전하게 해결한다.
- 최종적으로 lint/build 통과 상태를 만든다.

## 비가역 작업 전 안전 규칙

1. `payload/` 백업을 먼저 만든다.
2. 백업 없이 `git checkout --theirs payload/*`를 실행하지 않는다.
3. `git merge`는 항상 `--no-commit --no-ff`로 시작한다.
4. 충돌 해결은 반드시 아래 고정 순서를 지킨다.

## 고정 작업 순서

항상 다음 순서로 처리한다.

1. `payload/index.ts`
2. `payload/experience.ts`
3. `payload/_global.ts`
4. `payload/profile.ts`
5. 나머지 payload 파일

## 실행 워크플로우

### 1) 사전 상태 확인

다음을 순서대로 실행한다.

```bash
git fetch upstream --tags
git diff --name-status v1.3.1-eol...upstream/release/v2 -- payload
```

공개 upstream 별칭이 `resume-nextjs`라면 추가로 확인한다.

```bash
git fetch resume-nextjs --tags
git diff --name-status v1.3.1-eol...resume-nextjs/feature/v2 -- payload
```

### 2) 백업 생성

```bash
mkdir -p .migration_backup
cp -R payload ".migration_backup/payload-v1"
```

백업 디렉토리 생성 실패 시 즉시 중단한다.

### 3) 머지 시작

```bash
git merge upstream/release/v2 --no-commit --no-ff
git status
```

머지 충돌이 없더라도 아래 변환 규칙 검증을 수행한다.

### 4) v2 구조 우선 채택

고위험 파일부터 v2 구조(theirs)를 채택한다.

```bash
git checkout --theirs payload/index.ts
git checkout --theirs payload/experience.ts
git checkout --theirs payload/_global.ts
git checkout --theirs payload/profile.ts
```

필요 시 나머지도 v2 구조를 채택한다.

```bash
git checkout --theirs payload/skill.ts payload/article.ts payload/education.ts payload/etc.ts
git checkout --theirs payload/openSource.ts payload/presentation.ts payload/project.ts payload/footer.ts payload/introduce.ts
```

### 5) 사용자 데이터 재적용

`.migration_backup/payload-v1`를 기준으로 "구조는 v2, 데이터 값은 v1" 원칙으로 이식한다.

## 파일별 변환 규칙

### `payload/index.ts`

- v2의 import/type 경로 구조를 유지한다.
- `highlight`, `testimonial` import와 Payload object/interface 등록을 유지한다.
- type import 경로가 `../types/*`인지 확인한다.

### `payload/experience.ts`

`descriptions`를 반드시 객체 배열로 변환한다.

```ts
// v1
descriptions: ['문장1', '문장2'];

// v2
descriptions: [{ content: '문장1' }, { content: '문장2' }];
```

단순 문자열 배열이 남아 있으면 실패로 간주한다.

### `payload/_global.ts`

- 이미지/파비콘은 문자열 경로를 유지한다. 예: `/favicon.ico`, `/preview.jpg`
- `seo` 구조는 v2 형태를 유지한다.
- `jsonLd`는 optional이지만 가능하면 추가/유지한다.
- 과거 `asset` import 패턴으로 되돌리지 않는다.

### `payload/profile.ts`

- v2 구조를 유지하고 사용자 값을 이식한다.
- `tagline`, `headings`, `ctas`는 optional이며 필요한 경우만 채운다.

### `payload/skill.ts`

- `tooltip` 필드는 v2에서 제거되었다.
- `tooltip`이 남아 있으면 삭제한다.

### 신규 파일

아래 파일이 없으면 생성한다.

- `payload/highlight.ts`
- `payload/testimonial.ts`

즉시 사용하지 않으면 `disable: true`로 둔다.

### `docs/` 추적 해제

v1에서는 `docs/`가 git에 tracked 상태였으나, v2에서는 `.gitignore`에 포함되어 있고 CI가 `gh-pages` 브랜치로 배포한다. 이미 tracked된 파일은 `.gitignore`만으로 무시되지 않으므로 명시적으로 해제한다.

```bash
git ls-files docs/
# 출력이 있으면 추적 해제 필요
git rm --cached -r docs/
```

추적 해제 후 로컬 `docs/` 파일은 삭제되지 않는다.

## 필수 검증

다음 검증을 모두 통과해야 완료로 간주한다.

1. `payload/experience.ts`의 모든 `descriptions`가 `{ content: string }[]`인가?
2. `payload/skill.ts`에 `tooltip`이 없는가?
3. `payload/index.ts`에 `highlight`, `testimonial` import/등록이 모두 있는가?
4. `payload/_global.ts`가 v2 스타일(문자열 이미지 경로 + seo 구조)인가?
5. `docs/`가 git에서 untracked 상태인가?
6. lint/build가 성공하는가?

실행 명령:

```bash
git add payload
git ls-files docs/  # 출력 없어야 통과
npm run lint
npm run build
```

## 실패 처리 규칙

- lint/build 실패 시 원인 파일을 수정하고 검증 명령을 다시 실행한다.
- `descriptions` 또는 `tooltip` 관련 타입 오류는 우선순위로 수정한다.
- 데이터 유실이 의심되면 즉시 `.migration_backup/payload-v1`와 diff하여 복구한다.

## 완료 보고 템플릿

아래 형식으로 결과를 보고한다.

```text
[v1->v2 payload migration result]
- Base/Target: v1.3.1-eol -> upstream/release/v2
- Backup: .migration_backup/payload-v1 생성 여부
- Resolved files: index.ts, experience.ts, _global.ts, profile.ts, ...
- Data migration: 사용자 데이터 재적용 완료 여부
- Validation:
  - descriptions object-array 변환: pass/fail
  - skill tooltip 제거: pass/fail
  - highlight/testimonial 등록: pass/fail
  - docs/ untracked: pass/fail
  - npm run lint: pass/fail
  - npm run build: pass/fail
- Risk/Follow-up: 추가 수동 확인 필요 항목
```

## 금지 사항

- 백업 없이 강제 덮어쓰기
- `payload/` 전체를 무조건 ours/theirs로 일괄 선택
- v2 구조를 v1 타입/패턴으로 되돌리기
- 검증 없이 커밋 완료로 간주
