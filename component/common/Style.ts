import { CSSProperties } from 'react';

/** Style 추론을 위하여.. */
type TStyleKey =
  | 'blue'
  | 'gray'
  | 'global'
  | 'sign'
  | 'profileImg'
  | 'footerCover'
  | 'footer'
  | 'skillKeywordBadge'
  | 'toc'
  | 'tocButton'
  | 'tocBarContainer'
  | 'tocItem'
  | 'tocLink'
  | 'tocLinkActive'
  | 'tocItemActive'
  | 'tocItemHover'
  | 'tocItemDisabled'
  | 'progressBar'
  | 'progressBarActive';

export const Style: Record<TStyleKey, CSSProperties> = {
  blue: {
    color: '#3c78d8',
  },

  gray: {
    color: 'gray',
  },

  global: {
    fontFamily: 'Pretendard, sans-serif',
    fontWeight: 300,
    wordWrap: 'break-word',
    wordBreak: 'keep-all',
    lineHeight: 1.8,
  },

  sign: {
    fontFamily: "'Parisienne', cursive",
    fontSize: '1.5em',
  },

  profileImg: {
    maxHeight: '320px',
  },

  footerCover: {
    backgroundColor: '#f5f5f5',
    paddingLeft: 0,
    paddingRight: 0,
    // marginTop: '50px',
    marginTop: '50%',
    height: '80px',
  },

  footer: {
    // paddingTop: '10px',
  },

  skillKeywordBadge: {
    fontWeight: 400,
  },

  toc: {
    position: 'fixed',
    right: '20px',
    top: '20%',
    maxHeight: '400px',
    width: '150px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f9f9f9',
    padding: '5px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    opacity: 1,
    transition: 'opacity 0.2s ease-in-out',
  },

  tocButton: {
    position: 'fixed',
    right: '20px',
    top: '20%',
    width: '30px',
    height: '100px',
    backgroundColor: '#ccc',
    cursor: 'pointer',
  },

  tocBarContainer: {
    position: 'fixed',
    right: '20px',
    top: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 1000,
  },

  tocItem: {
    margin: '5px 0',
    cursor: 'pointer',
    color: '#333',
  },

  tocLink: {
    color: '#1D1B16', // 링크의 기본 색상을 회색으로 변경
    textDecoration: 'none', // 링크의 밑줄 제거
  },

  tocLinkActive: {
    color: '#3c78d8', // 활성화된 링크는 파란색으로
  },

  tocItemActive: {
    fontWeight: 'bold',
    color: '#3c78d8', // 활성화된 항목의 색상
  },

  tocItemHover: {
    backgroundColor: '#e0e0e0', // 호버 시 배경색 (짙은 회색)
  },

  tocItemDisabled: {
    color: '#a0a0a0', // 비활성화된 항목 색상 (회색)
  },

  progressBar: {
    backgroundColor: '#E3E2E0',
    height: '2px',
    width: '20px',
    margin: '10px 0',
    transition: 'background 0.2s',
  },

  progressBarActive: {
    backgroundColor: '#3c78d8',
    height: '2px',
    width: '20px',
    margin: '10px 0',
    transition: 'background 0.2s',
  },
};
