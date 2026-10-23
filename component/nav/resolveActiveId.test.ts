import assert from 'node:assert/strict';
import { test } from 'node:test';
import { resolveActiveId } from './resolveActiveId.ts';

test('페이지 끝에서는 제목이 기준선까지 못 올라오는 마지막 섹션을 고른다', () => {
  const headings = [
    { id: 'section-experience', top: -8000 },
    { id: 'section-education', top: 21 },
    { id: 'section-etc', top: 218 },
  ];
  assert.equal(resolveActiveId(headings, 900, true), 'section-etc');
});

test('제목이 화면 위 30% 지점을 지나면 그 섹션을 고른다', () => {
  const headings = [
    { id: 'section-introduce', top: -1200 },
    { id: 'section-experience', top: 200 },
    { id: 'section-project', top: 2400 },
  ];
  assert.equal(resolveActiveId(headings, 900, false), 'section-experience');
});

test('기준선을 지난 제목이 없으면 첫 섹션을 고른다', () => {
  const headings = [
    { id: 'section-introduce', top: 400 },
    { id: 'section-experience', top: 1600 },
  ];
  assert.equal(resolveActiveId(headings, 900, false), 'section-introduce');
});
