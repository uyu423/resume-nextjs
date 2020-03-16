import { CSSProperties } from 'styled-components';

export namespace Style {
  export const blue: CSSProperties = {
    color: '#3c78d8',
  };

  export const gray: CSSProperties = {
    color: 'gray',
  };

  export const global: CSSProperties = {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontWeight: 300,
    wordWrap: 'break-word' as 'break-word',
    wordBreak: 'keep-all' as 'keep-all',
    lineHeight: 1.8,
  };

  export const sign: CSSProperties = {
    fontFamily: "'Parisienne', cursive",
    fontSize: '1.5em',
  };

  export const profileImg: CSSProperties = {
    maxHeight: '320px',
  };

  export const footerCover: CSSProperties = {
    backgroundColor: '#f5f5f5',
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: '50px',
    height: '80px',
  };

  export const footer: CSSProperties = {
    paddingTop: '10px',
  };
}
