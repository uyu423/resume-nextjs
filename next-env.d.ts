// / <reference types="next" />
// / <reference types="next/types/global" />
// / <reference types="next-images" />

// import { CSSProperties } from 'styled-components';

// declare module '*.module.css' {
//   const classes: { [key: string]: CSSProperties };
//   export default classes;
// }

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.css' {
  const value: { [key: string]: string };
  export default value;
}
