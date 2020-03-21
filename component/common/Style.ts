import { CSSProperties } from 'styled-components';

export const Style: { [key: string]: CSSProperties } = {
  blue: {
    color: '#3c78d8',
  },

  gray: {
    color: 'gray',
  },

  global: {
    fontFamily: "'Noto Sans KR', sans-serif",
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
    marginTop: '50px',
    height: '80px',
  },

  footer: {
    paddingTop: '10px',
  },
};
